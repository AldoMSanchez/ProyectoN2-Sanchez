// Función para calcular los días hasta el próximo cumpleaños
function calcularDiasHastaCumpleaños(diaCumple, mesCumple) {
    const fechaActual = new Date();
    // Los meses en JavaScript están indexados desde 0 (enero) hasta 11 (diciembre)
    const fechaProximoCumple = new Date(fechaActual.getFullYear(), mesCumple - 1, diaCumple);

    // Si la fecha del próximo cumpleaños ya pasó este año, calcular para el próximo año
    if (fechaProximoCumple < fechaActual) {
        fechaProximoCumple.setFullYear(fechaActual.getFullYear() + 1);
    }

    const diferenciaMs = fechaProximoCumple - fechaActual;
    const milisegundosPorDia = 1000 * 60 * 60 * 24;
    const diasHastaCumpleaños = Math.round(diferenciaMs / milisegundosPorDia);

    return diasHastaCumpleaños;
}

// Función para mostrar un mensaje de cumpleaños
function mostrarMensajeCumpleaños(nombrePersona, diaCumple, mesCumple) {
    const diasRestantes = calcularDiasHastaCumpleaños(diaCumple, mesCumple);
    alert(`${nombrePersona}, tu cumpleaños será en ${diasRestantes} días!`);
}

// Ejemplo de uso
mostrarMensajeCumpleaños("Juan", 15, 8); // Muestra el mensaje para el cumpleaños del 15 de agosto
