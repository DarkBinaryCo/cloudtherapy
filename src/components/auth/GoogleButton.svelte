<script>
  import { signInWithRedirect } from "../../utils/auth";

  // Components
  import AuthButton from "./_AuthButton.svelte";

  // Signin with google
  const googleSignin = () => signInWithRedirect("google");
</script>

<style>
  img {
    height: 24px;
  }
</style>

<AuthButton on:click={googleSignin}>
  <img src="logos/google.svg" alt="Google logo" slot="prepend" />
  <slot>Continue with Google</slot>
</AuthButton>
