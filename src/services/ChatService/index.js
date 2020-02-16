//* IMPORTS
/* 
    This file acts as an aggregator for functions related to the `AuthService`
    Each function corresponds to a file in the `services/AuthService` directory
*/
import getChats from './getChats';
import getChatMessages from './getChatMessages';
import sendMessage from './sendMessage';


//* EXPORTS
export default {
    getChats,
    getChatMessages,
    sendMessage
};