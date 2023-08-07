// La idea seria una app que funcione como mesero virtual. Se elegiría una o varias cervezas y se enviaría el pedido directamente a la cocina, sin necesidad de un mozo seria para Bares, Resto-bares etc.

alert("Bienvenidos a nuestra Cervecería!")

let ingresoExitoso = false //bandera
let nombre = ""
let mesa = ""

// Proceso de logueo

while (ingresoExitoso != true) {

    let nombre = prompt("Ingrese su nombre")
    let mesa = Number(prompt("Por favor ingrese su número de mesa"))

    if (nombre != "" && mesa != "") {
        ingresoExitoso = true
        alert("Hola" + " " + nombre + "!" + " " + "Ahora vamos con tu pedido. Sera Enviado a la mesa:" + " " + mesa)
    }

    else {
        alert("Por favor ingrese su nombre y mesa. No podremos tomar su pedido")
    }
}

// Elección de cervezas

alert("Recuerde que el valor de nuestras cervezas es de $400")
alert("Nuestros tipos de cerveza son: Roja, Rubia, Negra")

function descripcionCompra(producto, unidades) {
    return "Cervezas elegidas:" + " " + producto + ": x" + unidades
}

let detalleCompra = ""
let totalCompra = 0
let finalizarCompra = ""

do {
    let producto = prompt("Elija una cerveza")
    let unidades = Number(prompt("Elija la cantidad de cervezas"))

    detalleCompra = detalleCompra + descripcionCompra(producto, unidades) + "\n"
    totalCompra = totalCompra + 400 * unidades

    finalizarCompra = prompt("Para finalizar la compra ingrese ´ok´. ´Aceptar´ para continuar eligiendo")


} while (finalizarCompra != "ok")

alert(detalleCompra + "Su compra: $" + totalCompra)

//Agregado de papas

let masPapas = prompt("por el valor de $350. Le desea agregar papas al pedido? Ingrese ´si´ o ´no´.")

let combo = totalCompra + 350

switch (masPapas) {
    case "si":
        alert("Excelente! A tu pedido se le agregara el combo de papas con un valor total de $" + combo)
        break;

    case "no":
        alert("Excelente, tu pedido va sin papas")
        break;
    default:
        alert("No se agregaran las papas a tu pedido")
        break;
}

alert("En breve nuestros camareros se acercaran con su pedido a la mesa")
alert("Muchas gracias por su compra! Que lo disfrute!")