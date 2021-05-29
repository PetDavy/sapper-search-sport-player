<script context="module">
  export async function preload(page) {
    const state = page.params.state;

    return {state}
  }
</script>

<script>
  import SearchBar from '../components/SearchBar.svelte';
  import CardContainer from '../components/CardsContainer.svelte';  

  export let state;
</script>

<div class="container">
  <h1 class="title is-1 mgt-medium has-text-centered">{state}</h1>
</div>

<SearchBar />
<CardContainer />