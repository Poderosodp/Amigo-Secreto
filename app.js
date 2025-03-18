// Array para guardar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Capturar el campo de entrada
    const nombre = input.value.trim(); // Eliminar espacios adicionales

    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Validar entrada vacía
    } else {
        amigos.push(nombre); // Agregar nombre al array
        actualizarListaAmigos(); // Mostrar nombres en la lista
        input.value = ""; // Limpiar el campo de entrada
    }
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo; // Agregar el nombre del amigo
        lista.appendChild(li); // Añadir elemento a la lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear."); // Validar lista vacía
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Índice aleatorio
        const amigoSorteado = amigos[indiceAleatorio];
        mostrarResultado(amigoSorteado); // Mostrar el resultado
    }
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: ${amigo}!</li>`; // Actualizar contenido
}

// Función para resetear todo
function resetearTodo() {
    amigos = []; // Vaciar el array de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    const input = document.getElementById('amigo');

    listaAmigos.innerHTML = ""; // Limpiar la lista visual
    resultado.innerHTML = ""; // Limpiar el resultado del sorteo
    input.value = ""; // Limpiar el campo de entrada

    alert("Ingresa nueva lista");
}