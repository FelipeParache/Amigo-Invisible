// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
document.getElementById("amigo").setAttribute("enabled", false);

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo == "") {
    alert("Error, debe ingresar un nombre");
  } else {
    amigos.push(amigo);
    limpiarCaja();
    agregarAmigos();
  }

}

function agregarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let amigo of amigos) {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("¡No hay amigos para sortear!");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

function limpiarCaja() {
  document.getElementById("amigo").value = "";
}
