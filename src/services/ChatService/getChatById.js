import {
    db
} from '../../utils/firebase';

import {
    chatStore
} from '../../stores';

const getChatById = (chatId) => {

    db.collection('chats').doc(chatId).get((chatDoc) => {
        const chatFound = chatDoc.data();

        // Update store value of chat found
        chatStore.update(chat => {
            chat.currentChat = chatFound;
            return chat;
        });
    })
};

//* EXPORTS
export default getChatById;