function mostrar() {
    var notas;
    var cantalumnos = 0;
    var cantnotas = 0;
    var contador = 0;
    var sexo;
    var suma = 0;
    var promedio;



    while (contador < 5) {

        notas = parseInt(prompt("Ingrese su nota "));

        while (!(notas >= 0 || notas <= 10)) {

            notas = parseInt(prompt("No es una nota vaida. Ingrese valores del 0 al 10"));

            contador++;

        }

sexo = prompt("Ingrese su sexo: ");

        while(!(sexo=='f'|| sexo=='m')){

            sexo= prompt("Sexo invalido, Ingrese un sexo definido f ó m");

        }

        suma = suma + notas;
    promedio = suma / 5; 

    }

alert("El promedio es: " + promedio);



}








