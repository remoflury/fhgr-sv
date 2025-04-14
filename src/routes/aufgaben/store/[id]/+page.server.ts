import type { DummyJsonProduct } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const res = await fetch(`https://dummyjson.com/products/${params.id}`);
	const data: DummyJsonProduct = await res.json();

	if (res.status >= 400) {
		error(res.status);
	}
	return {
		product: data
	};
};
