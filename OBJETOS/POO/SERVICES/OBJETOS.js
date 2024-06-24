// CLASE : Plantilla para crear objetos.
class Persona {

}

// OBJETO : Es una entidad con caracteristicas especificas, teniendo atributos y realizar acciones.
// objeto = miObjeto.
// new = Para crear un objeto a partir de una clase.
const miObjeto = new Persona();

// INSTANCIA : Es un objeto creado a partir de una clase.
const instancia = new Persona();
const instancia2 = new Persona();

// ATRIBUTO  : Define las caracteristicas asociados a un objeto.
// this : Para definirlo atributos.
// saludar() : Metodo para mostrar un saludo en la consola, utilizando los atributos.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`¡Hola! Mi nombre es ${nombre} y tengo ${edad} años.`);
    }
}



