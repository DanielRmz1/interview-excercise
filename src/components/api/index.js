export const call = async(url) => {
	return new Promise((resolve) => {
		fetch(url)
			.then(res => res.json())
			.then(res => resolve(res));
	});
};

export const getData = async(page) => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`; // `https://www.pinkvilla.com/photo-gallery-feed-page/page/${page}`;
	return await call(url);
}