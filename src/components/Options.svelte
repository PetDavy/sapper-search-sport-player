<script>
  export let options;
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
  }

  .option:empty {
    display: none;
  }
</style>

<div class="container">
  <div class="options">
    {#each options as option}
      <div class="option" data-id={option.id}>
        {option.name}
      </div>
    {/each}
  </div>
</div>