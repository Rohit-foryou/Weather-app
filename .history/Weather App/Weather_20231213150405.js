const url = 'https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '43eb1b37b1msh88d3f6b5837ced4p194bdejsnf34b5943fdad',
		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}