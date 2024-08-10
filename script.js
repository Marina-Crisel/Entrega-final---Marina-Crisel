const alumnos = [
    { id: 537, nombre: "Juan Perez", asistencias: 55, promedio: 7.5 },
    { id: 247, nombre: "Ana Lopez", asistencias: 86, promedio: 9 },
    { id: 122, nombre: "Maria Gomez", asistencias: 55, promedio: 6 },
    { id: 721, nombre: "Pedro Acosta", asistencias: 30, promedio: 3 },
    { id: 320, nombre: "Pablo Benitez", asistencias: 80, promedio: 8 },
    { id: 150, nombre: "Sofia Ramirez", asistencias: 65, promedio: 7 },
];

function buscarAlumno(ingresoDatos, objetos) {
    const id = parseInt(ingresoDatos, 10);
    return objetos.filter(alumno => 
        alumno.id === id || alumno.nombre.toLowerCase() === ingresoDatos.toLowerCase()
    );
}

function mostrarResultados(resultados) {
    const resultadoDiv = document.getElementById('resultado');
    if (resultados.length > 0) {
        const respuesta = resultados.map(alumno => 
            `ID: ${alumno.id}, Nombre: ${alumno.nombre}, Asistencias: ${alumno.asistencias}, Promedio: ${alumno.promedio}`
        ).join('<br>');
        resultadoDiv.innerHTML = `El/La estudiante ingresado/a es:<br>${respuesta}`;
    } else {
        resultadoDiv.innerHTML = "No se encontró el alumno/a.";
    }
}

function guardarAlumnos() {
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}

function cargarAlumnos() {
    const alumnosGuardados = localStorage.getItem('alumnos');
    if (alumnosGuardados) {
        return JSON.parse(alumnosGuardados);
    }
    return [];
}

document.getElementById('formulario-busqueda').addEventListener('submit', function(event) {
    event.preventDefault();
    const ingresoDatos = document.getElementById('ingreso-datos').value.trim();
    const alumnosCargados = cargarAlumnos();
    const resultados = buscarAlumno(ingresoDatos, alumnosCargados);
    mostrarResultados(resultados);
});

document.getElementById('cargar-alumnos').addEventListener('click', function() {
    guardarAlumnos();
    alert('Alumno/a guardado.');
});
