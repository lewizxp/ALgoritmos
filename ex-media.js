const readlineSync = require ("readline-sync");


 let n1 = Number(readlineSync.question("Digite o primeiro número: "))
 let n2 = Number(readlineSync.question("Digite o segundo número: "))
 let n3 = Number(readlineSync.question("Digite o terceiro número"));

 let media = n1 + n2 +n3 /3


 console.log(` A media dos números digitados é ${media} `);