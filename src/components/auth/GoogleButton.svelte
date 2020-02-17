<script>
  import AuthUtils from "../../utils/auth";

  // Components
  import AuthButton from "./_AuthButton.svelte";

  // Signin with google
  const googleSignin = () => AuthUtils.signInWithRedirect("google");
</script>

<style>
  img {
    height: 24px;
  }
</style>

<AuthButton>
  <img src="logos/google.svg" alt="Google logo" slot="prepend" />
  <slot>Continue with Google</slot>
</AuthButton>
