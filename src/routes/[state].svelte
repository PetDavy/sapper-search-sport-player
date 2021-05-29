<script context="module">
  export async function preload(page) {
    const state = page.params.state;

    return {state}
  }
</script>

<script>
  export let state;
</script>

<div class="container">
  <h1 class="title is-1 mgt-medium has-text-centered">{state}</h1>
</div>