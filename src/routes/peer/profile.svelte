<script>
  // Svelte
  import { onMount } from "svelte";

  // Utils
  import { logout } from "../../utils/auth";

  // Stores
  import { userStore } from "../../stores";

  // Components
  import Button from "../../components/Button.svelte";
  import TopNav from "../../components/TopNav.svelte";

  let gender = "male";
  let generatedName = "";
  let profileTitle = "";
  let isNewAccount; // Profile completed or not

  let inputGenerateName;

  $: isNewAccount = $userStore.isNew;
  $: profileTitle = isNewAccount ? "Welcome onboard!" : "Welcome back";

  // Generate a random name based on gender
  const generateName = () => {
    const nameGeneratorOptions = { nationality: "en", gender };
    generatedName = chance.name(nameGeneratorOptions);
    return generatedName;
  };

  onMount(() => {
    generateName();
  });
</script>

<style>
  .container {
    padding: 2rem;
  }

  .container h1 {
    font-weight: bolder;
    text-align: center;
    margin-bottom: 0.1rem !important;
  }

  .container p {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
  .input-container label {
    display: block;
    font-size: 12px;
    font-weight: bolder;
    text-transform: uppercase;
  }
  .input-container small {
    display: block;
  }

  .input-container {
    margin: 1rem 0;
  }
  .input-container input,
  .input-container select {
    box-sizing: content-box;
    display: block;
    width: 90%;
    padding: 1rem;
    border-radius: 10px;
    outline: none;
    border: 1px solid #bebdbd;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
  }

  .input-container input:focus,
  .input-container select:focus,
  .input-container input:active,
  .input-container select:active {
    outline: none;
    border: 1px solid #535353;
  }

  :global(#btn-complete-profile) {
    margin: auto;
  }

  .btn-generate-name {
    margin-bottom: 0.4rem;
  }

  .btn-complete-wrapper {
    margin-top: 2rem;
  }
</style>

<TopNav>
  <div slot="right">
    <Button size="sm" id="btn-top-nav" on:click={logout}>Logout</Button>
  </div>
</TopNav>

<div class="container">
  <!-- TODO: Toggle this text based on whether user is a new user or not -->
  <h1 class="text-center">{profileTitle}</h1>

  {#if isNewAccount}
    <p class="text-center">Please complete your profile to continue</p>
  {/if}

  <div class="input-container">
    <label for="inputName">Made up name</label>
    <input
      type="text"
      bind:value={generatedName}
      id="inputName"
      bind:this={inputGenerateName} />
    <div class="btn-generate-name">
      <Button size="sm" on:click={generateName}>Generate name</Button>
    </div>

    <small>Use a made up name to stay anonymous</small>

  </div>
  <div class="input-container">
    <label for="">Gender</label>
    <select bind:value={gender} on:change={generateName}>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
  <div class="input-container">
    <label for="selectCounty">County</label>
    <select id="selectCounty">
      <option value="1">Nairobi</option>
    </select>
  </div>

  <div class="btn-complete-wrapper">
    <Button id="btn-complete-profile">Complete profile</Button>
  </div>
</div>

<svelte:head>
  <script src="js/chance.min.js">

  </script>
</svelte:head>
