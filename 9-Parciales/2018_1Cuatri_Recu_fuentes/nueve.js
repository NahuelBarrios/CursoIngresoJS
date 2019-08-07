function mostrar()
{

var animal;
var animalpesadonombre;
var animalpesado;
var peso;
var respuesta;
var suma = 0;
var temperatura;
var contador = 0;
var temperaturapares = 0;
var temperaturapesado =0;
var menoscerogrado = 0;
var maximo = 0;
var minimo = 0;
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

    temperaturapesado = temperatura;

    contador =1;

}

if( temperatura<0){

    menoscerogrado++;
}


if (temperatura<0 ){

maximo = temperatura;

minimo = temperatura;

}

else{

if(temperatura>maximo){

    maximo = temperatura;
}

if(temperatura<minimo){

    minimo = temperatura;
}

}




respuesta = prompt ("Quiere continuar?");

contador ++;

}while ( respuesta == 's');

promedio = suma /contador;



document.write ("Cantidad de temperatura pares: " + temperaturapares + "<br>");
document.write ("Nombre animal mas pesado: " + animalpesadonombre + " Temperatura: " + temperaturapesado + "<br>" );
document.write ( "Cant animales que viven a <0grados: " + menoscerogrado  + "<br>");
document.write ( "Promedio de pesos: " + promedio + "<br>");
document.write (" peso minimo animales <0: " + minimo + " peso maximo animales <0: " + maximo + "<br>");




}

