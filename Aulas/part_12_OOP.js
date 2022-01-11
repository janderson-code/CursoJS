//---------------------------------------
//Aula 01 Lecture: Introduction to OOP
//---------------------------------------

/* Links:

http://webacademico.canoas.ifrs.edu.br/~rcpinto/IFRS/php/JS-4-OO/js-oo.html

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects




*/

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
 - "The prototype property is where inherited members are defined"



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


const name1 ={
	name:"janderson",
	age:20,
	sayName:function(){
		console.log(`My name is ${this.name}`);
	}
}

const name2 = Object.create(name1);
name2.name = "Jane Doe";

const name3 = Object.create(name2);
name3.sayName();

console.log(name2.hasOwnProperty("age"));//false
//alterado na linha 100 então fica true
console.log(name2.hasOwnProperty("name"));//true



// //Apostila k19
// var curso = {
// 	sigla:"KK",
// 	curso:"Programação"
// }
// var obj = Object.create(curso);

// obj.sigla = "ggg"
// curso.sigla = "jjj";
// obj.versao ="prime";

// console.log(obj.sigla);
// console.log(obj.versao); // Undefined
// //Apostila k19


//---------------------------------------
//Aula 02 Lecture: Object Constructors
//---------------------------------------


