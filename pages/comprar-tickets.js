function calcular() {
    
    const precioTicket = 200;
    var cant=parseInt(document.getElementById("cantidad").value);
    var categoria=document.getElementById("categoria").value;
    var precioTotal;
    var precioDescuento;
    var cadena = "Total a Pagar: ";

    if(validoCampos()){
        if (cant < 1 || isNaN(cant)) {
            mensajeError1();
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
                printCompra(cant,precioDescuento);
        }
    }  
    else {
        mensajeError2();
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

function mensajeError1 () {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Inserte cantidad valida de tickets!!!',
    });
}

function mensajeError2 () {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'VALIDE CAMPOS!',
    });
}

function printCompra(cant,precioDescuento) {

    Swal.fire({
        title: 'Realizar compra?',
        text: "Estas a punto de comprar " + cant + " entrada/s por: " + precioDescuento+"$",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#008000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar Compra'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Exito!!!',
            'Se realizo con exito la compra de ' + cant + " entrada/s. IMPORTE: $" + precioDescuento,
            'success'
            )
        } else {
            Swal.fire({
            icon: 'error',
            title: 'Compra cancelada',
            showConfirmButton: false,
            timer: 1500
            })
        }
    })
}