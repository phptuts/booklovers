import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

export async function loginWithGoogle() {
    const auth = getAuth();
    const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
    return userCredential.user;
}

export async function logout() {
    await signOut(getAuth());
}