import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		content: {
			h1: 'Dieser Titel wurde server-seitig geladen.',
			p: 'Dieser Text könnte von einem CMS kommen. Aber nicht Wordpress, das nutzt niemand wirklich gerne.'
		}
	};
};
