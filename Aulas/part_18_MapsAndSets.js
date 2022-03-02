//Map Object

/*
 - Used for simple key/value pairs
 - Any value can be used for either a key or value
   (i.e object , string, function)
 - Reasons for using Map over Object:
   -- Object prototyṕe has default keys that might conflict with
   own keys
   -- Keys of map can be anything, where as with objects,have to be
   string of symbol
   -- Can  easily get the size of Map 
*/


const myMap = new Map();
const firstKey = "FirstKey :D";
const firstVal = "First Value :D";
const secondKey = {};
const thirdKey = function(){}


//myMap.set("Key","value");
myMap.set(firstKey,firstVal);
console.log(myMap.get(firstKey)); //"First Value"


myMap.set("AnotherKey","AnotherValue");
console.log(myMap.get("AnotherKey"));//AnotherValue


myMap.set("AnotherKey2","AnotherValue2");
console.log(myMap.get("Janderson"));//Undefined
console.log(myMap.has("Janderson"));//false


myMap.set(secondKey,"AnotherValue3");
myMap.set(thirdKey,"AnotherValue4");


//myMap.clear();
console.log(myMap);
console.log("Map Size "+ myMap.size);

myMap.forEach((val)=> console.log(val));



// Iterating
// keys(),values, entries()


for(const key of myMap.keys()){
	console.log(`Key: ${key}`);
}

for(const value of myMap.values()){
	console.log(`Value : ${value}`);
}


for(const [key,value] of myMap.entries()){
	console.log(`Key: ${key} => Value : ${value}`);
}




const myMapData = [["keyA","Value one",],["keyB","Value two"]];
const anotherMap = new Map(myMapData);

const anotherMap2 = new Map([
	["entry1","Value1"],
	["entry2","value2"],
]);

console.log(anotherMap);
console.log(anotherMap2);

//-----------------------------------

// Set Object

/*
	- Lets you store unique values of any type
	- Each Element is unique
*/

const mySet = new Set();
mySet.add("Bob")
console.log(mySet);

