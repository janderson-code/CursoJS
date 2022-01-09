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
