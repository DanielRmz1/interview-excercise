const baseUrl = "https://pokeapi.co/api/v2/"

const call = (url) => {
	return new Promise((resolve) => {
		fetch(url)
			.then(response => response.json())
			.then(data => resolve(data));
	});
}

export const getPokemons = async(step = 20, skip = 0) => {
	const url = `${baseUrl}pokemon/?limite=${step}&offset=${skip}`;
	return await call(url);
};

export const getPokemonDetail = async(url) => {
	return await call(url);
};

export const getPokemonImage = async(id) => {
	const url = `${baseUrl}pokemon-form/${id}/`;
	const { sprites: { "front_default": frontDefault } } = await call(url);
	return frontDefault;
}