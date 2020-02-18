<script>
  import DateUtils from "../utils/date";

  let positionClass;

  $: positionClass = isSelf ? "right" : "left";

  export const isSelf = true;
  export const message = {};
</script>

<style>
  .chat-bubble {
    padding: 1rem;
    min-height: 4rem;
    max-width: 20rem;
  }

  .left {
    float: left;
    background-color: blue;
  }
  .right {
    float: left;
    background-color: red;
  }

  .time {
    float: right;
    font-size: 0.8rem;
    font-weight: bold;
  }
</style>

<div class="chat-bubble {positionClass}">
  <p>{message.text}</p>
  <span class="time">DateUtils.getTime(message.dateSent.seconds)</span>
</div>
