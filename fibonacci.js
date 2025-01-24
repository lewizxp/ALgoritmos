let num1 = 0 ;
let num2 = 1;
let num3 = 0;
let fibonacci = " ";
fibonacci = num1 + " " + num2;

for ( let i = 1; i<=10; i++){
    num3  = num1 + num2;
    fibonacci += " " + num3;
    num1 = num2;
    num2 =num3;


}
console.log (fibonacci)
