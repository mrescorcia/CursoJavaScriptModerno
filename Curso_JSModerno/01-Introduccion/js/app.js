console.time('Tiempo Ejecutando este fragmento de Codigo');
const nombre = prompt("Cual es tu nombre?");
//alert("Hi World ", nombre, "!")
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;
console.timeEnd('Tiempo Ejecutando este fragmento de Codigo');