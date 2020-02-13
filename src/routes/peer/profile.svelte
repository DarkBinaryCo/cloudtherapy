<script>
  import { onMount } from "svelte";
  import Button from "../../components/Button.svelte";

  let gender = "male";
  let generatedName = "";

  let inputGenerateName;

  function generateName() {
    const nameGeneratorOptions = { nationality: "en", gender };
    generatedName = chance.name(nameGeneratorOptions);
    return generatedName;
  }

  onMount(() => generateName());
</script>

<style>
  .container {
    padding: 2rem;
  }

  .container h1 {
    font-size: 2.4rem;
    font-weight: bolder;
    text-align: center;
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

  .btn-complete-wrapper {
    width: 10rem;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-generate-name {
    margin-bottom: 0.4rem;
  }
</style>

<div class="container">
  <h1>Welcome</h1>
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
    <select bind:value={gender}>
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
  <div class="input-container">
    <label for="">Sub-County</label>
    <select name="" id="">
      <option value="1">Embakasi</option>
    </select>
  </div>

  <div class="btn-complete-wrapper ">
    <Button>Complete profile</Button>
  </div>
</div>

<svelte:head>
  <script src="./js/chance.min.js">

  </script>
</svelte:head>
