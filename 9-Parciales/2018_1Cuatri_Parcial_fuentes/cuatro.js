function mostrar() {

    var num1 = parseInt(prompt("Ingrese un numero"));
    var num2 = parseInt(prompt("Ingrese otro numero"));
    var suma;
    var resta;


    suma = num1 + num2;

    resta = num1 - num2;


    if (num1 == num2) {

        alert(num1 +" " +num2);
    }

    else {

        if (num1 > num2) {

            alert("El resultado es: " + resta);
        }


        else if (suma> 10 ){

        
            alert("la suma es: " + suma + " y supero el 10");
        }


        else {

            alert("El resultado es: " + suma);
        }


        
    }




}
