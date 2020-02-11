<script>
  import { fade } from "svelte/transition";
  import { authStore } from "../../../stores/authStore.js";
  import BottomNav from "../../../components/BottomNav.svelte";
  import Button from "../../../components/Button.svelte";
  import PageLoading from "../../../components/PageLoading.svelte";
  import TopNav from "../../../components/TopNav.svelte";

  authStore.subscribe(value => {
    console.log(value);
  });

  let isMatching = false;
  let findPeers = () => {
    isMatching = true;

    setTimeout(() => (isMatching = false), 2000);
  };

  export let chats = [""];
</script>

<style>
  .chat-item {
    height: 4rem;
    background: #fff;
    width: 100%;
    padding: 1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .chat-item:not(:last-of-type) {
    border-bottom: 1px solid #eee;
  }

  .chat-item:hover {
    background: #eee;
    transition: 0.25s;
    cursor: pointer;
  }

  .chat-item > a {
    text-decoration: none;
  }

  .chat-title {
    font-weight: bolder;
    font-size: 12px;
    text-transform: uppercase;
  }

  .chat-text {
    font-size: 14px;
  }

  .chat-time {
    text-align: right;
    font-size: 12px;
    color: grey;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
  }

  .chats-not-found {
    width: 100%;
    text-align: center;
  }

  .chats-not-found img {
    height: 15rem;
    max-width: 100%;
    margin: auto;
  }

  .chats-not-found h1 {
    font-size: 2.75rem;
    font-weight: bolder;
  }
  .chats-not-found p {
    font-size: 1.2rem;
    font-weight: 400;
    color: #4d4d4d;
  }

  .button-container {
    margin: auto;
  }

  .nav-right {
    display: flex;
    flex-grow: 1;
  }

  #btn-top-nav {
    margin-left: auto;
  }
</style>

<TopNav>
  <div class="nav-right">
    <Button size="sm" id="btn-top-nav" on:click={findPeers}>Find Peers</Button>
  </div>
</TopNav>

{#if !isMatching}
  <div class="container" in:fade>

    {#if chats.length}
      <div class="chats">
        <!-- {#each chats as chat} -->
        <div class="chat-item container">
          <a href="user/chats">
            <h4 class="chat-title">Random Name</h4>
            <span class="chat-text">
              Some Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus error nisi, blanditiis ratione quam harum exercitationem
              dolorem impedit autem voluptas neque enim fuga debitis quod,
              tempora vel placeat! Distinctio, porro?
            </span>

            <div class="chat-time">
              <span>14:02</span>
            </div>
          </a>
        </div>
        <div class="chat-item">
          <a href="user/chats">
            <h4 class="chat-title">Random Name</h4>
            <span class="chat-text">
              Some Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus error nisi, blanditiis ratione quam harum exercitationem
              dolorem impedit autem voluptas neque enim fuga debitis quod,
              tempora vel placeat! Distinctio, porro?
            </span>

            <div class="chat-time">
              <span>14:02</span>
            </div>
          </a>
        </div>
        <!-- {/each} -->
      </div>
    {:else}
      <div class="chats-not-found">
        <h1>No chats yet</h1>
        <img src="illustrations/no_data.svg" alt="" />
        <p>Once you find peers, your chats with them will appear here</p>

      </div>

      <div class="button-container">
        <Button size="lg" class="btn-wide" on:click={findPeers}>
          Find Peers
        </Button>
      </div>
    {/if}
  </div>
{:else}
  <PageLoading>
    <slot name="title">Loading stuff</slot>
    <slot name="description">
      Hold on, I'm loading your stuff. Don't eat me
    </slot>
  </PageLoading>
{/if}

<BottomNav />
