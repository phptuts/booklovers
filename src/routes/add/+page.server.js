import validateBook from '$lib/validators/book.validator';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const data = await validateBook(formData);
        if (!data.success) {
            return fail(422, data)
        }
        return { success: true };
    }
}