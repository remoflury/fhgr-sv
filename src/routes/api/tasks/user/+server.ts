import { PUBLIC_CUSTOM_KEY } from '$env/static/public';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// example for students
export const GET: RequestHandler = async ({ url, fetch }) => {
	const q = url.searchParams.get('q');
	const withKey = url.searchParams.get('with-key') === 'true';

	const headers: HeadersInit | undefined = withKey
		? {
				'x-api-key': PUBLIC_CUSTOM_KEY
			}
		: {};

	const res = await fetch(`${url.origin}/api/users?q=${q}`, {
		headers
	});
	const data = await res.json();

	if (res.status >= 400) {
		return json('Da lief etwas schief', { status: res.status });
	}

	return json(data);
};
