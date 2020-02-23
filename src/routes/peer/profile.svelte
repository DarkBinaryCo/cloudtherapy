<script>
  // Svelte
  import { onMount } from "svelte";

  //
  import toastr from "toastr";

  // Utils
  import { logout } from "../../utils/auth";

  // Stores
  import { userStore } from "../../stores";

  // Services
  import UserService from "../../services/UserService";

  // Components
  import Button from "../../components/Button.svelte";
  import TopNav from "../../components/TopNav.svelte";
  import BottomNav from "../../components/BottomNav.svelte";

  let generatedName = "";
  let gender = "male";
  let county;

  let profileTitle = "";
  let isNewAccount; // Profile completed or not

  let inputGenerateName;

  $: generatedName = $userStore.name;
  $: isNewAccount = $userStore.isNew;
  $: profileTitle = isNewAccount ? "Welcome onboard!" : "Welcome back";

  // Generate a random name based on gender
  const generateName = () => {
    if (!chance) return;

    const nameGeneratorOptions = { nationality: "en", gender };
    generatedName = chance.name(nameGeneratorOptions);
    return generatedName;
  };

  //TODO: Refactor this
  // Update profile
  const updateProfile = () => {
    const _updateData = {
      name: generatedName,
      gender,
      county
    };

    UserService.updateUser(_updateData)
      .then(({ data }) => {
        if (!data.ok)
          throw new Error("Something went wrong while trying to update user");

        userStore.update(storeVal => {
          storeVal.isNew = false;
          return storeVal;
        });

        // Everything's fine if we got to this point
        toastr.success("Successfully updated profile", "Sweet!");
      })
      .catch(err => {
        console.error("Update failed: \n", err.message, err);
        toastr.error(
          "Failed to update user. If this problem persists, contact support",
          "Technical error"
        );
      });
  };

  onMount(() => {
    generateName();
  });
</script>

<style>
  .container {
    padding: 2rem;
    padding-top: 0.5rem;
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

<TopNav hasBack={false}>
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
    <select id="selectCounty" bind:value={county}>
      <option value="nairobi">Nairobi</option>
    </select>
  </div>

  <div class="btn-complete-wrapper">
    <Button id="btn-complete-profile" on:click={updateProfile}>
      Complete profile
    </Button>
  </div>
</div>

<BottomNav active="profile" />

<svelte:head>
  <script src="js/chance.min.js">

  </script>
</svelte:head>
