
"use strict"; //                                    Bloquea la codificacion con Malas practicas

//                                                  Object literal
const producto = {
    nombre: "Monitor de 32 Pulgadas Curvo",
    precio: 450,
    mondeda: "USD",
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}


const { nombre, precio, mondeda, disponible } = producto
// console.log(nombre);
// console.log(precio);
// console.log(mondeda);
// console.log(disponible);

const { informacion: { fabricacion: { pais } } } = producto
console.log(pais)
console.log(nombre)