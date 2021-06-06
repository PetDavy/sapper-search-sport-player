<script context="module">
  import requests from '../data/requests.js'; 
  import utils from '../data/utils.js';

  export async function preload(page) {
    const param = page.params.param;
    let teams;
    let team = null;
    let options = [];

    if(param.startsWith('teamid=')) {
      const [,id] = param.split('=');

      team = await requests.getTeamById(id);

      return {team, options};
    }

    teams = await requests.getTeams(param);

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

  import { onMount, afterUpdate } from 'svelte';

  export let team;
  export let options = [];
  let error = '';

  let isLoading = true;

  onMount(() => {
    if (team) {
      isLoading = false;
    }
  });

  afterUpdate(() => {
    if (team) {
      isLoading = false;
    }
  })

  const getTeam = async (event) => {
    isLoading = true;
    let teams;

    const { value } = event.detail;

    teams = await requests.getTeams(value);

    if (teams === null) {
      error = 'Team not found';

      return;
    }

    if (teams.length > 1) {
      options = utils.getOptions(teams);
      error = '';
    }

    if (teams.length === 1) {
      team = teams[0];
      error = '';
    }

  }
</script>

<div class="container">
</div>

<SearchBar on:search={getTeam}/>
{#if error}
  <div class="container">
    <h3 class="title -s-3">{error}</h3>
  </div>
{/if}
{#if options.length}
  <Options {options} isInInfo={true}/>
{/if}
{#if isLoading}
  <Loader />
{:else}
  <ItemInfo {team} />
{/if}