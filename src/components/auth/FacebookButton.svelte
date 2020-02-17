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

  :global(.facebook-btn) {
    background-color: #4267b2 !important;
    color: white;
  }
</style>

<AuthButton classes="facebook-btn">
  <img src="logos/facebook.svg" alt="Facebook logo" slot="prepend" />
  <slot>Continue with Facebook</slot>
</AuthButton>
