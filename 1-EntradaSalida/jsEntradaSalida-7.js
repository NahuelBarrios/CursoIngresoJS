/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var Num1;
    var Num2;
    var suma;

    Num1=parseInt(document.getElementById("numeroUno").value);
    Num2=parseInt(document.getElementById("numeroDos").value);

    suma= Num1 + Num2;

    alert("El resultado es: "+suma);

}

function restar()
{
    var Num1;
    var Num2;
    var resta;

    Num1=parseInt(document.getElementById("numeroUno").value);
    Num2=parseInt(document.getElementById("numeroDos").value);

    resta= Num1 - Num2;

    alert("El resultado es: "+resta);

}

function multiplicar()
{ 
    var Num1;
    var Num2;
    var Mult;

    Num1=parseInt(document.getElementById("numeroUno").value);
    Num2=parseInt(document.getElementById("numeroDos").value);

    Mult= Num1 * Num2;

    alert("El resultado es: "+Mult);
    
}

function dividir()
{
    var Num1;
    var Num2;
    var div;

    Num1=parseInt(document.getElementById("numeroUno").value);
    Num2=parseInt(document.getElementById("numeroDos").value);

    div= Num1 / Num2;

    alert("El resultado es: "+div);
    



}

