//Lecture: Object Property Shorthands


const a = 10;
const b = 20;
const c = 30;
const d = {
	a:a,
	b:b,
	c:c,
}

console.log(d.a); // printa 10

const e ={
	a,
	b,
	c,
}



console.log(e.c); // Printa 30


const{b:anotherB} = e;
console.log(anotherB); // printa 20



const f ={
	a,
	bee:b,
	c,
}

const {bee} = f;
console.log(bee); // printa 20



function objectBuilder(x,y,z,numTimes){
	const allObjects = [];
	for(let i = 0;i< numTimes;i += 1){
		const newObj ={
			x,
			y,
			z
		}
		allObjects.push(newObj);

	}
	return allObjects;
}

const bob = objectBuilder(10,"Bob",false,10);
const{x:bobId} = bob[0];
console.log(bobId);

console.log(objectBuilder(10,"Bob",false,10));


//Lecture: Computed Property Keys