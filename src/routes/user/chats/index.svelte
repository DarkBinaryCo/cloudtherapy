<script>
  // Svelte
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  //
  import toastr from "toastr";

  // Constants
  import { SITE_NAME } from "../../../constants";

  // Stores
  import { authStore, chatStore, userStore } from "../../../stores";

  // Services
  import ChatService from "../../../services/ChatService";
  import PeerService from "../../../services/PeerService";

  // Utils
  import ChatUtils from "../../../utils/chat";
  import DateUtils from "../../../utils/date";

  // Components
  import BottomNav from "../../../components/BottomNav.svelte";
  import Button from "../../../components/Button.svelte";
  import LoadingPage from "../../../components/LoadingPage.svelte";
  import TopNav from "../../../components/TopNav.svelte";

  let isMatching = false;
  const findPeers = () => {
    isMatching = true;

    setTimeout(() => {
      isMatching = false;
      PeerService.matchPeers().then(({ data }) => {
        const response = data;

        // Peers found
        if (response.data.count > 0) {
          const personaNoun = count === 1 ? "match" : "matches";
          toastr.success(`Found ${count} ${personaNoun}`, "Sweet!");
        } else {
          // Peers not found
          toastr.warning("No matches were found", "");
        }
        // isMatching = false;
      });
    }, 1000);
  };

  onMount(() => {
    ChatService.getChats();
  });
</script>

<style>
  .chat-item {
    height: 4rem;
    background: #fff;
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

  .chat-item a {
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
  :global(main) {
    overflow-y: hidden;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow-y: auto;
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
    font-size: 2.25rem;
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

  :global(#chat-not-found-btn) {
    margin: auto;
  }
</style>

<svelte:head>
  <title>Chats - {SITE_NAME}</title>
</svelte:head>

<TopNav>
  <!-- Only show this if we have chats - otherwise, we have option at the bottom -->
  <div slot="right">
    {#if $chatStore.chats.length}
      <Button size="sm" id="btn-top-nav" on:click={findPeers}>
        Find Peers
      </Button>
    {/if}
  </div>
</TopNav>

{#if !isMatching}
  <div class="container full-height" in:fade>
    <!-- Start of chat store loading check -->
    {#if $chatStore.isLoading}
      <LoadingPage>
        <span slot="title">Getting your chats</span>
        <span slot="description">Just a sec</span>
      </LoadingPage>
    {:else}
      <div>
        {#if $chatStore.chats.length}
          <div class="chats">
            {#each $chatStore.chats as chat}
              <div class="chat-item ">
                <a href={`user/chats/${chat.id}`}>
                  <h4 class="chat-title">
                    {ChatUtils.getOtherUser(chat).name}
                  </h4>

                  <span class="chat-text">
                    {chat.isNew ? 'New chat 😁' : chat.lastMessage.text}
                  </span>

                  <div class="chat-time">
                    <span>{DateUtils.getTime(chat.dateAdded.seconds)}</span>
                  </div>
                </a>
              </div>
            {/each}
          </div>
        {:else}
          <div class="chats-not-found">
            <h1>No chats yet</h1>
            <img src="illustrations/no_data.svg" alt="" />
            <p>Once you find peers, your chats with them will appear here</p>

            <div class="button-container">
              <Button size="md" on:click={findPeers} id="chat-not-found-btn">
                Find Peers
              </Button>
            </div>
          </div>
        {/if}
      </div>
    {/if}
    <!-- End of chat store loading check -->
  </div>
{:else}
  <LoadingPage>
    <span slot="title">Finding your peers</span>
  </LoadingPage>
{/if}

<BottomNav active="chats" />
