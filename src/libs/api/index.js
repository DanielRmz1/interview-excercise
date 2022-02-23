const call = async(url) => {
	return new Promise((resolve) => {
		fetch(url)
			.then(response => response.json())
			.then(data => resolve(data));
	});
}

export const getPokemons = async() => {
	const url = "https://pokeapi.co/api/v2/pokemon";
	return await call(url);
};