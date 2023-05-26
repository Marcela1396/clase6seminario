// Este es un comentario 
/*
Comentarios de multiples lineas
Otro comentario
*/
// Declaración de variables con var

var a1 = 20;
var a2 = 30;

//alert(a1);
var a1;
//alert(a1);

// Declaración de variables con let
let num1 = 10;
let num2 = 2;
sum = num1 + num2;
res = num1 - num2;
mul = num1 * num2;
div = num1 / num2;
/*
alert("El resultado de la suma es: " + sum 
        +"\n la resta es :" + res 
        + "\n la multiplicacion es: " + mul 
        + "\n la division es : " + div
);
*/

// Declaración de constantes
const valor = 2000;


// Declaración de multiples variables;
let number1 = 4, number2 = 10, 
resultado;

number1++;
number2--;
//alert(number1 + "y" + number2);

let flat = true;
//alert(flat);
//alert(!flat);


// Creación de arreglos
const nombres = ["Maria", "Juan"];
//alert(nombres[0] + "-" + nombres[1]);

const edades = new Array(20,30);
//alert(edades[0] + "-" + edades[1]);

//Longitud del arreglo
alert("La longitud del arreglo es" 
+ nombres.length);


// Ordenar el arreglo
nombres.sort();
alert(nombres[0] + "-" + nombres[1]);

nombres.push("Karla");
alert(nombres[0] + "-" + nombres[1] 
+ "-" + nombres[2]);
nombres.sort();
alert(nombres[0] + "-" + nombres[1] 
+ "-" + nombres[2]);

nombres.pop();
alert(nombres[0] + "-" + nombres[1]);






