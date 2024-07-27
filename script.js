

const alumnos = [
    { id: 537, nombre: "Juan Perez", asistencias: 55, promedio: 7.5 },
    { id: 247, nombre: "Ana Lopez", asistencias: 86, promedio: 9 },
    { id: 122, nombre: "Maria Gomez", asistencias: 55, promedio: 6 },
    { id: 721, nombre: "Pedro Acosta", asistencias: 30, promedio: 3 },
    { id: 320, nombre: "Pablo Benitez", asistencias: 80, promedio: 8 },
    { id: 150, nombre: "Sofia Ramirez", asistencias: 65, promedio: 7 },
];

function buscarAlumno(ingresoDatos, objetos) {
    return objetos.filter(alumno => alumno.id === parseInt(ingresoDatos) || alumno.nombre.toLowerCase() === ingresoDatos.toLowerCase()
    );
}

let continuar = true;

do {
    let ingresoDatos = prompt("Ingrese ID o nombre completo del alumno/a (o escriba '0' para salir)");
        
    if (ingresoDatos === '0') {
        continuar = false;
        alert("Búsqueda finalizada.");
        break;
    }

let resultados = buscarAlumno(ingresoDatos, alumnos);

    if (resultados.length !== 0) {
        let respuesta = "El estudiante ingresado es:\n" + resultados.map(alumno => `ID: ${alumno.id}, Nombre: ${alumno.nombre}, Asistencias: ${alumno.asistencias}, Promedio: ${alumno.promedio}`);
        alert(respuesta);
    } else {
        alert("No se encontró el alumno/a.");
    }
        
} while (continuar);