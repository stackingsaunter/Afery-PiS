<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch, modeCurrent } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { BxlGithub } from 'svelte-boxicons';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const mode_dependent_classes = {
		'light-mode': 'from-gray-100 to-gray-200',
		'dark-mode': 'from-gray-900 to-gray-800'
	};

	$: active_app_bar_class = $modeCurrent ? mode_dependent_classes['light-mode'] : mode_dependent_classes['dark-mode'];
	$: active_logo = $modeCurrent ? 'logo_dark.png' : 'logo.png';

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			gridColumns="grid-cols-3"
			slotLead="place-self-center"
			slotTrail="mr-4 place-content-end"
			background="border-b border-gray-200 border-opacity-25 bg-gradient-to-r {active_app_bar_class}"
			class="pb-4"
		>
			<svelte:fragment slot="lead">
				<!-- Logo from static folder 'logo.png' -->
				<p class="flex items-center justify-center text-2xl font-bold">
					<!-- {#if $modeCurrent} -->
					<a href="/">
						<img
							src="/{active_logo}"
							alt="Afery PiS"
							class="w-full object-contain min-h-0 max-h-16 hover:opacity-75 transition ease-in-out delay-150 duration-300"
						/>
					</a>
					<!-- {:else} -->
					<!-- <a href="/">
						<img
							src="/logo.png"
							alt="Afery PiS"
							class="w-full object-contain min-h-0 max-h-16 hover:opacity-75 transition ease-in-out delay-150 duration-300"
						/>
					</a> -->
					<!-- {/if} -->
					<i
						class="italic ml-4 mt-4 text-sm hover:opacity-75 transition ease-in-out delay-150 duration-300"
					>
						Zbiór afer Prawa i Sprawiedliwości
					</i>
				</p>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<a href="https://github.com/stackingsaunter/Afery-PiS"
					><BxlGithub
						class="shrink-0 h-10 w-10 hover:opacity-75
					"
					/></a
				>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
