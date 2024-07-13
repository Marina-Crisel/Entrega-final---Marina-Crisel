// ALGORITMO CON UN CONDICIONAL + CICLO //

let cantidadAlumnos = Number(prompt("Ingrese cantidad de alumnos"))
for (let i = 0; i < cantidadAlumnos; i++) {
    const nombre = prompt("Ingresar alumno/a")
    const cantidadAsistenciasHastaMayo = Number(prompt("Ingrese asistencias acumuladas hasta mayo"))
    const cantidadAsistenciasJunio = Number(prompt("Ingrese asistencias de junio"))
    const totalAsistencias = (cantidadAsistenciasHastaMayo + cantidadAsistenciasJunio)
    if (totalAsistencias === 86) {
        alert(nombre + " tiene un total de: " + totalAsistencias + " , asistencia perfecta.")
    } else if (totalAsistencias >= 50){
        alert(nombre + " tiene un total de: " + totalAsistencias + " , al límite de faltas.")
    } else
        alert(nombre + " tiene un total de: " + totalAsistencias + " , quedó libre.")
}

// ALGORITMO CON UNA FUNCIÓN //

let legajoAlumno = {
    nombre: "",
    asistencias: 0,
    promedio: 0
}

function resultadoLegajo(datos) {
    alert(`Los datos proporcionados son:
    Nombre: ${datos.nombre}
    El total de asistencias es: ${datos.asistencias}
    Su promedio final es: ${datos.promedio}`);
}

legajoAlumno.nombre = prompt("Ingrese el nombre del alumno:");
legajoAlumno.asistencias = parseInt(prompt("Ingrese el total de asistencias del alumno:"));
legajoAlumno.promedio = parseFloat(prompt("Ingrese el promedio final del alumno:"));

resultadoLegajo(legajoAlumno);