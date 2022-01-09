// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//Destructuring

/*- "The Destructuring assignment syntax is a 
  	JavaScript expression that makes is possible
  	to extract data from arrays or objects into
  	distinct variables"
  - Desctructuring syntax can be used on left-hand
    side of assignments

 

 */


const myArray = [1,2,3,4,5];
const [x,y,z,a,b] = myArray;
console.log(x,y,z,a,b); // 1 2 3 4 5



const mySecondArray = ["Janderson","Naruto","Goku"] ;

let name1,name2,name3,name4;

[name1,name2,name3,name4="I'm a Default"] = mySecondArray;

console.log(name1,name2,name3,name4);


//Swap two variables
 let aa = 100;
 let bb = 250;
 let cc = 500;

 console.log(aa,bb,cc);

 [bb,cc] = [cc,bb];

 console.log(aa,bb,cc);


// use with functions

function returnArray(){
	return ["donuts","chocolate","candy","gummy bears"];

}

function foodFilter(arr,term){
	return arr.filter((t)=> t === term);

}

const [donuts,chocolate,candy,gummybears]= returnArray();
console.log(chocolate);


const[result] = foodFilter(["chicken","fish","tofu"],"chicken");
const[result2] = foodFilter(["pizza","fish","tofu"],"pizza");
console.log(result);


//Can ignore some values

const anotherArr = [10,20,50,100,1000,30];
const [numA,numB, ,numC, ,NumD] = anotherArr;
console.log(`First :${numA},second:${numB},third:${numC},fourth:${NumD}`)

//Can use rest pattern

function sayHi(first,...rest){

	console.log(`Hi ${first}`);
	console.log(rest);
}

sayHi("Chris",30,"Fuck");

const yetAnotherArr = ["dogs","cats","birds","snakes","lyon"];
const [dog,cat,...otherAnimals] = yetAnotherArr;

console.log(dog);
console.log(cat);
console.log(otherAnimals);

console.log(otherAnimals.filter((t)=>{
	return t === "snakes";
}));