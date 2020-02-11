<script>
  let btnClass = "md";
  $: switch (size) {
    case "sm":
      btnClass = "btn-sm";
      break;
    case "lg":
      btnClass = "btn-lg";
      break;
    case "xl":
      btnClass = "btn-xl";
      break;
    default:
      // Normal button - md
      btnClass = "btn";
  }

  export let size, id;
</script>

<style>
  button {
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

  .btn {
    height: 3rem;
    border-radius: 10px;
    min-width: 10rem;
  }

  .btn-sm {
    height: 2rem;
    border-radius: 5px;
    min-width: 8rem;
  }
  .btn-lg {
    height: 4rem;
    border-radius: 15px;
    min-width: 12rem;
  }
  .btn-xl {
    height: 5rem;
    font-size: 1.2rem;
    border-radius: 15px;
    min-width: 20rem;
  }
</style>

<button on:click class={btnClass} {id}>
  <slot>Button</slot>
</button>
