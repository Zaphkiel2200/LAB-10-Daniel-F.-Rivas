class Tarea {
    constructor(nombre, estado = 'pendiente') {
        this.nombre = nombre;
        this.estado = estado;
    }
}

let tareas = [];

function agregarTarea() {
    const inputTarea = document.getElementById('nueva-tarea');
    const nombreTarea = inputTarea.value.trim();
    if (nombreTarea) {
        const nuevaTarea = new Tarea(nombreTarea);
        tareas.push(nuevaTarea);
        inputTarea.value = '';
        actualizarUI();
    }
}

function moverTarea(index, nuevoEstado) {
    if (
        (tareas[index].estado === 'pendiente' && nuevoEstado === 'haciendo') ||
        (tareas[index].estado === 'haciendo' && (nuevoEstado === 'pendiente' || nuevoEstado === 'completada'))
    ) {
        tareas[index].estado = nuevoEstado;
        actualizarUI();
    }
}

function actualizarUI() {
    const columnas = {
        pendiente: document.getElementById('pendiente'),
        haciendo: document.getElementById('haciendo'),
        completada: document.getElementById('completada')
    };

    for (const estado in columnas) {
        columnas[estado].innerHTML = `<h2>${estado.charAt(0).toUpperCase() + estado.slice(1)}</h2>`;
    }
