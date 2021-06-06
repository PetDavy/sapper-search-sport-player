<script context="module">
  import requests from '../data/requests.js'; 
  import utils from '../data/utils.js';

  export async function preload(page) {
    const param = page.params.param;
    const teams = await requests.getTeams(param);
    let team = null;
    let options = [];

    if (teams === null) {
      this.error(404, 'Team not found')
    }

    if (teams.length > 1) {
      options = utils.getOptions(teams)
    }

    if (teams.length === 1) {
      team = teams[0];
    }

    return {team, options}
  }
</script>

<script>
  import SearchBar from '../components/SearchBar.svelte';
  import Options from '../components/Options.svelte';
  import ItemInfo from '../components/ItemInfo.svelte';  
  import Loader from '../components/Loader.svelte';

  import { onMount } from 'svelte';

  export let team;
  export let options = [];

  let isLoading = true;

  onMount(() => {
    if (team) {
      isLoading = false;
    }
  })
</script>

<div class="container">
</div>

<SearchBar />
{#if options.length}
  <Options {options} />
{/if}
{#if isLoading}
  <Loader />
{:else}
  <ItemInfo {team} />
{/if}