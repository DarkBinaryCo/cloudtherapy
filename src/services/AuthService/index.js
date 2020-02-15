import {
    API_URL
} from "../../constants";

export const AuthService = {
    authUser: (uid, userData) => {
        const requestBody = {
            data: {
                uid,
                user: userData,
            }
        }

        return fetch(`${API_URL}/auth`, {
            method: 'post',
            body: requestBody
        });
    },
    getAuthUser: (uid) => {
        uid = '12141414s1';
        return fetch(`${API_URL}/user/${uid}`)
    }
};