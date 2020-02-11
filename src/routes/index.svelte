<script>
  import Button from "../components/Button.svelte";

  let goToAuth = () => {
    window.location.href = "/auth";
  };
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
    justify-content: center;
  }

  .btn-container {
    width: 12rem;
    margin: 0 auto;
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
</style>

<svelte:head>
  <title>{'SITE_NAME'}</title>
</svelte:head>

<div class="d-flex container" id="bg-img">
  <h1>
    It's okay
    <br />
    not to be okay
  </h1>
  <p>Share your issues with peers going through the same thing anonymously</p>
  <div class="btn-container">
    <Button size="lg" on:click={goToAuth}>Get started</Button>
  </div>
</div>
