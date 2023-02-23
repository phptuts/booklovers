import { db } from '$lib/firebase/firebase.server';
import { firestore } from 'firebase-admin';
import { saveFileToBucket } from './firestorage.server';


export async function addBook(book, userId) {

    // save to the firestore database without picture information
    const bookCollection = db.collection('books');

    const bookRef = await bookCollection.add({
        title: book.title,
        short_description: book.short_description,
        description: book.description,
        author: book.author,
        user_id: userId,
        created_at: firestore.Timestamp.now().seconds,
        likes: 0
    });

    // save the pictures 

    const smallPictureUrl = await saveFileToBucket(book.small_picture,
        `${userId}/${bookRef.id}/small_picture`);

    const mainPictureUrl = await saveFileToBucket(book.main_picture,
        `${userId}/${bookRef.id}/main_picture`);

    // update the doc in firestore database with the picture urls

    await bookRef.update({
        main_picture: mainPictureUrl,
        small_picture: smallPictureUrl
    })

    // return book id

    return bookRef.id;
}