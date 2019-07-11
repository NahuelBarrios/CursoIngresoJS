function mostrar()
{
//tomo la edad  

var edad;

edad=parseInt(document.getElementById("edad").value);

 if(edad>18){
    alert("mayor de edad");
}
    else if(edad>=13){

        alert("adolescente")
    }

    else alert("niño");






}//FIN DE LA FUNCIÓN