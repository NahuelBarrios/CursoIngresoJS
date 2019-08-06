function mostrar()
{

    var precio = parseInt (prompt ("Ingrese el precio: "));
    var descuento = parseFloat (prompt ("Ingrese el descuento"));
    var preciofinal;

    preciofinal = precio - descuento;

    document.getElementById("elPrecioFinal").value =preciofinal;

    




}
