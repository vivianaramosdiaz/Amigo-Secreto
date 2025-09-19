const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const btnAgregar = document.getElementById("btnAgregar");
const btnSortear = document.getElementById("btnSortear");

let amigos = [];
   
     function agregarAmigo() {
 const nombre = inputAmigo.value.trim();
    if (nombre !== "") {
        amigos.push(nombre); 
        mostrarLista();
        inputAmigo.value = "";
        resultado.innerHTML = ""; // limpiar resultado
    } else {
        alert("⚠️ Debes escribir un nombre antes de añadir.");
    }
}


function mostrarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const indice = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `🎉 El nombre sorteado es: <strong>${amigos[indice]}</strong>`;
    } else {
        resultado.innerHTML = "⚠️ Agrega al menos un nombre para sortear.";
    }
}

btnAgregar.addEventListener("click", agregarAmigo);
btnSortear.addEventListener("click", sortearAmigo);
