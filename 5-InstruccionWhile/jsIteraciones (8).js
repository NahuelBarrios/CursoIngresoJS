function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = 's';
	var numero;


	do {

		numero = parseInt(prompt("Ingrese Numero: "));

		if (numero >= 0) {

			positivo = positivo + numero;
		}

		else {

			negativo = negativo * numero;
		}


		respuesta = prompt("Quiere ingresar otro numero?")



	} while (respuesta == 's');








document.getElementById("suma").value = positivo;

if(contador=='s'){
	negativo=0;
}
document.getElementById("producto").value = negativo;

}//FIN DE LA FUNCIÓN