import {
    db
} from '../../utils/firebase';

const _chatMessagesRef = db.collection('chatMessages');

/** Get chat messages belonging to a single chat (chat thread) 
 * @param {String} chatId The id of the chat thread to retrieve messages for 
 */
const getChatMessages = async (chatId) => {
    return _chatMessagesRef.where('chatId', '==', chatId).get();
};


//* EXPORTS
export default getChatMessages;