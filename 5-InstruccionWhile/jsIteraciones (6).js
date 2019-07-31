function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var numero = 0;

	//acumulador / contador


	while (contador < 5) {

		numero = parseInt(prompt("Ingrese numero:"));

		while(isNaN(numero))
		{
			numero=parseInt(prompt("Esto no es un numero, Escriba un numero"));
		}


		acumulador = acumulador + numero;

		contador++;







	}



	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador / 5;

}//FIN DE LA FUNCIÓN