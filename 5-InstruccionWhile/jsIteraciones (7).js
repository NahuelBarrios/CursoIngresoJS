function mostrar()
{

	var contador=0;
	var acumulador=0;
	var seguir="si";
	var i=0;

	while(seguir=="si"){

		i=parseInt(prompt("Ingrese numero:")); 

		while(isNaN(i)){
			
			i=parseInt(prompt("Eso no es un numero, ingrese un numero por favor:"));
		}

		acumulador= acumulador + i;

	    seguir=(prompt("QUiere ingresar otro numero ?: "))


		contador ++;



	}






document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN