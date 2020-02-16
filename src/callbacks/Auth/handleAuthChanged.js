import {
    authStore
} from '../../stores/authStore';

/** Handle any changes to auth state ~ firebase */
const handleAuthChanged = async user => {
    authStore.set({
        isLoggingIn: false
    });

    // User is logged in
    if (user) {
        const authDataFromApi = await getAuthUser(user.uid);
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
        // Not logged in
        authStore.update(storeVal => {
            storeVal.isLoggedIn = false;
            return storeVal;
        });
    }
};

export default handleAuthChanged;