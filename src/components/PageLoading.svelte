<style>
  .container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 80vh;
  }
</style>

<div class="container">
  <h1>
    <slot name="title">Loading...</slot>
  </h1>
  <p>
    <slot>Please wait</slot>
  </p>
</div>
