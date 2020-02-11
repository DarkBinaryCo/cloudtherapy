import {
    writable
} from 'svelte/store';

export let authStore = writable({
    loggedIn: false
});