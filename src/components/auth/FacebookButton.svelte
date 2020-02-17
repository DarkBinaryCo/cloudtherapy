<script>
  import { signInWithRedirect } from "../../utils/auth";

  // Components
  import AuthButton from "./_AuthButton.svelte";

  // Signin with google
  const facebookSignin = () => signInWithRedirect("facebook");
</script>

<style>
  img {
    height: 24px;
  }

  :global(.facebook-btn) {
    background-color: #4267b2 !important;
    color: white;
  }
</style>

<AuthButton className="facebook-btn" on:click={facebookSignin}>
  <img src="logos/facebook.svg" alt="Facebook logo" slot="prepend" />
  <slot>Continue with Facebook</slot>
</AuthButton>
