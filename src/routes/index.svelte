<script context="module">
  import requests from '../data/requests.js';

  export async function preload() {
    const res = await requests.getleagueEvents();

    console.log(res);
  }
</script>

<script>
  import SearchBar from '../components/SearchBar.svelte';
  import CardContainer from '../components/CardsContainer.svelte';  
  import EventsCountainer from '../components/EventsContainer.svelte';
</script>

<SearchBar />
<EventsCountainer />
<CardContainer />