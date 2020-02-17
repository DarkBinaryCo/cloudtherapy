<script>
  // Svelte imports
  import { onMount } from "svelte";

  // Custom imports
  import { authStore } from "../stores";
  import { auth as firebaseAuth } from "../utils/firebase";
  import AuthCallbacks from "../callbacks/Auth";

  import LoadingPage from "../components/LoadingPage.svelte";

  //* LIFECYCLE METHODS
  onMount(() => {
    // Firebase Auth state changed ~ triggered when user is logged in/out
    firebaseAuth.onAuthStateChanged(AuthCallbacks.handleAuthChanged);
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
