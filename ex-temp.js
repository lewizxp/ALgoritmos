let input = require ("readline-sync");
 let f = Number(input.question("Digite a temperatura em Fahrenheit"));
 let c =(5/9) *  (f - 32);
 console.log(`A conversão de Fahrenheit para celcius é ${c} `);
