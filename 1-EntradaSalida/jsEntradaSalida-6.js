/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var Numb1;
var Numb2;
var suma;

Numb1=parseInt(document.getElementById("numeroUno").value);
Numb2=parseInt(document.getElementById("numeroDos").value);

suma= Numb1 + Numb2;

alert("La suma es: "+suma);

}

