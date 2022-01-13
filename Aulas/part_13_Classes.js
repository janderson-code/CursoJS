//---------------------------------------
//Aula 01 Lecture: Classes
//---------------------------------------

//Classes in ES6 are just syntactical sugar over Javascript
//existing prototype-base inheritance
//Simple, clean syntax to create objects and take care of inheritance

// Pre-ES6 way:


// function Person(name, age){
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.greetings  = function(){
// 	console.log("greetings");
// }

// function Employee(name,age,role){
// 	Person.call(this,name,age);
// 	this.role = role;
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// const bill = new Employee("Bill",41,"janitor");
// bill.greetings();


//Class Method
//Classes art not Hoisted

// instanciar antes da declaração da classe dá erro
//const bob = new Person("jj",20); // erro 

class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
}

const bob = new Person("Bob,",30);
console.log(bob);


const Person2 = class{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	greeting(){
		console.log("Classes R new");
	}
}

const bill = new Person2("Bill",30);
console.log(bill);

const Jane = new Person2("Jane Doe",30);
Jane.greeting();

Person2.prototype.greeting = function(){
	console.log("Now I say something else");
}

Jane.greeting(); //Imprime Now I say something else"