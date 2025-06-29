import { fetchAge } from '$lib/api.js';

export async function load({ url }) {
	const name = url.searchParams.get('name') || '';

	if (!name) {
		return { name: '', age: null, count: 0 };
	}

	try {
		const data = await fetchAge(name);
		return data;
	} catch {
		return { name, age: null, count: 0 };
	}
}
