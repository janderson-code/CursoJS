//Loops
//Quick and easy way to do something repeatedly

//while loop

let numberOfLoops = 0;

while(numberOfLoops < 10){
	console.log("I am Looping");
	numberOfLoops+=1;
}

let num1 = 0;
let num2 = 0;

while(num < 100){
	num1 += 5;
	num2 += num1;
	loopDeLoop();

}

function loopDeLoop(){
	console.log("I am Looping");
} 

const names =["Chris","Bob","Joe"];
console.log(names[2]);

while(true){

  let index = 0;

  if (names[index]=== "Joe") {
  	console.log(names[index]);
  	break;
  }
  index+=1;
}

function nameLooper(arr){
	let index = 0;
	while(index < arr.length){
		if (arr[index]==="Crhis") {
			console.log(arr[index]);
			break;
		}
		index+=1;
	}
}

nameLooper(names);

// Do while

let shoudRunOnlyOnce = false;

do {
	console.log("Looping");
	shoudRunOnlyOnce = false;

}while(shoudRunOnlyOnce);