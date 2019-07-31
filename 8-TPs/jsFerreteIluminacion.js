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
    var cantlamp;
    var marca;
    var desc;
    var precio = 35;
    var preciototal;
    var preciofinal;

    var impuesto;



    cantlamp = parseInt(document.getElementById("Cantidad").value);

    marca = document.getElementById("Marca").value;

    desc = parseInt(document.getElementById("precioDescuento").value);

   



    //A

    if (cantlamp >= 6) {

        preciototal = cantlamp * precio;

        desc = preciototal * 0.5;

        preciofinal = preciototal - desc;

    }

    //B
    else if (cantlamp == 5) {

        switch ("Marca") {


            case "Argentinaluz":

                preciototal = cantlamp * precio;

                desc = preciototal * 0.4;

                preciofinal = preciototal - desc;

                break;

            default: preciototal = cantlamp * precio;

                desc = preciototal * 0.3;

                preciofinal = preciototal - desc;


        }



    }

    //C

    else if (cantlamp == 4) {

        switch ("Marca") {

            case "ArgentinaLuz":
            case "FelipeLamparas":

                preciototal = cantlamp * precio;

                desc = preciototal * .25;

                preciofinal = preciototal - desc;

                break;

            default: preciototal = cantlamp * precio;

                desc = preciototal * .20;

                preciofinal = preciototal - desc;


        }



    }


    //D

    else if (cantlamp == 3) {

        switch ("Marca") {

            case "ArgentinaLuz":
                preciototal = cantlamp * precio;

                desc = preciototal * .15;

                preciofinal = preciototal - desc;

                break;


            case "FelipeLamparas":

                preciototal = cantlamp * precio;

                desc = preciototal * .10;

                preciofinal = preciototal - desc;

                break;

            default: preciototal = cantlamp * precio;

                desc = preciototal * .5;

                preciofinal = preciototal - desc;
        }

    }






    if(preciofinal>120){

        impuesto= preciofinal * .10;

        preciofinal= preciofinal + impuesto;

        alert("IIBB Usted pago: "+ impuesto );

    }

    



    



}

