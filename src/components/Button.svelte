<script>
  let btnClass = "btn-md";
  $: if (size) {
    btnClass = `btn-${size}`;
  }

  //* EXPORTS
  export let id = "";
  export let href = "";
  export let size;
  export let type = "button";

  // Change the button type to link if a href attribute is specified
  $: if (type === "button" && href.length) {
    type = "link";
  }
</script>

<style>
  .btn {
    display: block;
    border: none;
    color: white;
    background: #2a66df;
    text-transform: uppercase;
    font-size: 0.75rem;
    padding: auto 1rem;
    text-decoration: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  }

  .btn:focus,
  .btn:hover {
    outline: none;
    background: #16439e;
    transition: 0.5s;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }

  .btn-sm {
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    min-width: 6.4rem;
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

{#if type === 'button'}
  <button on:click class="btn {btnClass}" {id}>
    <slot name="prepend" />
    <slot>Button</slot>
    <slot name="append" />
  </button>
{:else}
  <a {href} class="btn {btnClass}" {id}>
    <slot name="prepend" />
    <slot>Button</slot>
    <slot name="append" />
  </a>
{/if}
