function mostrar() {

	var contador = 0;
	// declarar variables

	var respuesta = 's';

	var numero;
	var max;
	var min;


	do {
		numero = parseInt(prompt("Ingrese un nro:"));

		if (contador == 0) {
			max = numero;
			min = numero;

		}

		else {
			if (numero > max) {
				max = numero;

			}

			if (numero < min) {
				min = numero;

			}

		}

		respuesta = (prompt("quiere ingresar otro Numero: "));
		contador++;

	} while (respuesta == 's');

document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;



}//FIN DE LA FUNCIÓN