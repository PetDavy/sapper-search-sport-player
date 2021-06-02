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

  async function search(event) {
    const name = event.detail.value;

    const foundData = await requests.getTeams(name);

    if (!foundData || !foundData.length) {
      isNotFound = true;
      options = [];

      return;
    }

    if (foundData.length > 1) {
      const names = foundData.map(team => team.strTeam ? team.strTeam : team.strAlternate);

      options = foundData.map(team => {
        let name = team.strTeam ? team.strTeam : team.strAlternate;

        const nameFirst = names.indexOf(name);
        const nameLast = names.lastIndexOf(name);

        if (nameFirst !== nameLast) {
          name += ` (${team.strSport})`;
        }

        isNotFound = false;

        return {
          id: team.idTeam,
          name,
        }
        
      });

      return;
    }

    if (foundData.length === 1 && !foundItems[foundData[0].idTeam]) {
      foundItems = {
        ...foundItems,
        [foundData[0].idTeam]: foundData[0],
      };

      isNotFound = false;
      options = [];
    }
  }

  export let latestEvents;

  let foundItems = {};
  let isNotFound = false;
  let options = [];

</script>

<SearchBar on:search={search} />
{#if options.length}
  <Options {options} />
{/if}
<CardContainer {foundItems} {isNotFound}/>
<EventsCountainer {latestEvents} />