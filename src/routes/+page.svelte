<script>
	import { modeCurrent } from '@skeletonlabs/skeleton';
</script>

{#if !$modeCurrent}
	<section
		class="relative bg-cover bg-center bg-fixed bg-no-repeat bg-opacity-25"
		style="background-image:linear-gradient(rgba(1, 1, 1, 0.15), rgba(1, 1, 1, 0.85)), url(https://bi.im-g.pl/im/05/7f/19/z26738181AMP.jpg)"
	>
		<div
			class="absolute inset-0 sm:bg-transparent ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
		/>

		<div
			class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
		>
			<div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
				<h1 class="text-3xl font-extrabold sm:text-5xl">
					Afery polityczne
					<strong class="block font-extrabold"> PiS </strong>
				</h1>

				<p class="mt-4 max-w-lg sm:text-xl/relaxed">
					Zbiór posegregowanych afer Prawa i Sprawiedliwości z ostatnich lat, z opisami, źródłami i
					objaśnieniami.
				</p>

				<div class="mt-8 flex flex-wrap gap-4 text-center">
					<a
						href="/search"
						class="block w-full rounded px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
					>
						Przeszukaj afery
					</a>

					<a
						href="/about"
						class="block w-full rounded px-12 py-3 text-sm font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
					>
						Dowiedz się więcej
					</a>
				</div>
			</div>
		</div>
	</section>
{:else if $modeCurrent}
	<section
		class="relative bg-cover bg-center bg-fixed bg-no-repeat bg-opacity-25"
		style="background-image:linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.85)), url(https://upload.wikimedia.org/wikipedia/commons/4/46/Marsz_4_czerwca_2023_-_przed_alej%C4%85_r%C3%B3%C5%BC_-_134654.jpg)"
	>
		<div
			class="absolute inset-0 sm:bg-transparent ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
		/>

		<div
			class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
		>
			<div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
				<h1 class="text-3xl font-extrabold sm:text-5xl">
					Afery polityczne
					<strong class="block font-extrabold"> PiS </strong>
				</h1>

				<p class="mt-4 max-w-lg sm:text-xl/relaxed">
					Zbiór posegregowanych afer Prawa i Sprawiedliwości z ostatnich lat, z opisami, źródłami i
					objaśnieniami.
				</p>

				<div class="mt-8 flex flex-wrap gap-4 text-center">
					<a
						href="/search"
						class="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:bg-rose-400 focus:outline-none focus:ring active:bg-rose-400 sm:w-auto"
					>
						Przeszukaj afery
					</a>

					<a
						href="/about"
						class="block w-full rounded px-12 py-3 text-sm font-medium shadow hover:text-rose-400 focus:outline-none focus:ring active:text-rose-300 sm:w-auto"
					>
						Dowiedz się więcej
					</a>
				</div>
			</div>
		</div>
	</section>
{/if}
