function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(!(sexo== 'f' || sexo=='m'))
{
    alert("Dato invalido");

    sexo=prompt("Ingrese su sexo");






}



document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN