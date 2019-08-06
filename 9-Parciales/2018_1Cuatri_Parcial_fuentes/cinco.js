function mostrar()
{


    var planeta = prompt ("Ingrese un planeta del sistema solar: ");

    switch(planeta){


        case "mercurio":
        case "venus":

        alert("Aca hace calor");

        break;


        case "tierra":

        alert("Aca vivimos");

        break;

        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":

        alert(" Aca hace frio");

        break;


        default: alert("Eso no es un planeta, por favor ingrese un planeta valido");





    }






}
