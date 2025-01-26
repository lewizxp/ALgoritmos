const readlineSync = require ("readline-sync");
 let lado1 = Number(readlineSync.question("Digite o primeiro lado: "));
 let lado2 = Number( readlineSync.question("Digite o segundo lado: "));
let lado3 = Number(readlineSync.question("Digite o terceiro lado: "));
  
if(lado1 === lado2 && lado2 ===lado3){

    console.log ("equilaterio")
} else{
    console.log("normal")
}
