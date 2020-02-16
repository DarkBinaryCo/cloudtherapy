<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { handleAuthSuccess } from "../../callbacks/auth";
  import { authStore } from "../../stores/authStore";
  import TopNav from "../../components/TopNav.svelte";

  $: if ($authStore.isLoggedIn) {
    window.location.replace("user/chats");
  }

  onMount(() => {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    // Provider options
    const signinOptions = [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        scopes: ["https://www.googleapis.com/auth/contacts.readonly"],
        customParameters: {
          // Forces account selection even when one account is available.
          prompt: "select_account"
        }
      },
      {
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        scopes: ["public_profile", "email"]
      },
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ];

    // Start signin flow
    ui.start("#auth-container", {
      callbacks: {
        signInSuccessWithAuthResult: handleAuthSuccess,
        uiShown: () =>
          authStore.update(val => {
            val.isLoggedIn = true;
            return val;
          })
      },
      signInSuccessUrl: "http://localhost:3000/user/chats",
      signinOptions,
      // Terms of service url.
      tosUrl: "terms",
      // Privacy policy url.
      privacyPolicyUrl: "privacy-policy"
    });
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

<TopNav />
<div class="container">
  <h1 transition:fade>Hi there</h1>
  <p transition:fade>Let's get started</p>
  <div id="auth-container" />
  {#if $authStore.isLoggedIn}
    <p>Redirecting you...</p>
  {/if}
</div>
