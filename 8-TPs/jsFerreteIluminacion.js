/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {

    //Todas las lamparas estan $35
    var cantlamp = parseFloat(document.getElementById("Cantidad").value);
    var marca = document.getElementById("Marca").value;
    var desc;
    var precio = 35;
    var preciototal;
    var preciofinal;

    var impuesto;






    switch (cantlamp) {

        case 1:
        case 2:

            preciofinal = precio * cantlamp;
            

            break;

        case 3:

            if (marca == "ArgentinaLuz") {

                preciototal = precio * cantlamp;

                desc = preciototal * .15;

                preciofinal = preciototal - desc;


            }

            else if (marca == "FelipeLamparas") {

                preciototal = precio * cantlamp;

                desc = preciototal * .10;

                preciofinal = preciototal - desc;

            }

            else {

                preciototal = precio * cantlamp;

                desc = preciototal * .05;

                preciofinal = preciototal - desc;

            }

            break;


        case 4:

            if (marca == "ArgentinaLuz" || "FelipeLamparas") {

                preciototal = precio * cantlamp;

                desc = preciototal * .25;

                preciofinal = preciototal - desc;

            }

            else {

                preciototal = precio * cantlamp;

                desc = preciototal * .20;

                preciofinal = preciototal - desc;

            }

            break;


        case 5:

            if (marca == "ArgentinaLuz") {

                preciototal = precio * cantlamp;

                desc = preciototal * .40;

                preciofinal = preciototal - desc;

            }

            else {
                preciototal = precio * cantlamp;

                desc = preciototal * .30;

                preciofinal = preciototal - desc;

            }

            break;

        default:

            preciototal = precio * cantlamp;

            desc = preciototal * .50;

            preciofinal = preciototal - desc;

    }


    if (preciofinal > 120) {

        impuesto = preciofinal * .10;

        alert("IIBB Usted pago: " + impuesto);


    }


document.getElementById("precioDescuento").value= desc;



}

