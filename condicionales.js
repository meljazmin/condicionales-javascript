'use strict'

//Condicional if 
//Una estructura de control que nos permite comparar algo 


// var edad1 = 30;
// var edad2 = 12; 

// //Si pasa esto
// if(edad1 > edad2){
// //ejecuta esto
// console.log("Edad1 es mayor que edad2");
// }else {
//     console.log("Edad 1 es inferior");
// }


var edad = 14; 
var nombre ="Pepito";

if (edad >= 18){
    console.log(nombre + " tiene " + edad + " años, es mayor de edad.");

    if(edad == 33){
        console.log("Todavía eres millenial");
    }else if (edad >= 70){
        console.log("Sos de la tercera edad");
    }else {
        console.log("Ya no eres millenial");
    }
}else {
    console.log(nombre + " es menor de edad.");
}


//Operadores lógicos 
// &&(AND), OR (||), negacion !

var year = 2020; 
if(year != 2016){
    console.log("El año no es 2016, realmente es " + year);
}


// AND
if(year >= 2000 && year<= 2020){
    console.log("Estamos en la era actual");

}else {
    console.log("Estamos en la era post moderna");
}

//OR
if(year == 2008 || (year == 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado");
}


//Switch
var imprime = ""; 
switch(edad){ 
    case 18: 
    imprime = "Acabas de cumplir la mayoría de edad";
    break; 
    case 25: 
    imprime = "Ya eres un adulto";
    break; 
    case 40: 
    imprime = "Crisis de los 40";
    break; 
    case 75: 
    imprime = "Eres ya un anciano";
    break; 
    default: 
    imprime = "Tu edad es neutra";
    break;
}

console.log(imprime);
