import {
    writable
} from 'svelte/store';

const defaultChatData = {
    isLoading: true,
    chats: [],
    messages: []
}

const chatStore = writable(defaultChatData);

export default chatStore;