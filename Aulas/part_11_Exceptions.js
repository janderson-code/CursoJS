
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


