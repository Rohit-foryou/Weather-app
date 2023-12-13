const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '43eb1b37b1msh88d3f6b5837ced4p194bdejsnf34b5943fdad',
		'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}