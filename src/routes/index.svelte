<script>
  import { fade } from "svelte/transition";
  import { SITE_NAME } from "../constants";
  import { authStore } from "../stores";
  import Button from "../components/Button.svelte";

  let isLoggedIn = null;

  $: isLoggedIn = $authStore.isLoggedIn;
</script>

<style>
  .container {
    /* background-color: #212121; */
    /* color: #f1f1f1; */
    text-align: center;
  }

  .container h1 {
    font-size: 3.2rem;
    font-weight: bolder;
    margin-bottom: 0;
    text-shadow: 0px 2px 2px rgba(212, 212, 212, 0.15);
  }

  .container p {
    font-size: 1.25rem;
    font-weight: 300;
  }

  .container {
    align-items: center;
    justify-content: center;
  }

  #bg-img {
    width: 100%;
    height: 100%;
    background-image: url("../illustrations/feeling_blue.svg");
    background-size: contain;
    background-position-x: left;
    background-position-y: top;
    background-repeat: no-repeat;
  }

  .d-none {
    display: none;
  }
</style>

<svelte:head>
  <title>Find someone to talk to | {SITE_NAME}</title>
</svelte:head>

<div class="d-flex container" id="bg-img" transition:fade>
  <h1>
    It's okay
    <br />
    not to be okay
  </h1>
  <p>Share your issues with peers going through the same thing anonymously</p>
  <div>
    {#if isLoggedIn === true}
      <Button size="lg" type="link" href="user/chats">Go to chats</Button>
    {:else if isLoggedIn === false}
      <Button size="lg" type="link" href="auth">Get started</Button>
    {/if}
  </div>
</div>

<a href="user/chats" class="d-none">Crawler Hidden link</a>
<a href="user/therapists" class="d-none">Crawler Hidden link</a>
<a href="peer/profile" class="d-none">Crawler Hidden link</a>
<a href="therapist/profile" class="d-none">Crawler Hidden link</a>
