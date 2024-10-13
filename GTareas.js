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
