/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
var Numb1;
var Numb2;
var suma;

Numb1=parseInt(document.getElementById("numeroUno").value); // pasar a numero la varible con el parseint
Numb2=parseInt(document.getElementById("numeroDos").value);

suma= Numb1 + Numb2;

alert("La suma es: "+suma);

}

function restar()
{
var Numb1;
var Numb2;
var resta;

Numb1=parseInt(document.getElementById("numeroUno").value);
Numb2=parseInt(document.getElementById("numeroDos").value);

resta= Numb1 - Numb2;

alert("la resta es: "+resta);



}	

function multiplicar()
{ 
	
	var Numb1;
var Numb2;
var multiplicacion;

Numb1=parseInt(document.getElementById("numeroUno").value);
Numb2=parseInt(document.getElementById("numeroDos").value);

multiplicacion= Numb1 * Numb2;

alert("la multiplicacion es: "+multiplicacion);

}

function dividir()
{
		var Numb1;
var Numb2;
var division;

Numb1=parseInt(document.getElementById("numeroUno").value);
Numb2=parseInt(document.getElementById("numeroDos").value);

division= Numb1 / Numb2;

alert("la division es: "+division);
}

