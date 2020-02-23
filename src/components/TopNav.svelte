<script>
  export let hasBack = true;
  export let backLink = "";

  const goBack = () => {
    if (backLink.length) {
      window.location.replace(backLink);
    } else {
      window.history.back();
    }
  };
  const goHome = () => window.location.replace("/");
</script>

<style>
  a {
    text-decoration: none;
  }

  .top-nav {
    height: 3.2rem;
    width: 100%;
    padding: 0.2rem 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
  }

  .title {
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

  /* Push content to the right */
  .right {
    margin-left: auto;
    margin-right: 3.6rem;
  }
</style>

<div class="top-nav">
  {#if hasBack}
    <button on:click={goBack}>
      <img src="icons/back.svg" alt="Back" />
    </button>
  {/if}

  <div class="title">
    <slot name="title">
      <a on:click={goHome} href="#!">Speed Therapy</a>
    </slot>
  </div>

  <slot>
    <!-- optional fallback -->
  </slot>

  <div class="right">
    <slot name="right">
      <!-- optional fallback -->
    </slot>
  </div>
</div>
