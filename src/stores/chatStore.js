import {
    writable
} from 'svelte/store';

const defaultChatData = {
    isLoading: true,
    chats: [],
    chatMessages: []
}

const chatStore = writable(defaultChatData);

export default chatStore;