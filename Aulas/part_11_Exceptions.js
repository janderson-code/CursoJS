
//---------------------------------------
//Aula 01 Lecture: Throwing_Exceptions
//---------------------------------------


// Exception Handling

// Throw you own exception

/*

 - Use the throw statement to throw own exception
 - You specify the expression containing the value to be thrown
 e.g.: throw expression
 - Can throw any expression

 -A declaração throw lança 
  uma exceção definida pelo usuário. A execução da função 
  atual vai parar (as instruções após o throw 
  não serão executadas), 
  e o controle será passado para o primeiro bloco
  catch na pilha de chamadas. 
  Se nenhum bloco catch existe entre as funções 
  "chamadoras", o programa vai terminar.


*/

//throw "new Error!!!";

function checkIfNum(n){
	if (isNaN(n)) {
		throw "This is a not a number";
	}else{
		console.log(n);
	}
}

checkIfNum(33);

const myObjException = {
	toString: function(){
		return "I am an Object Exception";
	}
}

throw myObjException;


function MyException(message){
	this.message = message;
	this.name = "My Exception";
	this.toString = function() {
		return this.name + ":" + this.message;
	}
}

throw new MyException("Field Invalid");

//---------------------------------------
//Aula 02  Lecture: Try, Catch, Finally
//---------------------------------------

