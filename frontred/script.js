var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var producto = document.getElementById("producto");
var cantidad = document.getElementById("cantidad");
var llevar = document.getElementById("llevar");
var observaciones = document.getElementById("observaciones");
var mensaje = document.getElementById("mensaje");

var botonRegistrar = document.getElementById("registrar");
var botonLimpiar = document.getElementById("limpiar");
var botonMas = document.getElementById("mas");
var botonMenos = document.getElementById("menos");

botonMas.onclick = function () {
  cantidad.value = Number(cantidad.value) + 1;
};

botonMenos.onclick = function () {
  if (Number(cantidad.value) > 1) {
    cantidad.value = Number(cantidad.value) - 1;
  }
};

function borrarErrores() {
  document.getElementById("error-nombre").innerHTML = "";
  document.getElementById("error-correo").innerHTML = "";
  document.getElementById("error-producto").innerHTML = "";
  document.getElementById("error-cantidad").innerHTML = "";
  document.getElementById("error-tamano").innerHTML = "";
  mensaje.innerHTML = "";
}

function validar() {
  var esValido = true;
  borrarErrores();

  if (nombre.value.trim() === "") {
    document.getElementById("error-nombre").innerHTML = "El nombre es obligatorio.";
    esValido = false;
  }

  var textoCorreo = correo.value.trim();
  if (textoCorreo === "") {
    document.getElementById("error-correo").innerHTML = "El correo es obligatorio.";
    esValido = false;
  } else if (textoCorreo.indexOf("@") === -1 || textoCorreo.indexOf(".") === -1) {
    document.getElementById("error-correo").innerHTML = "Escribe un correo válido.";
    esValido = false;
  }

  if (producto.value === "") {
    document.getElementById("error-producto").innerHTML = "Selecciona un producto.";
    esValido = false;
  }

  if (Number(cantidad.value) < 1) {
    document.getElementById("error-cantidad").innerHTML = "La cantidad mínima es 1.";
    esValido = false;
  }

  var tamano = document.querySelector('input[name="tamano"]:checked');
  if (tamano === null) {
    document.getElementById("error-tamano").innerHTML = "Selecciona un tamaño.";
    esValido = false;
  }

  return esValido;
}

botonRegistrar.onclick = function () {
  if (validar() === true) {
    document.getElementById("formulario").submit();
  }
};

botonLimpiar.onclick = function () {
  nombre.value = "";
  correo.value = "";
  producto.value = "";
  cantidad.value = 1;
  llevar.checked = false;
  observaciones.value = "";

  var radios = document.getElementsByName("tamano");
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }

  borrarErrores();
};