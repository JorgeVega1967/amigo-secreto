// array que almacenará los nombres de los amigos ingresados
let amigos = [];

// función para limpiar la caja donde se introducen los nombres de los amigos
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// función que asigna texto a un elemento de la página HTML
function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// función que muestra en HTML la lista de amigos cada vez que se ingresa un nuevo nombre
function actualizarListaAmigos()
{
    const lista = document.getElementById("listaAmigos"); // Obtenemos la etiqueta <ul>
    lista.innerHTML = ""; 
    // Itera sobre el array y crea un <li> para cada elemento
    amigos.forEach(item => {
      // Crea un nuevo elemento <li>
      const nuevoLi = document.createElement("li");
      // Le asigna el texto del array al nuevo <li>
      nuevoLi.textContent = item;
      // Añade el nuevo <li> a la lista <ul>
      lista.appendChild(nuevoLi);
    });
}

// función que agrega un nuevo nombre de amigo al array amigos
function agregarAmigo()
{
    let nuevoAmigo = document.getElementById('amigo').value;
    if ((amigos.includes(nuevoAmigo))||(nuevoAmigo.trim()=="")) {
        let mensaje = nuevoAmigo.trim()=="" ? "Por favor, inserte un nombre." : "Nombre de amigo ingresado ya se encuentra en la lista";
        alert(mensaje);
    }
    else {
        amigos.push(nuevoAmigo);
    }
    console.log(amigos);
    actualizarListaAmigos();
    limpiarCaja();
    asignarTextoElemento('h1',`Amigo Secreto`);
}

// función que elige de manera aleatoria el amigo secreto
function sortearAmigo()
{
    if (amigos.length != 0)
    {
        numeroDeAmigos=amigos.length;
        let enteroAleatorio = Math.floor(Math.random() * numeroDeAmigos);
        asignarTextoElemento('h1',`Amigo Secreto: ${amigos[enteroAleatorio]}`);
    }
    limpiarCaja();
}
