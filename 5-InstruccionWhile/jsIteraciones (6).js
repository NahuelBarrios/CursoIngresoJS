function mostrar()
{

	var contador=0;
	var acumulador=0;
	var i=0;

	//acumulador / contador
	
	
	while(i<5){

		contador=parseInt(prompt("Ingrese numero:")); 

		acumulador= acumulador + contador;

		i++;



	



	}



document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/5;

}//FIN DE LA FUNCIÓN