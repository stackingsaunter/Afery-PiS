import { fetchMarkdownPosts } from "$lib"
import { json } from "@sveltejs/kit";

export const GET = async () => {
    const allPosts = await fetchMarkdownPosts();

    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return json(sortedPosts);
}