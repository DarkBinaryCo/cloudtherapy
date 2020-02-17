<script>
  export let className = "";
</script>

<style>
  button {
    height: 4.2rem;
  }

  .btn {
    min-width: 18rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: bolder;
    margin-bottom: 2rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  }

  .btn:hover {
    outline: none;
    transition: 0.5s;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0.555);
  }
  .btn:focus {
    font-size: 1rem;
  }
  .prepend {
    margin-right: 0.5rem;
  }

  .append {
    margin-left: 0.5rem;
  }
</style>

<button class="btn {className}" on:click>
  <div class="prepend">
    <slot name="prepend" />
  </div>
  <slot>Continue with this</slot>
  <div class="append">
    <slot name="append" />
  </div>
</button>
