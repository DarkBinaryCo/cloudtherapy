import {
    authStore
} from '../../stores/authStore';

import AuthService from '../../services/AuthService';

/** Handle any changes to auth state ~ firebase */
const handleAuthChanged = async user => {
    authStore.set({
        isLoadingAuth: false
    });

    // User is logged in
    if (user) {
        console.log('user is logged in');
        const authDataFromApi = await AuthService.getAuthUser(user.uid);
        if (!authDataFromApi) return;

        let userFromApi = authDataFromApi.data();

        authStore.update(storeVal => {
            storeVal = {
                ...storeVal,
                ...userFromApi,
                isLoggedIn: true
            };

            return storeVal;
        });
    } else {
        console.log('user logged out')
        // Not logged in
        authStore.update(storeVal => {
            storeVal.isLoggedIn = false;
            return storeVal;
        });
    }
};

export default handleAuthChanged;