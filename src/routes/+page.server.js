import { getBooks } from '$lib/firebase/database.server';

export async function load({ locals }) {
    const books = await getBooks(locals?.user?.id);
    return {
        books
    }
}