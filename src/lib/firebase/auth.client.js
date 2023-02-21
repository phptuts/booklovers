import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

export async function loginWithGoogle() {
    const auth = getAuth();
    const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
    return userCredential.user;
}

export async function logout() {
    await signOut(getAuth());
}

export async function registerWithEmailandPassword(email, password) {
    const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
    return userCredential.user;
}

export async function loginWithEmailandPassword(email, password) {
    const userCredential = await signInWithEmailAndPassword(getAuth(), email, password);
    return userCredential.user;
}

export async function mailResetPasswordEmail(email) {
    await sendPasswordResetEmail(getAuth(), email);
}

export async function sendJWTToken() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        return;
    }

    const token = await user.getIdToken(true);
    await fetch('/token', {
        method: 'POST',
        body: JSON.stringify({ token, email: user.email })
    })
}

/**
 * In the auth auth.client.js file create a function named sendJWTToken.

It should send the jwt token and email to the token endpoint you created.

Call that function in the afterLogin Event so that it will be called after we login or register with the app.
 */