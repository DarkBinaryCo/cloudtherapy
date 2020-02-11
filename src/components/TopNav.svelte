<script>
  const goBack = () => {
    window.history.back();
  };

  export let hasBack = true;
</script>

<style>
  .top-nav {
    height: 3.2rem;
    width: 100%;
    padding: 0.2rem 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
  }

  a {
    text-decoration: none;
    margin: 0 0.5rem;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
  }

  button {
    padding: 0;
    height: 100%;
    width: 3.2rem;
    border-radius: 4px;
    background: transparent;
    border: none;
    outline: none;
  }

  button:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }

  button img {
    height: 20px;
  }
</style>

<div class="top-nav">
  {#if hasBack}
    <button on:click={goBack}>
      <img src="icons/back.svg" alt="Back" />
    </button>
  {/if}

  <a href=".">Speed Therapy</a>

  <slot>
    <!-- optional fallback -->
  </slot>
</div>
