function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var i=0;

	while(respuesta=="si"){

		i=parseInt(prompt("Ingrese numero:")); 

		acumulador= acumulador + i;

		respuesta=(prompt("QUiere ingresar otro numero ?: "))


		contador ++;



	}






document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN