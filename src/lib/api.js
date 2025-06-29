export async function fetchAge(name) {
	const res = await fetch(`https://api.agify.io/?name=${encodeURIComponent(name)}`);
	if (!res.ok) {
		throw new Error('Erro ao buscar dados da API');
	}
	return await res.json();
}
