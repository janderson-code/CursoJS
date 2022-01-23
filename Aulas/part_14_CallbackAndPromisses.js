//---------------------------------------
//Aula 01 Lecture: Callbacks
//---------------------------------------


//Callback:

/*

- A callback function is a function that is 
  passed to another function as a paramater

- This inner function is called at some point during
  the execution of the containing function

- In other words, it's "called back" at some specified
  point inside the containing function's body
*/


function shouldGoFirst(callback){
	setTimeout(()=>{
		console.log("I should always go first");
		callback();
	},1000);
}

function shouldGoSecond(){
	console.log("I should always go second");
}

shouldGoFirst(shouldGoSecond);




function sumUpNumbers(num1,num2,cb){
	const summedvalue = num1 + num2;
	cb(summedvalue);
}

function logSummedValue(val){
	console.log(`The summed total is ${val}`);
}

sumUpNumbers(100,150,logSummedValue);


//Calback function

function sayWhenDone(){
	console.log("Done !!")	;
}


// Parent Function

function looper(number, cb){

	for(let i=0; i< number; i+=1){
		console.log(i);
	}
	cb();
}

looper(6,sayWhenDone);

//-------------------------------

//Calback function

function sayWhenDone2(loopCount){
	console.log(`Done Capitalized ${loopCount} times`);
}


// Parent Function

function looper2(arr, cb){
	let i = 0;
	for(i; i < arr.length; i+=1){
		const name = arr[i];
		const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
		arr[i] = capitalizedName;
	}
	cb(i);
}

const myNames = ["janderson","jane","Angela"];

looper2(myNames,sayWhenDone2);
console.log(myNames);



function anotherLogger(num1,num2,cb){

	const squaredAndSummedNums = (num1 * num1) + (num2 * num2 );
	console.log(squaredAndSummedNums);
	cb();
}

anotherLogger(10,50,function(){
	console.log("Hey");
});


function anotherLogger2(num1,num2,somethingElse){

	const squaredAndSummedNums = (num1 * num1) + (num2 * num2 );
	console.log(squaredAndSummedNums);
	if(somethingElse && typeof(somethingElse)==="function"){
		somethingElse(squaredAndSummedNums);
	}
}



anotherLogge2(10,50,function(p){
	console.log(`Squared and summed ${p}`);
	console.log("Hey");
});
//----------------------------------

const myDiv = document.getElementById("main");
const myButton = myDiv.querySelector("button");
const fakeData ={
	text:"texto de teste"
};

const myPara = document.getElementById("content");

myButton.addEventListener("click",function(){
	requestData(populateDOM);
});

function requestData(cb){
	let data = "loading.....";
	cb(data);
	setTimeout(() =>{
		//Response from server;
		const data = fakeData.text;
		cb(data);
	},2000);
}	


function populateDOM(data){
	myDiv.innerHTML +=`<p>${data}</p>`;
	myPara.innerText = data;
}

function counter(){
	setTimeout(()=>{
		console.log("First");
		setTimeout(()=>{
			console.log("Second");
			setTimeout(()=>{
				console.log("Third");
				setTimeout(()=>{
					console.log("Fourth");
				},400);
			},600);
		},800);
	},1000);
}

counter();

//---------------

function numCruncher1(num,cb){
	const newNum = num*num;
	cb(newNum);

}

function numCruncher2(num,cb){
	const anotherNewNum = num/100;
	cb(anotherNewNum);
}

function totalSum(a,b,cb) {
	cb(a+b);
}

function crunchNumbers(a,b,cb1,cb2,cb3){

	cb1(a,function(x){
		cb2(b,function(y){
			cb3(x,y,function(result){
				console.log(result);
			});
		});
	});
}

crunchNumbers(5,10,numCruncher1,numCruncher2,totalSum);