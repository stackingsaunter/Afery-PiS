<script>
	import { modeCurrent } from '@skeletonlabs/skeleton';
</script>

<section class="mb-12">
	<div class="flex h-screen items-center justify-center">
		<div class="container mx-auto">
			<h2 class="text-5xl font-semibold mb-6 text-center pb-12">O nas</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="mb-4 mr-8">
					{#if $modeCurrent}
						<img
							src="logo_dark.png"
							alt="Afery PiS"
							class="w-full object-contain min-h-0 max-h-96"
						/>
					{:else}
						<img src="logo.png" alt="Afery PiS" class="w-full object-contain min-h-0 max-h-96" />
					{/if}
				</div>
				<div>
					<p class="text-lg leading-relaxed">
						Jesteśmy platformą informacyjną zajmującą się zbieraniem i analizą negatywnych aspektów
						związanych z działalnością partii <span class="font-semibold"
							>Prawo i Sprawiedliwość (PiS)</span
						>. Naszym celem jest dostarczanie obiektywnych informacji i analiz, które pomagają
						społeczeństwu śledzić i oceniać działania tej partii.
					</p>
					<p class="mt-4">
						Nasz zespół składa się z wolontariuszy, którzy nie są związani z żadną partią
						polityczną. Nie otrzymujemy żadnych funduszy zewnętrznych, a nasze działania finansujemy
						z własnych środków. Nie jesteśmy związani z żadną organizacją pozarządową. Większość
						członków zespołu jest związana z branżą IT, dzięki czemu możemy wykorzystywać nowoczesne
						technologie do naszych celów. Jako członkowie społeczności <i>Jak Będzie w Akapie</i>
						wierzymy w otwartość i transparentność, dlatego też nasze działania są jawne i dostępne dla
						każdego, kto chce się z nimi zapoznać, przez publicznie dostępne repozytorium projektu na
						platformie GitHub
						<a
							href="https://github.com/stackingsaunter/Afery-PiS/"
							class="hover:underline hover:animate-pulse">pod wskazanym adresem</a
						>.
					</p>
					<p class="mt-4">
						Zachęcamy do udziału w procesie dziennikarskim poprzez dostarczanie informacji i opinii
						na temat działań PiS. Nasza misja to zapewnienie transparentności w polityce i
						stworzenie przestrzeni dla konstruktywnej debaty publicznej.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
