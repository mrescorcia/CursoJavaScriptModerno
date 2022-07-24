
//                                                  Object literal
const producto = {
    nombre: "Monitor de 32 Pulgadas Curvo",
    precio: 450,
    mondeda: "USD",
    disponible: true
}

console.log(producto);
console.log(producto.nombre);
console.log(producto['nombre']);

console.log("");
console.log("Agregar llaves o propiedades al objeto --v");
producto.imagen = "imagen.jpg";
console.log(producto);

console.log("");
console.log("Eliminar llaves o propiedades al objeto --v");
delete producto.disponible;
console.log(producto);

console.log("");
console.log("Destructuring de Objetos");
console.log("Asignar las propiedades de un objeto a variables --v");
const { nombre, precio, mondeda, disponible } = producto
console.log(nombre);
console.log(precio);
console.log(mondeda);
console.log(disponible);