/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    var one;
    var two;
    var tre;
    var suma;

    one = parseFloat(document.getElementById("PrecioUno").value);
    two = parseFloat(document.getElementById("PrecioDos").value);
    tre = parseFloat(document.getElementById("PrecioTres").value);

    suma = one + two + tre;

    alert("La suma es: " + suma);





}
function Promedio() {

    var one;
    var two;
    var tre;
    var suma;
    var promedio;

    one = parseFloat(document.getElementById("PrecioUno").value);
    two = parseFloat(document.getElementById("PrecioDos").value);
    tre = parseFloat(document.getElementById("PrecioTres").value);

    suma = one + two + tre;

    promedio = suma / 3;

    alert("El promedio es: " + promedio);




}
function PrecioFinal() {

    var one;
    var two;
    var tre;
    var suma;
    var iva;


    one = parseFloat(document.getElementById("PrecioUno").value);
    two = parseFloat(document.getElementById("PrecioDos").value);
    tre = parseFloat(document.getElementById("PrecioTres").value);

    iva = (one + two + tre) * .21

    alert("Su iva es "+ iva)




}