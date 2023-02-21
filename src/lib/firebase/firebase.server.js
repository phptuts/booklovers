import admin from 'firebase-admin';
import serviceAccount from '$lib/firebase/firebase-secrets.server.json';


if (admin.apps.length === 0) {
    admin.initializeApp({
        // @ts-ignore
        credential: admin.credential.cert(serviceAccount)
    })
}

export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();