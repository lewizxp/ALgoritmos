let input = require("readline-sync");
console.log("Sua Idade");

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

const anoNas = Number(input.question("Digite seu ano de Nascimento"));

if(anoAtual< anoNas){
console.log('error, data de aniversário incorreta')

} else{

console.log (` Sua idade é ${anoAtual- anoNas} anos! `)
}


