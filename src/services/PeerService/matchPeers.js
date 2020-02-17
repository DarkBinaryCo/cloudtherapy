import {
    BASE_API_URL
} from '../../constants';

/** Find matches for the currently logged in peer */
const matchPeers = async () => {
    const _requestUrl = `${BASE_API_URL}/peer/match`;

    return fetch(_requestUrl, {
        method: 'post'
    });
}


//* EXPORTS
export default matchPeers;