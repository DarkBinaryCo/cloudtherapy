<script context="module">
  let currChatId;

  export async function preload(page, session) {
    const { chatId } = page.params;
    currChatId = chatId;

    ChatService.getChats();
    ChatService.getChatById(currChatId);
    ChatService.getChatMessages(currChatId);
  }
</script>

<script>
  // Svelte
  import { onMount } from "svelte";

  // Constants
  import { SITE_NAME } from "../../../constants";

  // Services
  import ChatService from "../../../services/ChatService";

  // Stores
  import { chatStore } from "../../../stores";

  // Utils
  import ChatUtils from "../../../utils/chat";

  // Components
  import Button from "../../../components/Button.svelte";
  import ChatBubble from "../../../components/ChatBubble.svelte";
  import ChatInputBox from "../../../components/ChatInputBox.svelte";
  import LoadingPage from "../../../components/LoadingPage.svelte";
  import TopNav from "../../../components/TopNav.svelte";

  // Functionality
  let chatMessageContainer;
  let otherUserName;

  $: otherUserName = $chatStore.currentChat
    ? $chatStore.currentChat.otherUser.name
    : "Unknown";

  // Lifecycle
  onMount(() => {
    ChatService.getChats();
    ChatService.getChatById(currChatId);
    ChatService.getChatMessages(currChatId);

    // Store subscription
    chatStore.subscribe(_ => {
      if (chatMessageContainer) {
        chatMessageContainer.scrollTop = chatMessageContainer.scrollHeight;
      }
    });
  });
</script>

<style>
  .chat-messages {
    height: calc(100vh - 10rem);
    padding-bottom: 2rem;
    overflow-y: auto;
  }
</style>

<svelte:head>

  <title>Conversation with {otherUserName} - {SITE_NAME}</title>
</svelte:head>

<TopNav>
  <div slot="title">{otherUserName}</div>
  <!-- TODO: Hide/show depending on whether the user is a therapist or not -->
  <div slot="right">
    <!-- <Button size="sm" href=>Call Therapist</Button> -->
  </div>
</TopNav>

<div class="d-flex-reverse chat-messages" bind:this={chatMessageContainer}>
  {#if $chatStore.messages}
    {#each $chatStore.messages as message}
      <ChatBubble {message} />
    {/each}
  {:else}
    <!-- Loading messages -->
    <LoadingPage>Getting your chats</LoadingPage>
  {/if}
</div>

<ChatInputBox chat={$chatStore.currentChat} />
