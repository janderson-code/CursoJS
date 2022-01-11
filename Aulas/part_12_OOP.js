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
 - Each object has a private property called the prototype
 - The prototype can have a prototype of its own 
 - Nearly all objects in JavaScript are instances of object
   which sits on top of the prototype chain.
 - The prototype property's value in an object
 - Think of it as a bucket to store properties and methods
 - Prototype as a template and can have prototype properties of its own

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

const myObj = 
{
	a:1,
	b:2
}

console.log(myObj.valueOf());
//Does myObj have a method  called valueOf()?
//NO
//Does Object prototype have a method called valueOf()?
//YES
// myObj > Object



const myString = "hello";
console.log(myString.charAt(0)); // print h
//Does myString have a method  called charAt()?
//NO
//Does String prototype have a method called valueOf()?
//YES

console.log(myString.valueOf());
//Does myString have a method  called valueOf()?
//NO
//Does String prototype have a method called valueOf()?
//NO
//Does Object prototype have a method called valueOf()?
//YES
// myString > String > Object



var curso = {
	sigla:"KK",
	curso:"Programação"
}
var obj = Object.create(curso);

obj.sigla = "ggg"
curso.sigla = "jjj";
obj.versao ="prime";

console.log(obj.sigla);
console.log(obj.versao); // Undefined
