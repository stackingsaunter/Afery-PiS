<!-- https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog -->
<script>
	import PostDetail from '$lib/components/PostDetail.svelte';
	export let data;
</script>

{#if data === undefined}
    <p>Ładowanie...</p>
{:else if data === null}
    <p>Nie znaleziono afery</p>
{:else}
    <PostDetail title={data.title} date={data.date} content={data.content} image_url={data.image_url} sources={data.sources} tags={data.tags}  />
{/if}

