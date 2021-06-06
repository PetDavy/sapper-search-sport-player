<script>
  import Card from './Card.svelte';

  export let foundItems;
  export let isNotFound;
</script>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .container-error {
    margin-bottom: 20px;
    padding: 15px;
    background: lightyellow;
  }
</style>

{#if isNotFound}
  <div class="container container-error">
    <p class="title is-4">Not found</p>
  </div>
{/if}

{#if foundItems.length}
  <div class="container">
    {#each foundItems as item (item.idTeam)}
      <Card {item} on:removeTeam />
    {/each}
  </div>
{/if}