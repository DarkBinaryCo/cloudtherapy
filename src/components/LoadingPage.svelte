<script>
  import OverlappingSpinner from "./spinners/OverlappingSpinner.svelte";
</script>

<style>
  /* Personal styles */
  .loading-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }
  .loading-container h2 {
    color: #1a2a3ac2;
    font-weight: 300;
  }
</style>

<div class="loading-container">
  <OverlappingSpinner />
  <h2>
    <slot>Just a sec</slot>
  </h2>
</div>
