<script>
  // Svelte
  import { onMount } from "svelte";

  // Utils
  import DateUtils from "../utils/date";
  import ChatUtils from "../utils/chat";

  let isSelf = true;
  let positionClass = "right";

  // Update the position class based on whether the user is the message sender or not
  export let message = {};
  $: positionClass = isSelf ? "right" : "left";
  $: isSelf = ChatUtils.isSelf(message);

  onMount(() => {});
</script>

<style>
  .chat-bubble {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    min-width: 5rem;
    max-width: 12rem;
    width: fit-content;

    margin-top: 1rem;
    margin-bottom: 1rem;

    padding: 1rem 1rem 0 1rem;
  }

  .chat-bubble:first-of-type {
    margin-top: 2rem;
  }

  .chat-bubble:last-of-type {
    margin-bottom: 2rem;
  }
  .left {
    margin-left: 1rem;
    margin-right: auto;
    background-color: #d2f4ff;
    border-radius: 8px 8px 8px 0px;
  }
  .right {
    margin-right: 1rem;
    margin-left: auto;
    background-color: #fffede;
    border-radius: 8px 8px 0px 8px;
  }

  .message-text {
    margin: 0;
  }

  .time {
    float: right;
    font-size: 0.8rem;
    font-weight: bold;
    padding-bottom: 1rem;
  }
</style>

<div class="chat-bubble {positionClass}">
  <p class="message-text">{message.text}</p>
  <span class="time">{DateUtils.getTime(message.dateSent.seconds)}</span>
</div>
