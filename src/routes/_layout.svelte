<script>
  import BottomNav from "../components/BottomNav.svelte";

  // export const segment;
</script>

<style>
  main {
    flex-grow: 1;
    position: relative;
    max-width: 56em;
    background-color: white;
    overflow-x: none;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<main>
  <slot />
</main>
