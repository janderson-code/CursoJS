var nomes1 = ["Janderson", "Pedro", "Naruto"];
var numbers = [1, 1000, 2, 0];
numbers.sort();
var nomesJoin = nomes1.join("-");
console.log(numbers);

function Donut(tipo, sabor, temChocolate) {
    this.tipo = tipo;
    this.sabor = sabor;
    this.temChocolate = false;
}

var chocolate = new Donut("Pequeno", "cholate", true);

console.log(chocolate);