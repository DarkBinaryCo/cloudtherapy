import {
    userStore
} from '../stores';

let userId;

/** Returns true if message is from the currently logged in user and false if not 
 * @param {Object} chatMessage The message object containing information on who the message is from and who it was going to
 */
const isSelf = (chatMessage) => {
    return chatMessage.from === userId;
}

/** Get the other user in a chat */
const getOtherUser = ({
    initiator,
    prospect
}) => {
    console.log(`currently logged in user id: ${userId}`);
    return initiator.uid === userId ? prospect : initiator;
};

userStore.subscribe(user => {
    userId = user.uid;
})

export default {
    getOtherUser,
    isSelf
}