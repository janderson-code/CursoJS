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

