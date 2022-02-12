//FETCH API

//RETURNS A PROMISE


const myDiv = document.getElementById("planet");
const myButton = myDiv.querySelector("button");

myButton.addEventListener("click", getPlanet);


function getPlanet(){
 const randomNum = Math.floor(Math.random()*10)+1;
   //fetch("https://swapi.co/api/planets/1/")
   fetch(`https://swapi.co/api/planets/${randomNum}/`)
	.then(data => data.json())
	.then(d=> populatePlanet(d))
	.catch(err=> console.log(err.message));

}

function populatePlanet(planetObj){

	const newParagraph = document.createElement("p");
	newParagraph.innerText = planetObj.name;
	myDiv.appendChild(newParagraph);

}

//--------------------10:40------------------------------

function populatePlanet2({name}){

	const newParagraph = document.createElement("p");
	newParagraph.innerText = name;
	myDiv.appendChild(newParagraph);

}

function populatePlanet3(planetObj){

	const{name,climate,terrain,population,orbital_period} = planetObj;

	const PlanetDiv = `
		<div>
			<h1>${name}</h1>
			<p>				
			  ${name} has a climate that is ${climate}. The terrain is
			  ${terrain} , with a pop. of ${population} the
			  orbital period is${orbital_period} days.
			</p>
		<div>
	`
	console.log(planetDiv);

	// dessa forma ao clicar novamente não vai aparecer outro dado
	//devido essa linha que quebra o evento listener 
	// da função getPlanet
	myDiv.innerHTML += planetDiv;
}

/* Dessa forma ao pressionar o button novamente vai ser 
   adicionado mais de um dado no html
*/
function populatePlanet4(planetObj){

	const{name,climate,terrain,population,orbital_period} = planetObj;
	const myPlanetDiv = document.createElement("div");
	const PlanetDiv = `
		<div>
			<h1>${name}</h1>
			<p>				
			  ${name} has a climate that is ${climate}. The terrain is
			  ${terrain} , with a pop. of ${population} the
			  orbital period is${orbital_period} days.
			</p>
		<div>
	`
	myPlanetDiv.innerHTML = planetDiv;
	myDiv.appendChild(myPlanetDiv);
}


	


