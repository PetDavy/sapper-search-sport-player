<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let value = '';

  function search() {
    dispatch('search', {value});

    value = '';
  }
</script>

<style>
  .level-item {
    justify-content: flex-start;
  }

  .control {
    width: 500px;
  }
</style>

<div class="level container">
  <div class="level-item is-wide">
    <div class="field has-addons">
      <p class="control">
        <input
          class="input"
          type="text"
          placeholder="Find a team"
          bind:value={value}
        >
      </p>
      <p class="control">
        <button class="button" on:click={search}>
          Search
        </button>
      </p>
    </div>
  </div>
</div>