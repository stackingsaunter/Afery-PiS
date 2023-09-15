<script>
	import { modeCurrent } from '@skeletonlabs/skeleton';
	export let data;
</script>

{#if data !== null && data !== undefined}
	<div class="flex h-screen items-center justify-center pb-24">
		<ul class="divide-y">
			{#each data.posts as post}
				<li class="py-12">
					<article>
						<div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
							<dl>
								<dt class="sr-only">Published on</dt>
								<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
									<time datetime="2021-08-27T19:00:00.000Z">{post.date}</time>
								</dd>
							</dl>
							<div class="space-y-5 xl:col-span-3">
								<div class="space-y-6">
									<div>
										<h2 class="text-2xl font-bold leading-8 tracking-tight">
											<a
												class="text-gray-900 dark:text-gray-100"
												href={post.slug}>{post.title}</a
											>
										</h2>
										<div class="flex flex-wrap">
											{#each post.tags as tag}
												<a
													class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
													href="#"
												>
													{tag}
												</a>
											{/each}
										</div>
									</div>
									<div class="prose max-w-none text-gray-500 dark:text-gray-400">
										<p>{post.short_desc}</p>
									</div>
								</div>
								<div class="text-base font-medium leading-6">
									<a
										class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
										aria-label="Read &quot;Release of Tailwind Nextjs Starter Blog v2.0&quot;"
										href={post.slug}>Read more →</a
									>
								</div>
							</div>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	</div>
{:else}
	<h1 class="text-3xl font-extrabold sm:text-5xl">
		Afery polityczne
		<strong class="block font-extrabold"> PiS </strong>
	</h1>
	<p class="mt-4 max-w-lg sm:text-xl/relaxed">Nie znaleziono wyników wyszukiwania</p>
{/if}
