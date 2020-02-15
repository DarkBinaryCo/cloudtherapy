import {
    writable
} from 'svelte/store';

// Default data for our store 
const defaultAuthData = {
    loggedIn: false
};

// Create and export the store
export const authStore = writable(defaultAuthData);