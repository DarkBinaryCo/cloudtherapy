<script>
  import toastr from "toastr";

  // Stores
  import { chatStore, userStore } from "../stores";

  // Services
  import ChatService from "../services/ChatService";
  let message = "";

  let btnSendDisabled;

  $: btnSendDisabled = !message.length;

  // Send a message to the ChatId specified
  const sendMessage = () => {
    const { currentChat } = $chatStore;
    const { currentUser, otherUser } = currentChat;

    if (!message) {
      toastr.error("Can't send an empty message", "Oops, that didn't work");
      return;
    }

    const messageData = {
      chatId: currentChat.chatId,
      message: {
        from: $userStore.uid,
        to: otherUser.uid,
        text: message
      }
    };

    return ChatService.sendMessage(messageData.chatId, messageData).then(() => {
      message = "";
    });
  };

  export const chat = {};
</script>

<style>
  .chat-box-container {
    width: 100%;
    max-width: 56em;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f0f4f7;
  }

  .chat-box-container textarea {
    background-color: transparent;
    flex-grow: 1;
    border: none;
    padding: 1.2rem;
  }

  .chat-box-container textarea {
    resize: none;
  }

  .btn-send-message {
    background: url("../icons/send.svg");
    background-color: transparent;
    background-size: 1.75rem;
    background-position: center;
    background-repeat: no-repeat;

    outline: none;
    border: none;
    height: 2rem;
    padding: 2rem;

    position: relative;
    bottom: 20%;
    right: 0;

    cursor: pointer;
  }

  .btn-send-message:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
</style>

<div class="chat-box-container">
  <textarea rows="4" placeholder="Your message" bind:value={message} />
  <button
    class="btn-send-message"
    on:click={sendMessage}
    disabled={btnSendDisabled}
    title={btnSendDisabled ? "You can't send an empty message" : ''} />
</div>
