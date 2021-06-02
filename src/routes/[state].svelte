<script context="module">
  import requests from '../data/requests.js'; 

  export async function preload(page) {
    const state = page.params.state;
    const team = await requests.getTeams(page.params.state);

    if (team === null) {
      this.error(404, 'Team not found')
    }

    return {state, team}
  }
</script>

<script>
  import SearchBar from '../components/SearchBar.svelte';
  import CardContainer from '../components/CardsContainer.svelte';  
  import Loader from '../components/Loader.svelte';

  export let state;

  let isLoading = true;
</script>

<div class="container">
  <h1 class="title is-1 mgt-medium has-text-centered">{state}</h1>
</div>

<SearchBar />
{#if isLoading}
  <Loader />
{:else}
  <CardContainer />
{/if}