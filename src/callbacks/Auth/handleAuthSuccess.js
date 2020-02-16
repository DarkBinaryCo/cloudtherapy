const handleAuthSuccess = ({
    user,
    credential
}, redirectUrl) => {
    console.log("Done logging in!");
    let userData = {
        email: user.email,
        emailVerified: user.emailVerified,
        name: user.displayName,
        provider: credential.providerId,
        signInMethod: credential.signInMethod,
    };

    AuthService.authUser(user.uid, userData)
        .then(() => {
            console.log("Successfully logged in user");
        })
        .catch((err) => {
            console.error("Failed to login", err);
        });

    return true;
}

export default {
    handleAuthSuccess
}