// Crea un nuevo fichero JS que contenga las siguientes líneas

console.log(`- Una clase llamada "Estudiante" que tenga:`)
console.log(`- Una variable llamada nombre`)
console.log(`- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS`)

console.log(`- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas`)
class Estudiante {
    nombre;
    asignaturas=['Javascript','HTML','CDD'];

    constructor(nombre){
        this.nombre=nombre;
    }

    obtenDatos(){
        return {nombre:this.nombre,asignaturas:this.asignaturas}
    }
}

console.log(`- Crea una nueva instancia de "Estudiante"`)
console.log(`- Haz la llamada al método obtenDatos`)

const instanciaEstudiante = new Estudiante("carlos");
console.log(instanciaEstudiante.obtenDatos())





