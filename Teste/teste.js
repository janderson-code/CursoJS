var nomes1 = ["Janderson", "Pedro", "Naruto"];
var numbers = [1, 1000, 2, 0];
numbers.sort();
var nomesJoin = nomes1.join("-");
console.log(numbers);

function Donut(tipo, sabor, temChocolate) {
    this.tipo = tipo;
    this.sabor = sabor;
    this.temChocolate = false;
    this,kjsjsjsjsj = true
}



var chocolate = new Donut("Pequeno", "cholate", true);

console.log(chocolate);

function sayHi(){
    let x1 = true;
    let x2 =true
   
    if(x1 ==true){
        let myname  = "janderson";
        console.log(myname);
    }
    else{
        let myname = "x";
        console.log(myname);
    }
    console.log(x1);


}

sayHi();

function sayName(firstName,LastName){
    console.log(`ola ${firstName} ${LastName}`)
}

sayName("Janderson","Barbosa");


var sayHi2 = () => console.log("sayhi2");

const users = [
    {name:"Janderson",age:20},
    {name:"Naiara",age:25},
    {name:"Pelé",age:80}

];

function mapUserNames(myArr) {
    
    const userNameList = myArr.map(function(user){
        return user.name;
    });

    return userNameList;
}

function mapUserNames(myArr) {
    const userNameList = myArr.map((user)=>{
        return user.name;
    });

    return userNameList;
}

var MapUserName = (myArr)=> myArr.map((user)=> user.name);


const myTagP = document.GetElementsByTagName("p");

for(const prop of myTagP){
    prop.innerHtml = "Renomeado";
}

const myDiv = document.querySelector(".div");

myDiv.style.color = "green";
myDiv.style.cursor = "pointer";

const myDiv2 = document.querySelectorAll(".div spam");
