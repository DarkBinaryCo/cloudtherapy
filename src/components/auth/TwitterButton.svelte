<script>
  import { signInWithRedirect } from "../../utils/auth";

  // Components
  import AuthButton from "./_AuthButton.svelte";

  // Signin with google
  const twitterSignin = () => signInWithRedirect("twitter");
</script>

<style>
  img {
    height: 24px;
  }

  :global(.twitter-btn) {
    background-color: #1da1f2 !important;
    color: white;
  }
</style>

<AuthButton className="twitter-btn" on:click={twitterSignin}>
  <img src="logos/twitter.svg" alt="Twitter logo" slot="prepend" />
  <slot>Continue with Twitter</slot>
</AuthButton>
