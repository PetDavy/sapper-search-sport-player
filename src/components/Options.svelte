<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let options;
  export let isInInfo = false;;

  const openTeam = (id) => {
    dispatch('searchById', {id});
  }
</script>

<style>
  .options {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .option {
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #f4f4f4;
    white-space: nowrap;
    cursor: pointer;
  }

  .option:empty {
    display: none;
  }
</style>

<div class="container">
  <div class="options">
    {#each options as option}
      {#if isInInfo}
        <a
          href={`/teamid=${option.id}`}
          class="option"
        >
          {option.name}
        </a>
      {:else}
        <div
          class="option"
          data-id={option.id}
          on:click={() => openTeam(option.id)}
        >
          {option.name}
        </div>
      {/if}
    {/each}
  </div>
</div>