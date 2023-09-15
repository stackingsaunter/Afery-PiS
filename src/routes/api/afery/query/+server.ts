import { fetchMarkdownPosts } from "$lib"
import { json } from "@sveltejs/kit";

export const GET = async (RouteParams: { url: { searchParams: { get: (arg0: string) => string | null; }; }; }) => {
    let allPosts = await fetchMarkdownPosts();

    if (RouteParams.url.searchParams.get("title") !== null) {
        const postTitle = RouteParams.url.searchParams.get("title");
        if(postTitle !== null)
            allPosts = allPosts.filter(post => post.title.toLowerCase().includes(postTitle.toLowerCase()));
    }

    if (RouteParams.url.searchParams.get("tags") !== null) {
        // @ts-ignore
        const postTags = RouteParams.url.searchParams.get("tags").split(",");
        allPosts = allPosts.filter(post => post.tags.some(tag => postTags.includes(tag)));
    }

    if(RouteParams.url.searchParams.get("a-person") !== null) {
        const postPerson = RouteParams.url.searchParams.get("a-person");
        if(postPerson !== null)
            allPosts = allPosts.filter(post => post.affiliated_people?.includes(postPerson));
    }

    if(RouteParams.url.searchParams.get("afair-scale") !== null) {
        const postImportance = RouteParams.url.searchParams.get("afair-scale");
        if(postImportance !== null)
        {
            let importance = 10;
            switch(postImportance) {
                case "Wszystkie afery PiS":
                    importance = 10;
                    break;
                case "Tylko znaczące afery PiS":
                    importance = 2;
                    break;
                case "Tylko najważniejsze afery PiS":
                    importance = 0;
                    break;
            }
            allPosts = allPosts.filter(post => post.importance <= importance);
        }
    }

    if(RouteParams.url.searchParams.get("date-from") !== null) {
        const postDateFrom = RouteParams.url.searchParams.get("date-from");
        if(postDateFrom !== null)
            allPosts = allPosts.filter(post => new Date(post.date).getTime() >= new Date(postDateFrom).getTime());
    }

    if(RouteParams.url.searchParams.get("date-to") !== null) {
        const postDateTo = RouteParams.url.searchParams.get("date-to");
        if(postDateTo !== null)
            allPosts = allPosts.filter(post => new Date(post.date).getTime() <= new Date(postDateTo).getTime());
    }

    const sortedDatesByDate = allPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return json(sortedDatesByDate);
}