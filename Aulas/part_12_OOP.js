//---------------------------------------
//Aula 01 Lecture: Introduction to OOP
//---------------------------------------


/*
 - OOP : basic idea is that you use objects to represent 
 real world things.Objects have own properties and function
 (methods)

 - Objects can contain data and other code to represet info
 about what you're trying to model

 - Data /methods inside the object is encapsuled
 - In classic OOP, class is defined then when an instane of 
 that class is created, all the properties and methods are
 copied(!!!) over to the instance

 - Javascript is dynamic and does not provide a tradional
   class implementation per se.

 - JavaScript inheritance is prototype based  

*/

//Pretend this is a class:
function Ship(){
	this.floats = true;
	this.material = "steel";
	this.whatAmI = function(){
		console.log("I am made of: " + this.material);
	}
}

const myShip = new Ship();

myShip.whatAmI();