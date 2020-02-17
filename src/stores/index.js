//* IMPORTS
/* 
    This file acts as an aggregator for functions related to `stores`
    Each function corresponds to a file in the `stores/` directory
*/
import authStore from './authStore';
import chatStore from './chatStore';
import userStore from './userStore';


//* EXPORTS
export {
    authStore,
    userStore,
    chatStore
}