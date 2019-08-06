function mostrar()
{

var animal;
var animalpesadonombre;
var peso;
var suma;
var temperatura;
var contador = 0;
var temperaturapares = 0;
var animalmaspesado= 0;
var menoscerogrado = 0;
var maximo;
var minimo;
var promedio;

do{

animal = prompt ("Ingrese un animal: ");

peso = parseInt (prompt ("Ingrese el peso: "));

while(!(peso>=1 && peso<=1000)){

    alert("Peso no valido.");

    peso = parseInt (prompt ("Ingrese un peso entre 1 y 1000: "));

}
suma = suma + peso;

temperatura = parseInt (prompt ("Ingrese la temperatura del habtat: "));

while(!(temperatura >= -30 && temperatura <= 30)){

    alert("Temperatura invalida");

    temperatura = parseInt (prompt ("Ingrese una temperatura entre -30 y 30: "));

}


if(temperatura %2 == 0){

    temperaturapares++;
}

if ( peso> animalpesado || contador == 0){

    animalpesadonombre = animal;

    animalmaspesado = peso;

    contador =1;

}

if( temperatura<0){

    menoscerogrado++;
}


if ( menoscerogrado ){

maximo = menoscerogrado

minimo = menoscerogrado

}

else{

if(menoscerogrado>maximo){

    maximo = menoscerogrado;
}

if(menoscerogrado<minimo){

    minimo = menoscerogrado;
}

}




respuesta = prompt ("Quiere continuar?");

contador ++;

}while ( respuesta == 's');

promedio = suma /contador;



document.write ("" "<br>")




}

