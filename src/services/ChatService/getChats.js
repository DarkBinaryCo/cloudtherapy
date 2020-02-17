import {
    authStore
} from '../../stores/authStore';

import {
    db
} from '../../utils/firebase';

const _chatsRef = db.collection('chatMessages');

/** Get chat threads belonging to the currently logged in user
 * Currently logged in user is retrieved from Auth store
 */
const getChats = async () => {
    let chats = [];
    $: if (!$authStore.user.id) return [];
    $: chats = _chatsRef.where('participantIds', 'array-contains', $authStore.user.id).get();

    return chats;
};


//* EXPORTS
export default getChats;