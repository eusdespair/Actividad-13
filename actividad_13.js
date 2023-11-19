
//---------FUNCIONES-------

//1.Función para aplicar descuentos: 

/*

let aplicarDescuento = function (){
    let precioTotal = 15
    if (precioTotal > 5){
        descuento = (total*.10)
    }
}

*/

//2. Reescribir las funciones calcularPrecio y aplicarDescuento como funciones flecha. 

/*
const calcularPrecio =    (cantidad, precio)       =>      cantidad * precio;
let precioTotal = calcularPrecio (8,2);
let aplicarDescuento = (((10)*(precioTotal))/100);
let precioConDescuento = ((calcularPrecio)- (aplicarDescuento));
console.log("El precio total de su compra es de: "+ precioTotal + " Con el descuento, del 10 % tu total a pagar es de : " + precioConDescuento + ". ¡Regresa pronto!");
*/

//3. Función para personalizar helados: crea una función expresada llamada personalizarHelado que tome un sabor como argumento y devuelva un mensaje por consola tipo: "Creando un helado de " + sabor.

/*
function personalizarHelado (sabor) {
   console.log("Creando un helado de: " + sabor); 
}
personalizarHelado("Chocolate");

*/

// 4. Función para saludar:

/*
function saludarCliente () {
    console.log("¡Bienvenido a la tienda de helados! "); 
}

saludarCliente ()
*/

// 5. Función precio final:

const calcularPrecio =    (cantidad, precio)       =>      cantidad * precio;
let precioFinal = calcularPrecio (8,2);
let aplicarDescuento = (((10)*(precioTotal))/100);
let precioTotal = ((calcularPrecio)- (aplicarDescuento));
console.log( "Hola, bienvenido, el total de su compra fue: " + precioTotal);
