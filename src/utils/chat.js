import {
    userStore
} from '../stores';

let userId;

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
    getOtherUser
}