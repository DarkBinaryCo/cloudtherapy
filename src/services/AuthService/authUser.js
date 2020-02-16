import {
    BASE_API_URL
} from '../../constants';

/** Authenticate user ~ store their information in that database
 * @param {String} uid The id of the user provided by firebase
 * @param {Object} userData An object representing the current user's data
 */
const authUser = async (uid, userData) => {
    const requestBody = {
        data: {
            uid,
            user: userData,
        }
    }

    return fetch(`${BASE_API_URL}/auth`, {
        method: 'post',
        body: requestBody
    });
};

export default authUser;