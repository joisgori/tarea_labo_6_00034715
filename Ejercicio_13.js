//La tiendita
console.log('Ingrese el número de la opción que desea ejecutar:')
console.log('1. Agregar producto \n2. Modificar Stock \n3. Registrar venta y reducir stock \n');
console.log('4. Mostrar promedio de ventas realizadas \n5. Mostrar productos con stock \n6. Salir del sistema');
objeto = new object();
arregloOb = [];
do {
    var opcion = prompt("Ingrese una opción");
    switch (opcion) {
        case "1":
        //Agregar producto.
            var producto = prompt('Ingrese nombre del producto');
            arregloOb.push(producto);
            var codigo = prompt('Ingrese nombre del producto');
            producto.codigo;
            var descrip = prompt('Ingrese nombre del producto');
            producto.descrip;
            break;
        case "2":
        //Modificar Stock.
            console.log('Modificar Stock.');
            break;
        case "3":
        //Registrar venta y reducir stock. 
            console.log('Registrar venta y reducir stock');
            break;
        case "4":
        //Mostrar promedio de ventas realizadas.
            console.log('Mostrar promedio de ventas realizadas ');
            break;
        case "5":
        //Mostrar productos con stock cero.
            console.log('Mostrar productos con stock cero');
            break;
        case "6":
        //Salir del sistema.
            console.log('Salir del sistema');
            break;
        default:
            console.log('Escoja una opción válida, por favor.');
    }
} while (opcion != "6");

/**
 * atributos de productos
 *  
    Código.
    Descripción del producto.
    Tipo de producto.
    Precio de compra (Michelle).
    Precio de venta (Clientes).
    Stock.

 */
