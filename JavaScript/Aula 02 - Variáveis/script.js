// Tipos primitivos

// Booelean
var VouF = false;
console.log(typeof(VouF));

// Number
var numero = 1
console.log(typeof(numero));

// String
var nome = 'Ale';
console.log(typeof(nome));

// Como declarar as variáveis
var variavel = 'nome';
variavel = 'Ale';
console.log(variavel)

let variavel2 = 'Ale';
variavel2 = 'valor alterado';
console.log(variavel2);

const variavel3 = 'Ale';
console.log(variavel3);

var escopoGlobal = 'global';
console.log (escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();

var atribuicao = 'Ale';

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);

// Comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// Adição
var adicao = 1 + 1;
console.log (adicao);

// Subtração
var subtração = 2 - 1;
console.log(subtração);

// Multiplicação
var multiplicação = 2 * 3;
console.log(multiplicação);

// Divisão real
var divReal = 6/2;
console.log(divReal);

// Divisão inteira
var divInteira = 5%2;
console.log(divInteira);

// Potenciação
var potenciação = 2 ** 10;
console.log(potenciação);

// Operadores relacionais

var maiorQue = 5 > 2;
console.log(maiorQue);

var menorQue = 5 < 2;
console.log(menorQue);

var maiorIgual = 5 >= 2;
console.log(maiorIgual);

var menorIgual = 5 <= 2;
console.log(menorIgual);

// Operadores lógicos
var e = true && false;
console.log(e);

var ou = false || false;
console.log(ou);

var nao = !true;
console.log(nao);