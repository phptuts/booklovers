import admin from 'firebase-admin';
import { GOOGLE_SERVICE_ACCOUNT } from '$env/static/private';

if (admin.apps.length === 0) {
    admin.initializeApp({
        // @ts-ignore
        credential: admin.credential.cert(GOOGLE_SERVICE_ACCOUNT)
    })
}

export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();