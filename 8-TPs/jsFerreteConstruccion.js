/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var largo;
    var ancho;
    var perimetro;
    var alambre;



    largo = parseInt(document.getElementById("Largo").value);

    ancho = parseInt(document.getElementById("Ancho").value);

    perimetro = largo + largo + ancho + ancho; // perimetro=( largo+ ancho)*2 o perimetro = 2* largo + 2*ancho

    alambre = perimetro * 3;

    alert("Se necesitan comprar " + alambre + " metros de alambre");



}
function Circulo() {

    var radio = parseInt(document.getElementById("Radio").value);
    var perimetro = 2 * Math.PI * radio;
    var alambre = perimetro * 3;

    alert("Se necesita comprar " + alambre.toFixed(2) + " metros de alambre");


}
function Materiales() {

    var largo;
    var ancho;
    var superficie;
    var Bolsacal;
    var Bolsacemento;



    largo = parseInt(document.getElementById("Largo").value);

    ancho = parseInt(document.getElementById("Ancho").value);


superficie = largo * ancho;

Bolsacal= 3 * superficie;
Bolsacemento = 2 * superficie;

alert("Para una superficie de " + superficie + " m2 necesito /n " + Bolsacemento + " Bolsas de cemento. Y  " + Bolsacal + " Bolsa de cal");




}