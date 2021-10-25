//Events

/*

	- Any events tha takes place in the DOM
	- Can be user generated or by an API
	- Event contains properties and methods
	- addEventListener function takes in the event
	  to listen for, and a second argument to be
	  called whenever the described event fires
	- addEventListener("click,function()"){
		logic inside function
	})

*/

//---------------------------------------
//Aula 01 Lecture: Introduction to Events
//---------------------------------------

//Evento que gerar um pop up ao clicar numa pagina
//no caso o addEvent precisa de dois param um com evento e o outro com a function


document.addEventListener("click", function(){
	console.log("Clicado");
});

//Evento que gerar um alert dialog ao clicar numa pagina usando ID
const clickDiv = document.getElementById("clicky");

clickDiv.addEventListener("click",function(){
	alert("clicado!");
});

//Versão anterior Arrow function
clickDiv.addEventListener("click",()=> alert("clicked"));

//verificar Devtools  console
clickDiv.addEventListener("click",function(event){
	alert(event);
});

//verificar Devtools  console tipo do evento
clickDiv.addEventListener("click",function(event){
	alert(event.type);
});


// 9:00

//Evento que gerar um alert dialog ao clicar numa pagina usando ID
const clickableButton = clickDiv.querySelector("button");

// gerando alerta com info do typo do evento ao clicar no button 
clickableButton.addEventListener("click", function(){
	alert(event.type);
});

//Chamando esta function pelo onclick de um button no html
function handleClick(){
	alert("clicked");
}
// Gera o alerta quando o button esta com cursos em focus 
clickableButton.addEventListener("focus",function(event){
	console.log(event);
});
// Gera o alerta no console quando o button esta com cursos perde o focus
clickableButton.addEventListener("focusout",function(event){
	console.log(event.type);

});

// criando função
function logEvent(event){
	console.log(event.type);
}

function logEvent2(e){
	if (e.type ==="click"){
		console.log("click");
	}
	if (e.type ==="focus"){
		console.log("Focus");
	}
	else{
		return false;
	}
}

// Também funciona como variavel e arrow antes do addEvent

const logEvent3 = (e) =>{
	if (e.type ==="click"){
		console.log("click");
	}
	if (e.type ==="focus"){
		console.log("Focus");
	}
	else{
		return false;
	}

}



//Colocando função como parametro e chamando não precisa()
clickableButton.addEventListener("click",logEvent4);
// Gera o alerta quando o button esta com cursos em focus 
clickableButton.addEventListener("focus",logEvent2);
// Gera o alerta no console quando o button esta com cursos perde o focus
clickableButton.addEventListener("focusout",logEvent2);

///////////////////////////////////////////////////////

/*Chama o logEvent4 no primeiro click*/
clickableButton.addEventListener("click",logEvent4);


function logEvent4(e){
	//altera o nome do button plz no click
	clickableButton.innerText = "Plz no click";	
    //mostra no console devtools o typo click
	console.log(e.type);
	// remove o evento do tipo 
	clickableButton.removeEventListener("click",logEvent4);
	//Não mostra no console o event click
	console.log(e.type);
}
