import {
    db
} from '../../utils/firebase';

import {
    chatStore
} from '../../stores';

const _chatMessagesRef = db.collection('chatMessages');

/** Get chat messages belonging to a single chat (chat thread) 
 * @param {String} chatId The id of the chat thread to retrieve messages for 
 */
const getChatMessages = async (chatId) => {
    let chatMessages = [];

    chatStore.update(storeVal => {
        storeVal.isLoading = true;
        return storeVal;
    });

    return _chatMessagesRef.where('chatId', '==', chatId).onSnapshot(async (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            chatMessages.push(doc.data());
        });

        // Update the store
        chatStore.update(storeVal => {
            storeVal.chatMessages = chatMessages;
            storeVal.isLoading = false;
            return storeVal;
        });
    });
};


//* EXPORTS
export default getChatMessages;