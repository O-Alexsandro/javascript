var jogador1 = 0;
var jogador2 = 0;
var placar;


jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos');

// Usando if
if(jogador1 > 0 && jogador2 ==0) {
    console.log('jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
// Usando else
} else if(jogador2 > 0 && jogador1 ==0){
    console.log('Jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguem marcou ponto');
} 

// Switch case
switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
        case placar = jogador2 > jogador1:
            console.log('Jogador 2 ganhou');
            break;
            default:
            console.log('Ninguem ganhou');
}

// Estruturas de repetição
let array = ['valor1','valor2','valor3','valor4','valor5',];
let object = {propriedade: 'valor1', propriedade2: 'valor2', propriedade:'valor3'}

// For - executa uma instrução até que seja falso
for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

// for/in executa repetição a partir de uma prorpiedade
for(let i in array){
    console.log(i);
}

// com object
for(j in object){
    console.log(j)
}

// For/ of repetição a partir de um valor
for(d of array){
    console.log(d);
}

// com object
for(d of object.propriedade){
    console.log(d);
}

// While - executa uma instrução enquanto determinada condição for verdadeira
var a = 1;
while (a < 10){
    a++;
    console.log(a);
}

// Do while
do {
    a++;
    console.log(a);
}  while (a < 10);