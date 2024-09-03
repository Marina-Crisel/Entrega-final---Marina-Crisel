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
        alumno.id === id || 
        alumno.nombre.toLowerCase().includes(ingresoDatos.toLowerCase())
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
    try {
        localStorage.setItem('alumnos', JSON.stringify(alumnos));
        alert('Alumnos guardados correctamente.');
    } catch (error) {
        console.error('Error al guardar los alumnos en el localStorage:', error);
        alert('No se pudo guardar los alumnos.');
    }
}

function cargarAlumnos() {
    try {
        const alumnosGuardados = localStorage.getItem('alumnos');
        return alumnosGuardados ? JSON.parse(alumnosGuardados) : [];
    } catch (error) {
        console.error('Error al cargar los alumnos desde el localStorage:', error);
        return [];
    }
}

function agregarAlumno(id, nombre, asistencias, promedio) {
    const nuevoAlumno = { id, nombre, asistencias, promedio };
    alumnos.push(nuevoAlumno);
    guardarAlumnos();
}

document.getElementById('formulario-busqueda').addEventListener('submit', function(event) {
    event.preventDefault();
    const ingresoDatos = document.getElementById('ingreso-datos').value.trim();
    if (ingresoDatos) {
        const alumnosCargados = cargarAlumnos();
        const resultados = buscarAlumno(ingresoDatos, alumnosCargados);
        mostrarResultados(resultados);
    } else {
        alert('Por favor, ingrese un ID o nombre.');
    }
});

document.getElementById('cargar-alumnos').addEventListener('click', function() {
    guardarAlumnos();
});

document.getElementById('formulario-agregar').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('nuevo-id').value.trim(), 10);
    const nombre = document.getElementById('nuevo-nombre').value.trim();
    const asistencias = parseInt(document.getElementById('nuevo-asistencias').value.trim(), 10);
    const promedio = parseFloat(document.getElementById('nuevo-promedio').value.trim());

    if (isNaN(id) || !nombre || isNaN(asistencias) || isNaN(promedio)) {
        alert('Por favor, complete todos los campos correctamente.');
        return;
    }

    agregarAlumno(id, nombre, asistencias, promedio);
    alert('Alumno/a agregado/a correctamente.');
    document.getElementById('formulario-agregar').reset();
});
