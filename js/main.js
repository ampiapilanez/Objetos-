/*1. Crear un objeto Persona
Enunciado:
Crea un objeto persona que tenga las propiedades: nombre, edad, y ciudad. Luego, imprime cada propiedad por separado en la consola.*/
const objetoPersona = {
    nombre: "Juan",
    edad: 27,
    ciudad: "Madrid",
};*/
/*console.log(objetoPersona.nombre);
console.log(objetoPersona.edad);
console.log(objetoPersona.ciudad);

/*2. Modificar propiedades
Enunciado:
A partir del objeto persona anterior, cambia el valor de la propiedad ciudad y añade una nueva propiedad llamada profesión. Luego, imprime el objeto actualizado en la consola.*/

objetoPersona.edad = "30"

console.log(objetoPersona.edad);

/*3. Objeto Libro
Enunciado:
Crea un objeto llamado libro con las propiedades titulo, autor, y añoPublicacion. Añade un método llamado resumen que devuelva una cadena con un resumen del libro. Ejemplo de salida: "El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967."*/

const libro = {
    titulo: "hola mundo",
    autor: "Pepe",
    añoPublicacion: 2001,
}
for (let key in libro) {
    console.log("El libro ", libro.titulo, " fue escrito por ", libro.autor, "en el año: ", libro.añoPublicacion);
}
/*4. Array de objetos
Enunciado:
Crea un array llamado estudiantes que contenga tres objetos. Cada objeto debe representar un estudiante con las propiedades: nombre, edad, y notaFinal. Luego, recorre el array e imprime el nombre y la nota final de cada estudiante.*/
const arrayEstudiantes = [
 {
    nombre: "Juan",
    edad: 20,
    notaFinal: 8,
}, {
    nombre: "Sofia",
    edad: 19,
    notaFinal: 6,

}, {
    nombre: "Jose",
    edad: 21,
    notaFinal: 7,
}
];
console.log(arrayEstudiantes[0].nombre, arrayEstudiantes[0].notaFinal);
console.log(arrayEstudiantes[1].nombre, arrayEstudiantes[1].notaFinal);
console.log(arrayEstudiantes[2].nombre, arrayEstudiantes[2].notaFinal);

/*5. Método para calcular la edad
Enunciado:
Crea un objeto persona con las propiedades nombre, anioNacimiento, y un método llamado calcularEdad que devuelva la edad actual de la persona basado en el año de nacimiento.*/
const persona = {
    nombre : "Belen",
    anioNacimiento: 2005,

calcularEdad: function(){
    this.anioNacimiento = 2026 - this.anioNacimiento;
    return "La edad actual de la persona es: "+ this.anioNacimiento + " años.";
}
}
console.log(persona.calcularEdad());
/*6. Objeto Coche
Enunciado:
Crea un objeto llamado coche con las propiedades marca, modelo, año y velocidadActual. Añade un método acelerar que incremente la velocidad actual en 10 unidades y otro método frenar que disminuya la velocidad actual en 10 unidades. Asegúrate de que la velocidad no sea negativa.*/
const coche = {
    marca: "fiat",
    modelo: "xxx",
    año: 2005,
    velocidadActual: 100,

acelerar: function(){
    this.velocidadActual = this.velocidadActual + 10;
    return "Acelerando la velocidad seria de: " + this.velocidadActual;
},
frenar: function(){
    this.velocidadActual =  this.velocidadActual - 20;
    return "Frenando la velocidad seria de: " + this.velocidadActual;
}
}
console.log(coche.acelerar());
console.log(coche.frenar());

/*7. Recorrer un objeto
Enunciado:
Crea un objeto producto con las propiedades nombre, precio, cantidad. Usa un ciclo for...in para imprimir todas las propiedades y sus valores.*/
const producto = {
    nombre: "cosa",
    precio: 30,
    cantidad: 5,
};
for (let propiedad in producto);
console.log(propiedad = producto)


/*8. Contar propiedades
Enunciado:
Crea un objeto animal con al menos cinco propiedades. Luego, escribe una función que cuente y devuelva el número de propiedades que tiene el objeto.*/
const animal ={
    tipo: "perro",
    tamaño: "pequeño",
    años: 4,
    nombre: "Pepe",
    color: "blanco",
}
const nPropiedades = function(animal) {
 for (let contador in animal) {
  
/*9. Objeto dentro de otro objeto
Enunciado:
Crea un objeto empresa que tenga las propiedades nombre y direccion. La propiedad direccion debe ser otro objeto con calle, ciudad, y codigoPostal. Luego, accede a las propiedades del objeto anidado e imprímelas.*/

/*10. Añadir métodos a objetos
Enunciado:
Crea un objeto cuentaBancaria con las propiedades titular, saldo. Añade métodos depositar y retirar que modifiquen el saldo según sea necesario. El método retirar debe asegurarse de que no se pueda retirar más dinero del que hay disponible.*/