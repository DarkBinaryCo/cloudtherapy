import {
    BASE_API_URL
} from '../../constants';

/** Get a user with the uid of `uid`
 * @param {String} uid The id of the user provided by firebase
 */
const getAuthUser = async (uid) => {
    return fetch(`${BASE_API_URL}/user/${uid}`)
};

export default getAuthUser;