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