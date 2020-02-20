<script>
  // Svelte
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  // Constants
  import { SITE_NAME } from "../../constants";

  // Firebase
  import { firebase, auth as firebaseAuth } from "../../utils/firebase";

  // Callbacks
  import AuthCallbacks from "../../callbacks/Auth";

  // Store
  import { authStore } from "../../stores";

  // Components
  import TopNav from "../../components/TopNav.svelte";
  import GoogleButton from "../../components/auth/GoogleButton.svelte";
  import FacebookButton from "../../components/auth/FacebookButton.svelte";
  import TwitterButton from "../../components/auth/TwitterButton.svelte";

  //? Redirect user to chat if they are logged in
  $: if ($authStore.isLoggedIn) {
    window.location.replace("user/chats");
  }

  onMount(() => {
    firebaseAuth
      .getRedirectResult()
      .then(AuthCallbacks.handleAuthSuccess)
      .catch(AuthCallbacks.handleAuthFailed);
  });
</script>

<style>
  .container {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fafafa;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: bolder;
    line-height: 1rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    color: #616161;
    margin-top: 0;
  }
</style>

<svelte:head>
  <title>SignIn / SignUp - {SITE_NAME}</title>
</svelte:head>

<TopNav />

<div class="container">
  <h1 transition:fade>Hi there</h1>
  <p transition:fade>Let's get started</p>

  <div id="auth-container">
    <GoogleButton />
    <FacebookButton />
    <TwitterButton />
  </div>
  {#if $authStore.isLoggedIn}
    <p>Redirecting you...</p>
  {/if}
</div>
