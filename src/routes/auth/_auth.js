import {
    authStore as auth
} from "../../stores/authStore";

export const authSuccessCallback = ({
    user,
    credential
}, redirectUrl) => {
    let userData = {
        email: user.email,
        name: user.displayName,
        provider: credential.providerId,
        signInMethod: credential.signInMethod
    };

    // Update auth store
    auth.update((user) => {
        user = {
            ...userData,
            loggedIn: true
        };

        return user;
    });

    // User successfully signed in.
    // Return type determines whether we continue the redirect automatically
    // or whether we leave that to developer to handle.
    return true;
}