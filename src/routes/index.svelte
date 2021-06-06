<script context="module">
  import requests from '../data/requests.js';

  export async function preload() {
    const latestEvents = await requests.getleagueEvents();

    return { latestEvents };
  }
</script>

<script>
  import SearchBar from '../components/SearchBar.svelte';
  import CardContainer from '../components/CardsContainer.svelte';  
  import EventsCountainer from '../components/EventsContainer.svelte';
  import Options from '../components/Options.svelte';

  import utils from '../data/utils.js';

  async function search(event) {
    const name = event.detail.value;

    const foundData = await requests.getTeams(name);

    if (!foundData || !foundData.length) {
      isNotFound = true;
      options = [];

      return;
    }

    if (foundData.length > 1) {
      options = utils.getOptions(foundData);
      isNotFound = false;

      return;
    }

    if (foundData.length === 1 && !foundItems[foundData[0].idTeam]) {
      if (foundItems.find(team => team.idTeam === foundData[0].idTeam)) {
        return;
      }

      foundItems = [
        foundData[0],
        ...foundItems
      ]

      isNotFound = false;
      options = [];
    }
  }

  async function searchById(event) {
    const { id } = event.detail;

    const teamData = await requests.getTeamById(id);

    if (teamData) {
      if (foundItems.find(team => team.idTeam === teamData.idTeam)) {
        return;
      }

      foundItems = [
        teamData,
        ...foundItems
      ]

      isNotFound = false;
      options = [];
    }
  }

  function removeTeam(event) {
    const { id } = event.detail;

    foundItems = foundItems.filter(item => item.idTeam !== id);
  }

  export let latestEvents;

  let foundItems = [];
  let isNotFound = false;
  let options = [];

</script>

<SearchBar on:search={search} />
{#if options.length}
  <Options {options} on:searchById={searchById} />
{/if}
<CardContainer {foundItems} {isNotFound} on:removeTeam={removeTeam}/>
<EventsCountainer {latestEvents} />