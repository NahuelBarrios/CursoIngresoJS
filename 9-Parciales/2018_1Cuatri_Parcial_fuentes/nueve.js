function mostrar()
{
    var peso = 0;
    var producto;
    var suma= 0;
    var ese = 0;
    var marca;
    var respuesta;
    var contador = 0;
    var temperatura = 0;
    var temperaturapares = 0;
    var pesomax = 0;
    var pesomin = 0;
    var flag = 0;
    var marcamax;
    var menoscerogrado = 0;
    var promedio;



    do {

producto = prompt ("Ingrese el producto;")

        marca = prompt("Ingrese una marca: ");

        peso = parseInt (prompt ("Ingrese el peso: "));

        while(!(peso>=1 && peso<=100)){

            alert("No es un peso valido");

            peso = parseInt (prompt ("Ingrese un peso valido"));

        }

        suma = suma + peso;

        temperatura = parseInt ( prompt ("Ingrese la temperatura del producto: "));

        while (!(temperatura >=-30 && temperatura <= 30)){

            alert("Ingrese una temperatura valida");

            temperatura = parseInt (prompt ("Ingrese la emperatura del producto.: "));

        }

        if(temperatura % 2 == 0){

            temperaturapares++;

        }


        if(peso>pesomax || flag == 0 ){

            pesomax = peso;

            marcamax = marca;

            flag =1;
        }


        if ( temperatura<0){

            menoscerogrado++;      

        }


        if( contador == 0){

            pesomax = peso;

            pesomin = peso;
        }

        else{

            if(peso>pesomax){

                pesomax = peso;
            }

            if(peso<pesomin){

                pesomin = peso;
            }
}

respuesta = (prompt ("Quiere seguir?"));

        contador ++;

    

    } while(respuesta == 's');

    promedio = suma/contador;

document.write ( "Cantidad de temperatura pares: " + temperaturapares + "<br>");
document.write ( "Marca del producto mas pesado " + marcamax + "<br>");
document.write ("Productos menores a 0 grados: " + menoscerogrado + "<br>");
document.write ("Promedio de peso de todos los productos: "  + promedio + "<br>");
document.write (" pesomaximo: " + pesomax + " peso minimo: " + pesomin + "<br>");




}
