var band = true;

do{ 
    let respuesta = prompt("¿Cuál es tu clima favorito");

    switch (respuesta){
        case "lluvia":
            alert("Recuerda llevar un paraguas");
            break;
        case "sol":
            alert("Recuerda llevar ropa ligera");
            break;
        case "nublado":
            alert("Recuerda salir a pasear");
            break;
        default:
            band = false;
    }
}while (band);

alert("Adiós..");