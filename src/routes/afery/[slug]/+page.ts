// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
import type { Post } from '$lib/types/Post';

export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, importance, tags, sources, image_url, short_desc } = post.metadata;
	const content = post.default;

	let response : Post = {
		title,
		date,
		importance,
		tags,
		sources,
		content,
		image_url,
		short_desc
	};

	return response;
}