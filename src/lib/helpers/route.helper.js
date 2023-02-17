import { goto } from '$app/navigation';


export async function afterLogin(url) {
    const route = url.searchParams.get('redirect') || '/';
    goto(route);
}