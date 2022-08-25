/**
 *  Declaro las arreglos globales
 */
var arrLlaves = ["ai", "enter", "imes", "ober", "ufat"];
var arrLlaves2 = ["a", "e", "i", "o", "u"];
var arrCadena = [];
/**
  * enlazo los elementos html a utilizar
  * las declaro como constantes
  */
const cadenaEntrada = document.getElementById("texto-entrada");
const boxSalida = document.getElementById("box-salida");
const cadenaSalida = document.getElementById("texto-salida");
const tipoOperacion = document.getElementById("tipo-operacion");
const botones = document.querySelectorAll("button");
 // oculto el textaarea de salida
cadenaSalida.style.visibility = "hidden";
 //pongo el foco en el textarea de entrada
document.getElementById("texto-entrada").focus();

function encriptar() {
  cadenaEntrada.value.toLowerCase();

  if (cadenaEntrada.value == "" || cadenaEntrada.value.length == 0) {
    alert("Debe ingresar un texto");
  } else {
    var arrCadena = cadenaEntrada.value.split("");

    arrCadena.forEach((caracter, index) => {
      arrLlaves2.forEach((elemento, i) => {
        if (elemento == caracter) arrCadena[index] = arrLlaves[i];
      });
    });

    if (botones[3].disabled) activarBotones();

    animacion("Texto Encriptado");
    cadenaSalida.value = arrCadena.join("");
  }
};

function desencriptar() {
  var regx;
  if (cadenaEntrada.value == "" || cadenaEntrada.value.length == 0) {
    alert("Debe ingresar un texto");
  } else {
    arrLlaves.forEach((elemento, indice) => {
      regx = new RegExp(elemento, "gm");
      cadenaEntrada.value = cadenaEntrada.value.replace(regx, arrLlaves2[indice]);
    });
    animacion("Texto Desencriptado");
    if (botones[3].disabled) activarBotones();
    cadenaSalida.value = cadenaEntrada.value;
  }
};

function copiar() {
  cadenaEntrada.value = "";
  cadenaSalida.select();
  navigator.clipboard.writeText(cadenaSalida.value);
  cadenaEntrada.focus();
  alert("Texto copiado!");
};

function limpiar() {
  tipoOperacion.innerHTML = "Resultado";
  cadenaSalida.value = "";
  cadenaSalida.style.visibility = "hidden";
  activarBotones();
  cadenaEntrada.value = "";
  cadenaEntrada.focus();
};

function activarBotones() {
  botones[2].disabled = !botones[2].disabled;
  botones[3].disabled = !botones[3].disabled;
};

function animacion(text) {
  cadenaSalida.style.visibility = "hidden";
  boxSalida.style.backgroundImage = "url(./img/giphy.gif)";
  boxSalida.style.backgroundRepeat = "no-repeat";
  boxSalida.style.backgroundSize = "cover";
  setTimeout(() => {
    boxSalida.style.backgroundImage = "url(./img/fondo.jpg)";
    boxSalida.style.backgroundRepeat = "no-repeat";
    boxSalida.style.backgroundSize = "cover";
    tipoOperacion.innerHTML = text;
    cadenaSalida.style.visibility = "visible";
  }, 1500);
};