//Template Literals

/*
- String literals allowing embedded expressions
- Makes it easier to crate multiline strings and
  allows string interpolation
- Enclosed in back-ticks (´Strings goes here´) instead
  of single quotes('') or double quotes("")
- Can contain placeholders  
   
   Template Strings são strings que permitem 
   expressões embutidas. 
   Você pode utilizar string multi-linhas 
   e interpolação de string com elas.
   
   Template strings são envolvidas 
   por (acentos graves) (` `) 
   em vez de aspas simples ou duplas
*/

/*Qualquer caracter de nova linha 
inserido no código é parte da template string. 
Utilizando strings normais, 
você teria de usar a síntaxe a seguir para o
bter strings multi-linhas: */

console.log('texto string linha 1\n' +
'texto string linha 2');
// "texto string linha 1
// texto string linha 2"

//mesmo efeito com strings multi-linhas,

console.log(`texto string linha 1
texto string linha 2`);
// "texto string linha 1
//  texto string linha 2"
//---------------------------------------------


var myFirstName = "Crhis";
var myLastName = "Jones";
var myAge = "30";


//ES6 below
const myOtherNewList = 
`<ul>
   <li> I am number 1</li>
   <li> I am number 2</li>
   <li> I am number 3</li>
   <li> I am number 4</li>
</ul>` ;

const myDiv = document.getElementById("myDiv");

myDiv.innerHTML = myOtherNewList;

const first = "Jane";
const last  = "Smith";
const age = 52;

console.log(`Hello ${first} ${last}. You are ${age} Today`);