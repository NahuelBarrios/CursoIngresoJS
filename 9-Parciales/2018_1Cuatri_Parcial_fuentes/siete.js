function mostrar() {


    var contador;
    var nota = 0;
    var sexo;
    var suma = 0;
    var promedio;
    var notabaja = 0;
    var sexobaja = 0;
    var flag = 0;
    var notav6 = 0;





    for (contador = 0; contador < 5; contador++) {

        nota = parseInt(prompt("Ingrese su nota"));

        while (!(nota >= 0 && nota <= 10)) {
            alert("No es una nota valida");
            nota = parseInt(prompt("Ingrese una nota valida"));
        }



        while (isNaN(nota)) {

            alert("No es un numero valido");
            nota = parseInt(prompt("Ingrese una nota valida"));
        }

        sexo = prompt("Ingrese su sexo f ó m");

        while (!(sexo == 'f' || sexo == 'm')) {

            alert("No es un sexo valido");

            sexo = prompt("Ingrese un sexo valido");
        }

        suma = suma + nota;


        if (nota < notabaja || flag == 0) { // flag es para que entre si o si.

            notabaja = nota;

            sexobaja = sexo;

            flag = 1;
        }


        if (sexo == 'm' && nota >= 6) {

            notav6++;
        }





        promedio = suma / 5;

    }

    //A
    alert("El promedio es: " + promedio + "\n Nota baja: " + notabaja + "\n Sexo con nota baja: " + sexobaja + "\n cant con varones con notas >=6: " + notav6);








}








