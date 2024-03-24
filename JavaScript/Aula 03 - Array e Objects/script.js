// O que são vetores ou arrays

// Como declarar um array

let array = ['string', 1, true];
console.log(array);

// Pode guardar vários tipos de dados
let array2 = ['string', 1 , true,['array1'], ['array2'], ['array3']];
console.log(array2[3]);

// For each
array2.forEach(function(item, index){console.log(item, index)});

// Acrescenta um item no array
array2.push('novo item');
console.log(array2);

// Remove o último item do array
array2.pop();
console.log(array2);

// Remove o 1° item do array
array2.shift();
console.log(array2);

// Acrescenta um item no inicio do array
array2.unshift('novo item no inicio');
console.log(array2);

// retorna o valor de um indice
console.log(array2.indexOf(true));

// Remove ou subtitui um item por um índice
array2.splice(0, 3);
console.log(array2);

// retona uma parte de um array existente
let novoArray = array2.slice(0, 3);
console.log(novoArray);

// Objetos

let object = {stringtring: 'string', Number: 1, boolean:true, array3:["arrayy"], objecInterno:{objecInterno: 'objeto interno'}}
console.log(object.objecInterno);

// Desestruturação do object
var string = object.string;
console.log(string);

var arrayInterno = object.array3;
console.log(arrayInterno);

var {string, boolean, objecInterno} = object;
console.log(string, boolean, objecInterno);