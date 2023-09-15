<!-- Detailed post -->

<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { checkSourcePoliticalAlignment, importanceText } from '$lib/index';

	export let title = 'Brak tytułu';
	export let date = 'Brak daty';
	/**
	 * @type {any}
	 */
	export let content;

	/**
	 * @type {import("$lib/types/Source").Source[]}
	 */
	export let sources = [];

	/**
	 * @type {string | undefined}
	 */
	export let image_url = undefined;

	/**
	 * Jak bardzo ważna jest ta afera (im mniejsza tym ważniejsza)
	 * @type {number}
	 */
	export let importance = 3;

	/**
	 * @type {string[]}
	 */
	export let tags = [];

	/**
	 * @type {string | undefined}
	 */
	let selectedSource = undefined;

	let leftWingSources = sources.filter(
		(source) => checkSourcePoliticalAlignment(source.source) === 'left'
	);
	let centerWingSources = sources.filter(
		(source) => checkSourcePoliticalAlignment(source.source) === 'center'
	);
	let rightWingSources = sources.filter(
		(source) => checkSourcePoliticalAlignment(source.source) === 'right'
	);
</script>

<div class="flex h-screen items-center justify-center">
	<div class="container mx-auto pb-8">
		<div class="grid grid-cols-3 md:grid-cols-3 gap-8">
			<div class="mb-4 h-full">
				<h2 class="text-3xl font-semibold mb-6">{title}</h2>
				<p class="text-lg leading-relaxed">{date}</p>
				<p class="text-lg leading-relaxed font-semibold">
					Ważność: {importanceText[importance - 1]}
				</p>
				{#if image_url !== null && image_url !== undefined}
					<img src={image_url} alt={title} class="w-full object-contain min-h-0 max-h-96" />
				{/if}
			</div>
			<div class="col-span-2 h-full">
				<p class="text-lg leading-relaxed italic">
					<svelte:component this={content} />
				</p>
				<br />
				<h3 class="text-2xl font-semibold mb-6">Źródła</h3>
				<!-- Look like ground news with political allignment -->
				<div class="flex flex-row items-center text-14 tablet:text-18 leading-snug w-full">
					{#if selectedSource === undefined || selectedSource === null}
						<div
							class="w-auto text-center tablet:px-3 tablet:w-auto pb-1_6 cursor-pointer justify-center gap-1 desktop:w-14 px-1_6 hover:opacity-75 font-bold"
						>
							<button on:click={() => (selectedSource = undefined)}
								>Wszystkie ({sources.length})
							</button>
						</div>
					{:else}
						<div
							class="w-auto text-center tablet:px-3 tablet:w-auto pb-1_6 cursor-pointer justify-center gap-1 desktop:w-14 px-1_6 hover:opacity-75"
						>
							<button on:click={() => (selectedSource = undefined)}
								>Wszystkie ({sources.length})
							</button>
						</div>
					{/if}
					&nbsp
					{#if selectedSource === 'left'}
						<div
							class="w-auto text-center tablet:px-3 tablet:w-auto pb-1_6 cursor-pointer justify-center gap-1 desktop:w-14 px-1_6 hover:opacity-75 font-bold"
						>
							<button on:click={() => (selectedSource = 'left')}
								>Lewicowe ({leftWingSources.length})
							</button>
						</div>
					{:else}
						<div
							class="w-auto text-center tablet:px-3 tablet:w-auto pb-1_6 cursor-pointer justify-center gap-1 desktop:w-14 px-1_6 hover:opacity-75"
						>
							<button on:click={() => (selectedSource = 'left')}
								>Lewicowe ({leftWingSources.length})
							</button>
						</div>
					{/if}

					&nbsp
					{#if selectedSource === 'center'}
						<div
							class="w-auto text-center tablet:px-3 tablet:w-auto pb-1_6 cursor-pointer justify-center gap-1 desktop:w-14 px-1_6 hover:opacity-75 font-bold"
						>
							<button on:click={() => (selectedSource = 'center')}
								>Centrowe ({centerWingSources.length})
							</button>
						</div>
					{:else}
						<div
							class="w-auto text-center tablet:px-3 tablet:w-auto pb-1_6 cursor-pointer justify-center gap-1 desktop:w-14 px-1_6 hover:opacity-75"
						>
							<button on:click={() => (selectedSource = 'center')}
								>Centrowe ({centerWingSources.length})
							</button>
						</div>
					{/if}
					&nbsp
					{#if selectedSource === 'right'}
						<div
							class="w-auto text-center tablet:px-3 tablet:w-auto pb-1_6 cursor-pointer justify-center gap-1 desktop:w-14 px-1_6 hover:opacity-75 font-bold"
						>
							<button on:click={() => (selectedSource = 'right')}
								>Prawicowe ({rightWingSources.length})
							</button>
						</div>
					{:else}
						<div
							class="w-auto text-center tablet:px-3 tablet:w-auto pb-1_6 cursor-pointer justify-center gap-1 desktop:w-14 px-1_6 hover:opacity-75"
						>
							<button on:click={() => (selectedSource = 'right')}
								>Prawicowe ({rightWingSources.length})
							</button>
						</div>
					{/if}
				</div>

				<div class="pt-4">
					{#if selectedSource === undefined || selectedSource === null}
						{#each sources as source, i}
							<Accordion>
								<AccordionItem>
									<svelte:fragment slot="summary">
										<h4 class="text-xl font-semibold mb-6">{source.source}</h4>
									</svelte:fragment>
									<svelte:fragment slot="content">
										<iframe title={source.source} src={source.link} class="w-full h-96" />
									</svelte:fragment>
								</AccordionItem>
							</Accordion>
						{/each}
					{:else if selectedSource === 'left'}
						{#each leftWingSources as source, i}
							<Accordion>
								<AccordionItem>
									<svelte:fragment slot="summary">
										<h4 class="text-xl font-semibold mb-6">{source.source}</h4>
									</svelte:fragment>
									<svelte:fragment slot="content">
										<iframe title={source.source} src={source.link} class="w-full h-96" />
									</svelte:fragment>
								</AccordionItem>
							</Accordion>
						{/each}
					{:else if selectedSource === 'center'}
						{#each centerWingSources as source, i}
							<Accordion>
								<AccordionItem>
									<svelte:fragment slot="summary">
										<h4 class="text-xl font-semibold mb-6">{source.source}</h4>
									</svelte:fragment>
									<svelte:fragment slot="content">
										<iframe title={source.source} src={source.link} class="w-full h-96" />
									</svelte:fragment>
								</AccordionItem>
							</Accordion>
						{/each}
					{:else if selectedSource === 'right'}
						{#each rightWingSources as source, i}
							<Accordion>
								<AccordionItem>
									<svelte:fragment slot="summary">
										<h4 class="text-xl font-semibold mb-6">{source.source}</h4>
									</svelte:fragment>
									<svelte:fragment slot="content">
										<iframe title={source.source} src={source.link} class="w-full h-96" />
									</svelte:fragment>
								</AccordionItem>
							</Accordion>
						{/each}
					{/if}
				</div>
			</div>
			<!-- Tagi -->
			<div class="col-span-3">
				<h3 class="text-2xl font-semibold mb-6">Tagi</h3>
				<div class="flex flex-row flex-wrap">
					{#each tags as tag, i}
						<div
							class="w-auto text-center tablet:px-3 tablet:w-auto pb-1_6 cursor-pointer justify-center gap-1 desktop:w-14 px-1_6 hover:opacity-75"
						>
							<button on:click={() => (window.location.href = `/tagi/${tag}`)}>{tag}, &nbsp;</button
							>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
