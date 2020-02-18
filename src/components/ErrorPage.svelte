<script>
  export let error;
</script>

<style>
  .error-container {
    padding: 1rem;
    border: 1px solid #ff5240;
    background: rgba(255, 83, 64, 0.25);
    color: #531b14;
  }
</style>

<div class="full-height flex-center-all">
  <slot name="title" />

  <div class="error-container">
    <slot>Oops Something went wrong</slot>
  </div>
</div>
