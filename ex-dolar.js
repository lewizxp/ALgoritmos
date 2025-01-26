let input = require("readline-sync")

let dolar = Number(input.question("Quantos dolares vc quer levar?: "))
let real = dolar * 5.91
console.log(`Você terá que levar ${real} em reais para adingir os dolares que vc quer levar`)