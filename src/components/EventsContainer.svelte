<script>
  import CountryEvents from './CountryEvents.svelte';

  export let latestEvents;
</script>

<style>
  .leagueEvents {
    position: relative;
    display: flex;
    margin-bottom: 20px;
    padding-left: 5px;
    overflow-x: auto;
  }

  .leagueEvents::-webkit-scrollbar {
    height: 8px;
  }
  
  .leagueEvents::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  .leagueEvents::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
</style>
<div class="container">
  {#each latestEvents as leagueEvents}
  <div class="leagueEvents">
    <CountryEvents {leagueEvents} />
  </div>
  {/each}
</div>