// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let nombresIngresados = [];

function agregarAmigo() {
    let nombre = document.querySelector('#amigo').value; // Tomar el valor del input

    if (nombre.trim() === "") {
        console.log("Por favor, ingresa un nombre");
    } else {
        if (nombresIngresados.includes(nombre)) {
            alert(`El nombre "${nombre}" ya ha sido ingresado. No se pueden repetir nombres.`);
        } else {
            // Agregar el nombre al array
            nombresIngresados.push(nombre);
            console.log(`Nombre ingresado y almacenado: ${nombre}`);

            // Mostrar el nombre en la lista usando innerHTML
            let lista = document.querySelector('#listaAmigos'); // Seleccionar la lista
            lista.innerHTML += `<li>${nombre}</li>`; // Agregar el nuevo elemento al HTML existente

            // Vaciar el campo de entrada
            document.querySelector('#amigo').value = "";
        }
    }
}

function sortearAmigo() {
    // Obtener la lista de nombres de amigos desde el HTML
    let listaElementos = document.querySelectorAll('#listaAmigos li');
    
    // Verificar si hay nombres en la lista
    if (listaElementos.length === 0) {
        document.querySelector('#resultado').innerHTML = '<li>No hay nombres para sortear.</li>';
        return;
    }

    // Convertir NodeList a un array para manipularlo
    let nombres = Array.from(listaElementos).map(item => item.textContent);

    // Generar un índice aleatorio basado en la longitud de la lista
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);

    // Obtener el nombre sorteado
    let nombreSorteado = nombres[indiceAleatorio];

    // Mostrar el resultado en el elemento #resultado
    document.querySelector('#resultado').innerHTML = `<li>Amigo secreto sorteado: ${nombreSorteado}</li>`;
}


