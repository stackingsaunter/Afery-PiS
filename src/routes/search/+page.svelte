<script>
    import { goto } from '$app/navigation'
    import { page } from '$app/stores'
	import { redirect } from '@sveltejs/kit';


    /**
     * @type {string}
     */
    let title;
    /**
     * @type {string}
     */
    let tags;
    /**
     * @type {string}
     */
    let aPerson;
    /**
     * @type {string}
     */
    let afairScale;
    /**
     * @type {string}
     */
    let dateFrom;
    /**
     * @type {string}
     */
    let dateTo;
</script>
<section class="max-w-4xl p-6 mx-auto bg-primary-50 rounded-md shadow-md dark:bg-gray-800 mt-20">
	<h1 class="text-xl font-bold capitalize dark:">Wyszukiwarka Afer PiS</h1>
	<form on:submit={async() => {
		let redirectUrl = '/afery/?';

		if (title) redirectUrl += `title=${title}&`;
		if (tags) redirectUrl += `tags=[${tags.split(' ')}]&`;
		if (aPerson) redirectUrl += `aPerson=${aPerson}&`;
		if (afairScale) redirectUrl += `afairScale=${afairScale}&`;
		if (dateFrom) redirectUrl += `dateFrom=${dateFrom}&`;
		if (dateTo) redirectUrl += `dateTo=${dateTo}&`;

        window.location.href = redirectUrl;
    }}>
		<div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
			<div>
				<label class=" dark:text-gray-200" for="title">Tytuł Afery</label>
				<input
					id="title"
					type="text"
					class="block w-full px-4 py-2 mt-2 border-r rounded-md dark:bg-gray-800 border-gray-900 focus:outline-none focus:ring"
                    bind:value={title}
				/>
			</div>
			<div>
				<label class=" dark:text-gray-200" for="tags">Tagi podzielone spacją</label>
				<input
					id="tags"
					type="text"
					class="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-gray-800 border-gray-900 focus:outline-none focus:ring"
                    bind:value={tags}
				/>
			</div>

			<div>
				<label class=" dark:text-gray-200" for="a-person">Powiązana osoba</label>
				<input
					id="a-person"
					type="text"
					class="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-gray-800 border-gray-900 focus:outline-none focus:ring"
                    bind:value={aPerson}
				/>
			</div>

			<div>
				<label class=" dark:text-gray-200" for="afair-scale">Skala ważności</label>
				<select
					class="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-gray-800 border-gray-900 focus:outline-none focus:ring"
					id="afair-scale"
                    bind:value={afairScale}
				>
					<option>Wszystkie afery PiS</option>
					<option>Tylko znaczące afery PiS</option>
					<option>Tylko najważniejsze afery PiS</option>
				</select>
			</div>
			<div>
				<label class=" dark:text-gray-200" for="date-from">Data od</label>
				<input
					id="date-from"
					type="date"
					class="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-gray-800 border-gray-900 focus:outline-none focus:ring"
                    bind:value={dateFrom}
				/>
			</div>
			<div>
				<label class=" dark:text-gray-200" for="date-to">Data dd</label>
				<input
					id="date-to"
					type="date"
					class="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-gray-800 border-gray-900 focus:outline-none focus:ring"
                    bind:value={dateTo}
				/>
			</div>
		</div>
		<div class="flex justify-end mt-6">
			<button
				class="px-6 py-2 leading-5 transition-colors duration-200 transform rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                type="submit"
			>
				Szukaj
			</button>
		</div>
	</form>
</section>
