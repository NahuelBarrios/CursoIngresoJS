function mostrar() {

    var numero;
    var s;
    var letra;
    var pares = 0;
    var inpares = 0;
    var ceros = 0;

    do {
        numero = parseInt(prompt("Ingrese un numero"));


        while (!(numero > -100 || numero <= 100)){
            numero = prompt("ingrese un numero correcto");

        }

        if (numero % 2 == 0 && numero!= 0) {


            pares++

        }

        else if (numero % 2 == 1) {
            inpares++
        }
        else{

            ceros++;

        }
        s = prompt("quiere ingresar otro numero?");


    




    } while (s == 's');

    document.write("la cantidad de numeros pares es " + pares + "<br>");
    document.write("la cantidad de numeros inpares es " + inpares + "<br>");
    document.write("la cantidad de ceros es " + ceros + "<br>");

















































}
