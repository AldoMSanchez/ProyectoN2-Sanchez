// Definir un objeto con propiedades y métodos
const persona = {
    nombre: "Lionel",
    apellido: "Messi",
    dni: 33512642,
    direccion: "AV Miami Beach",
    ciudad: "Miami",
    provincia: "Santa Fe",
    casado: false,
    
    // Método para verificar el estado civil
    estaCasado() {
        return this.casado ? "Está casado!" : "Está soltero!";
    }
};

console.log(persona);
console.log(persona.apellido + ", " + persona.nombre);
console.log(persona.estaCasado());

// Definir un objeto bebida con métodos para modificar y acceder a sus valores
const bebida = {
    id: 1,
    nombre: "Coca Cola",
    precio: 1600,

    // Método para mostrar información de la bebida
    mostrarInfo() {
        return `${this.nombre} $${this.precio}`;
    },

    // Método para actualizar los valores de la bebida
    actualizar(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
};

console.log(bebida.mostrarInfo());

// Modificar valores de un objeto bebida
bebida.actualizar("Coca Cola 2L", 2000);
console.log(bebida.mostrarInfo());

// Constructor de usuario para redes sociales
function UsuarioIG(nombre = "[SIN NOMBRE]", usuario = "[SIN USUARIO]", seguidores = 0) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.seguidores = seguidores;
}

const usuario1 = new UsuarioIG("Lionel Messi", "leomessi", "503M");
const usuario2 = new UsuarioIG("Cristiano Ronaldo");

console.log(usuario1);
console.log(usuario2);

// Constructor para crear una bebida con IVA
function CrearBebida({id, nombre, precio}) {
    this.idProducto = id;
    this.nombreProducto = nombre.toUpperCase();
    this.precioSinIVA = precio;
    this.precioConIVA = this.precioSinIVA * 1.21;
    this.descripcion = "";
}

const bebida1 = new CrearBebida({id: 1, nombre: "Coca Cola", precio: 1600});
const bebida2 = new CrearBebida({id: 2, nombre: "Pepsi", precio: 1500});

console.log(bebida1);
console.log(bebida2);

bebida1.descripcion = "Bebida Cola con Azúcar";
console.log(bebida1);

// Crear una clase Persona con métodos
class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }

    pasarAMayuscula() {
        this.nombre = this.nombre.toUpperCase();
    }
}

const persona1 = new Persona("Gabriel Roulliet", 25, "Paunero 1200");
console.log(persona1);
console.log(persona1.saludar());
persona1.pasarAMayuscula();
console.log(persona1);

// Definir y manipular arrays
const lista = [1, 2, 3];
const lista1 = ["claudio", "gabriela", "laura"];
const lista2 = ["javier", "veron", 1122334455, "Av. San Martin", ["Fiat Duna", "Fiat Palio", "Chery QQ"], {id: 1, nombre: "Tomas", categoria: "perro"}, {id: 2, nombre: "Amy", categoria: "gatos"}];

console.log(lista);
console.log(lista1);
console.log(lista2);

console.log("Nombre: " + lista2[0] + " " + lista2[1]);
console.log("Auto: " + lista2[4][1]);
console.log("Mascota: " + lista2[6].nombre + " (" + lista2[6].categoria + ")");

// Modificar valores de un array
lista2[6] = "www.google.com.ar";
lista2[5].categoria = "Perros";
lista2[4][0] = "Bicicleta";
console.log(lista2);

// Recorrer un array
const numerosArray = [10, 9, 8, 5, 1, 2, 43, 99.9];
for (let i = 0; i < numerosArray.length; i++) {
    console.log(numerosArray[i]);
}

// Ejemplo de manipulación de arrays
const nombresArray = ["laura", "alexandra", "marcelo", "aldo", "facundo"];
nombresArray.push("Juan");
nombresArray.push({id: 1, nombre: "Coca Cola"});
nombresArray.push(["coca cola", "fernet", "hielo"]);
console.log(nombresArray);

nombresArray.unshift("Pedro");
console.log(nombresArray);

let nombreEliminado = nombresArray.pop();
console.log(nombresArray);
console.log(nombreEliminado);

nombreEliminado = nombresArray.shift();
console.log(nombresArray);
console.log(nombreEliminado);

nombresArray.splice(2, 2);
console.log(nombresArray);

const nombreFinal = nombresArray.join(" / ");
console.log(nombreFinal);

const perrosArray = ["cambai", "tomas"];
const gatosArray = ["amy", "benita"];
const cobayosArray = ["blanco", "negro"];
const mascotas = perrosArray.concat(gatosArray, cobayosArray);
console.log(mascotas);

const nombresFinal = nombresArray.slice(2, 3);
console.log(nombresFinal);

let pos = nombresArray.indexOf("alexandra");
console.log(nombresArray);
console.log(pos);

// Ejemplo de búsqueda con prompt y alert (para navegador)
if (typeof prompt === 'function' && typeof alert === 'function') {
    let nombreBuscado = prompt("Ingrese el nombre a buscar:");
    let posArray = nombresArray.indexOf(nombreBuscado);
    if (posArray >= 0) {
        alert("El nombre se encuentra en la posición: " + posArray);
    } else {
        alert("Error! No existe el nombre ingresado!");
    }

    if (nombresArray.includes(nombreBuscado)) {
        alert("El nombre se encuentra en el Array!");
    } else {
        alert("Error! No existe el nombre ingresado!");
    }
}

// Manipulación de arrays
nombresArray.reverse();
console.log(nombresArray);
nombresArray.reverse();
console.log(nombresArray);

// Ejemplos de funciones de orden superior
function porCadaUno(unArray, unaFuncion) {
    for (const elemento of unArray) {
        unaFuncion(elemento);
    }
}

const numerosArray2 = [1, 2, 3, 4];
const nombresArray2 = ["mauro", "florencia", "marcelo", "ryosho"];

const numerosDoble = [];
const unaFuncion = (valor) => {
    numerosDoble.push(valor * 2);
};

porCadaUno(numerosArray2, unaFuncion);
console.log(numerosDoble);

// Funciones de búsqueda y transformación
const cursos = [
    {id: 1, nombre: "Desarrollo Web", precio: 50000},
    {id: 2, nombre: "JavaScript", precio: 55000},
    {id: 3, nombre: "React JS", precio: 60000}
];

const curso1 = cursos.find(item => item.nombre === "React JS");
const curso2 = cursos.find(item => item.nombre === "JS");
const curso3 = cursos.find(item => item.precio <= 54000);

console.log(curso1 ? `${curso1.nombre} $${curso1.precio}` : "Curso no encontrado");
console.log(curso2); // undefined
console.log(curso3 ? `${curso3.nombre} $${curso3.precio}` : "Curso no encontrado");

const cursoPrecioMenor = cursos.filter(item => item.precio <= 55000);
console.log(cursoPrecioMenor);

const preciosConIVA = cursos.map(item => ({...item, precioConIVA: item.precio * 1.21}));
console.log(preciosConIVA);

const totalPrecioCursos = cursos.reduce((total, curso) => total + curso.precio, 0);
console.log(`Total Precio Cursos: $${totalPrecioCursos}`);
