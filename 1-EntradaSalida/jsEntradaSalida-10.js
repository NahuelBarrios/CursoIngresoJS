/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;
    var descuento;

    importe=parseFloat(document.getElementById("importe").value);

    resultado= importe * 0.25;

    descuento= importe - resultado;


    document.getElementById("resultado").value= descuento;

    








}
