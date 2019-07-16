/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    var nuevosueldo;

    sueldo=parseFloat(document.getElementById("sueldo").value);
    resultado= sueldo* 0.1;

    nuevosueldo = sueldo+resultado;
    
    document.getElementById("resultado").value=nuevosueldo;
    






}
