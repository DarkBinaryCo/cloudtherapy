import {
    writable
} from 'svelte/store';

// Default data for our store 
const defaultAuthData = {
    isLoggedIn: false
};

// Create and export the store
export const authStore = writable(defaultAuthData);