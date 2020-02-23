<script context="module">
  export async function preload(page, session) {
    const { chatId } = page.params;

    currChatId = chatId;
  }
</script>

<script>
  import { onMount } from "svelte";
  export let active = "";

  onMount(() => {});
</script>

<style>
  nav {
    width: 100%;
    max-width: 56em;
    height: 5rem;
    background: #fff;
    border-top: 1px solid #e3e3e3;
    position: fixed;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
  }
  .nav-item {
    width: 5rem;
    height: 4rem;
    margin: 0 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    flex-grow: 1;
    border-radius: 10px;
    padding-top: 0.5rem;
  }

  .nav-item.active {
    background: #2269f82e;
  }

  .nav-item a {
    text-decoration: none;
  }

  .nav-item img {
    display: flex;
    margin: auto;
    height: 2.4rem;
  }

  .nav-item span {
    margin-top: 0.1rem;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>

<nav>
  <div class="nav-item" class:active={active === 'chats'}>
    <a href="user/chats" prefetch>
      <img src="icons/comment.svg" alt="Chat icon" />
      <span>Chats</span>
    </a>
  </div>
  <div class="nav-item" class:active={active === 'therapists'}>
    <a href="user/therapists" prefetch>
      <img src="icons/heart.svg" alt="Therapist icon" />
      <span>Therapists</span>
    </a>
  </div>
  <div class="nav-item" class:active={active === 'profile'}>
    <a href="peer/profile" prefetch>
      <img src="icons/user.svg" alt="Profile icon" />

      <span>Profile</span>
    </a>
  </div>
</nav>
