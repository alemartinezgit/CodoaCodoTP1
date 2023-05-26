function calcular() {
    
    const precioTicket = 200;
    var cant;
    var categoria;
    var precioTotal;
    var precioDescuento;
    var cadena = "Total a Pagar: ";

    cant=parseInt(document.getElementById("cantidad").value);
    categoria=document.getElementById("categoria").value;

    if(validoCampos()){
        if (cant < 1 || isNaN(cant)) {
            alert("Porfavor ingrese una cantidad de ticket valida");
        } else {
            precioTotal = cant * precioTicket;
            switch(categoria) {
                case "estudiante":
                    precioDescuento = precioTotal * 0.2;
                    break;
                case "trainee":
                    precioDescuento = precioTotal * 0.5;
                    break;
                case "junior":
                    precioDescuento = precioTotal * 0.85;
                    break;
            }
            document.getElementById("total").value = cadena + precioDescuento ;
        }
    }  
    document.getElementById("cantidad").value = "";
}

function validoCampos() {
    
    var nombre;
    var apellido;
    var email;

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;

    if(nombre == "" || apellido == "" || email == "") {
        return false;
    }
    return true;
}