
/* Exercício 1
var lernum = [];
function num(){

for(i = 0; i < 20; i++){
    lernum [i] = parseInt(prompt("Insira um número"));
}
}

num();
document.write(lernum) */ 

/* Exercício 2
function cinquenta(){
let nummais = []; 
let nummenos = []; 
let n1 = 0;
let n2 = 0;

for(let i = 0; i < 12; i++){
    let num = (prompt('Insira os números'));
if (num > 50){
nummais[n1] = num;
n1++
} else {
    nummenos[n2] = num;
n2++
}
}
document.write(`Os números maiores que 50 são: ${nummais}. Os menores: ${nummenos}`);

}
cinquenta(); */

// Exercício 3

function terceira(){
let drofo = ["anel da invisibilidade", "dois pares de botas mágicas", "uma poção do sono", "duas poções da inocência"];
let topper = ["capa da invisibilidade", "pedra do despertar", "varinha das varinhas", "poção da inocência", "duas poções da mentira", "poção anti-inteligência"];

 // Topper consumiu uma das poções da mentira, perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica. 

 topper[4] = "uma poção da mentira"; // substitui 
 topper.splice(1,1);  // splice elimina itens, o segundo número é a quantidade de itens depois do selecionado no primeiro número, serão elimininados
 drofo[1] = "um par de botas";
 topper.push("um par de botas", "escudo mágico", "espada mágica");

 // Drofo, ganhou mais uma bota mágica, usou sua poção do sono e consumiu a poção anti-inteligência do Torper, encontrou um ovo de dragão e uma coxinha.

drofo[1] = "dois pares de botas mágicas"; // tinha dois, deu um pro topper e ganhou outra
drofo.splice(2,1);
topper.splice(4,1); // drofo consumiu a poção do topper 
drofo.push("ovo de dragão", "coxinha"); // push bota la no final 


 document.write(`Inventário do Topper: ${topper} </br> </br> Inventário do Drofo: ${drofo}`)

}
terceira();

