// place files you want to import through the `$lib` alias in this folder.

/**
 * Checks the political alignment of the source
 * @param {string} source
 */
export function checkSourcePoliticalAlignment(source) {
	switch (source) {
		case 'Gazeta.pl':
		case 'Onet.pl':
		case 'TVN24':
		case 'TVN24.pl':
		case 'TVN':
		case 'TVN.pl':
		case 'Interia.pl':
		case 'Interia':
		case 'WP':
		case 'Newsweek':
		case 'Newsweek.pl':
		case 'Newsweek Polska':
		case 'WP.pl':
		case 'WP Wiadomości':
		case 'Wirtualna Polska':
		case 'OKO.press':
			return 'left';
		case 'TVP.info':
		case 'TVP':
		case 'DoRzeczy.pl':
		case 'wPolityce.pl':
		case 'wPolityce':
		case 'GazetaPrawna.pl':
			return 'right';
		case 'Polsat':
		case 'Polsat News':
		case 'Polsat News.pl':
		case 'PolsatNews.pl':
		case 'PolsatNews':
		case 'Rzeczpospolita':
		case 'Rzeczpospolita.pl':
		case 'Business Insider':
		case 'Business Insider Polska':
		default:
			return 'center';
	}
}

/**
 * Waga afer PiS w skali 1-5
 */
export const importanceText = [
	'Jedna z najważniejszych afer PiS',
	'Bardzo znacząca afera PiS',
	'Ważna afera PiS',
	'Afera PiS',
	'Mniej ważna afera PiS'
];

/**
 * Zwraca wszystkie posty z folderu /src/routes/afery w formacie Markdown
 * @returns {Promise<import("./types/Post").Post[]>}
 */
export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/afery/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);
			return {
				...metadata,
				slug: postPath
			};
		})
	);

    return allPosts;
};
