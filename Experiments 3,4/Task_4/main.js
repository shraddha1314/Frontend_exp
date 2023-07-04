const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e93b43864cmshb66e1d5fe2680f4p1adfdfjsn40fb6c9f4be7',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => {
            console.log(response);
            console.log(response.content);
     })
	.catch(err => console.error(err));