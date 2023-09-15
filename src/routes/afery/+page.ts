import type { Post } from '$lib/types/Post';

export const load = async ({ fetch, url }) => {
    const query_params = url.searchParams;
    const title = query_params.get('title');
    const tags = query_params.get('tags');
    const a_person = query_params.get('a-person');
    const afair_scale = query_params.get('afair-scale');
    const date_from = query_params.get('date-from');
    const date_to = query_params.get('date-to');

    console.log(title);
    let targetUrl = '/api/afery/query?';
    if(title !== null)
        targetUrl += `title=${title}&`;
    if(tags !== null)
        targetUrl += `tags=${tags}&`;
    if(a_person !== null)
        targetUrl += `a-person=${a_person}&`;
    if(afair_scale !== null)
        targetUrl += `afair-scale=${afair_scale}&`;
    if(date_from !== null)
        targetUrl += `date-from=${date_from}&`;
    if(date_to !== null)
        targetUrl += `date-to=${date_to}&`;

        targetUrl = targetUrl.slice(0, -1);
	const result = await fetch(targetUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const posts: Post[] = await result.json();

    return {
        posts
    };
}