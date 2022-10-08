'use strict';

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const nuevoArreglo = carrito.map(producto => `${producto.nombre}-${producto.precio}`);


console.log(carrito);
console.log(nuevoArreglo);

const reproductor = {
    cancion: '',
    play_list: '',

    reproducir: id => console.log(`Reproduciendo cancion con el id: ${id}`),
    pausar: id => console.log(`Pausando la Cancion con el id: ${id}...`),
    borrar: id => console.log(`Borrando Cancion ${id}...`),

    crear_play_list: nombre => {
        console.log(`Creando la Play List con Nombre: ${nombre}`);
        this.play_list = nombre;
    },

    reproducir_play_list: nombre => console.log(`Reproduciendo Play List ${nombre}`),

    set nueva_cancion(nom_cancion) {
        this.cancion = nom_cancion;
        console.log(`'${this.nom_cancion}' Añadida a la Play List ${this.play_list}`)
    },

    get obtener_cancion() {
        console.log(`La Cancion en lista ${this.play_list} es: ${this.cancion}`)
    },
}

reproductor.crear_play_list(`Mis Canciones`);
reproductor.nueva_cancion = `Let's Go Home`;
reproductor.obtener_cancion;