<script>
  // Svelte imports
  import { onMount } from "svelte";

  // Custom imports
  import LoadingPage from "../components/LoadingPage.svelte";
  import { authStore } from "../stores/authStore";
  import { handleAuthChanged } from "../callbacks/auth";

  //* LIFECYCLE METHODS
  onMount(() => {
    // Firebase Auth state changed ~ triggered when user is logged in/out
    firebase.auth().onAuthStateChanged(handleAuthChanged);
  });
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
  {#if $authStore.isLoadingAuth === true}
    <LoadingPage />
  {:else}
    <slot />
  {/if}
</main>
