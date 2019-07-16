/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var divid;
    var divis;
    var resto;

    divid=parseInt(document.getElementById("numeroDividendo").value);
    divis=parseInt(document.getElementById("numeroDivisor").value);

    resto= divid % divis;

    alert("El resto es: "+resto);


    


}
