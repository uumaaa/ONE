function encriptarTexto() {
  let textoEscrito = campoTexto.value;
  let nuevoTexto = [];
  for (let palabra of textoEscrito) {
    if (palabra === "a") nuevoTexto.push("ai");
    else if (palabra === "e") nuevoTexto.push("enter");
    else if (palabra === "i") nuevoTexto.push("imes");
    else if (palabra === "o") nuevoTexto.push("ober");
    else if (palabra === "u") nuevoTexto.push("ufat");
    else nuevoTexto.push(palabra);
  }
  resultadoTexto.innerHTML = nuevoTexto.join("");
  document.querySelector(".TextoExtra").innerHTML = "";
}
function descencriptarTexto() {
  let textoEscrito = campoTexto.value;
  let nuevoTexto = [];
  let palabra = 0;
  while (palabra < textoEscrito.length) {
    if (textoEscrito[palabra] === "a") {
      nuevoTexto.push("a");
      palabra += 2;
    } else if (textoEscrito[palabra] === "e") {
      nuevoTexto.push("e");
      palabra += 5;
    } else if (textoEscrito[palabra] === "i") {
      nuevoTexto.push("i");
      palabra += 4;
    } else if (textoEscrito[palabra] === "o") {
      nuevoTexto.push("o");
      palabra += 4;
    } else if (textoEscrito[palabra] === "u") {
      nuevoTexto.push("u");
      palabra += 4;
    } else {
      nuevoTexto.push(textoEscrito[palabra]);
      palabra++;
    }
  }
  resultadoTexto.innerHTML = nuevoTexto.join("");
  document.querySelector(".TextoExtra").innerHTML = "";
}
function copiarPortapeles() {
  navigator.clipboard
    .writeText(resultadoTexto.innerHTML)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar al portapapeles:", err);
    });
}

var campoTexto = document.getElementById("Texto");
var botonEncriptar = document.getElementById("Encriptar");
var resultadoTexto = document.getElementById("Resultado");
var botonDesencriptar = document.getElementById("Desencriptar");
var botonCopiar = document.getElementById("BotonCopiar");
botonEncriptar.addEventListener("click", encriptarTexto);
botonDesencriptar.addEventListener("click", descencriptarTexto);
botonCopiar.addEventListener("click", copiarPortapeles);
