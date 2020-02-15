<script>
  let btnClass = "btn-md";
  $: if (size) {
    btnClass = `btn-${size}`;
  }
  export let id = "";
  export let size;
</script>

<style>
  button {
    display: block;
    border: none;
    color: white;
    background: #2a66df;
    text-transform: uppercase;
    font-size: 0.75rem;
    padding: auto 1rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  }

  button:focus,
  button:hover {
    outline: none;
    background: #16439e;
    transition: 0.5s;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }

  .btn-sm {
    padding: 1rem;
    border-radius: 5px;
    min-width: 8rem;
  }
  .btn-md {
    padding: 1.5rem 1rem;
    border-radius: 10px;
    min-width: 10rem;
  }
  .btn-lg {
    padding: 1.5rem 1rem;
    border-radius: 15px;
    min-width: 12rem;
    font-size: 0.85rem;
  }
  .btn-xl {
    padding: 2.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 15px;
    min-width: 20rem;
  }
</style>

<button on:click class={btnClass} {id}>
  <slot>Button</slot>
</button>
