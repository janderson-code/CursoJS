//FETCH API

//RETURNS A PROMISE



fetch("https://swapi.co/api/planets/1/")
	.then(data=> console.log(data))
	.catch(err=> console.log(err));