function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;

	numero=parseInt(Math.random()*10);

	if(numero>=9){

		alert("Exelente");
	}
	else if(numero>4){

		alert("Aprobo");
	}

	else {

		alert("Vamos, la proxima se puede");
	}





}//FIN DE LA FUNCIÓN