// Lee el id del pedido de la URL (resumen.html?id=5) y trae los datos de la BD
var id = new URLSearchParams(window.location.search).get("id");
var aviso = document.getElementById("aviso");

function poner(idCampo, texto) {
  // textContent evita que se interprete HTML escrito por el cliente
  document.getElementById(idCampo).textContent = texto;
}

if (id === null) {
  aviso.textContent = "No se indicó el pedido a mostrar.";
} else {
  fetch("/pedido/" + encodeURIComponent(id))
    .then(function (respuesta) {
      if (!respuesta.ok) {
        throw new Error("No se encontró el pedido.");
      }
      return respuesta.json();
    })
    .then(function (pedido) {
      poner("cliente", pedido.cliente);
      poner("correo", pedido.correo);
      poner("producto", pedido.producto);
      poner("cantidad", pedido.cantidad);
      poner("tamano", pedido.tamanio);
      poner("llevar", pedido.llevar);
      poner("observaciones", pedido.observaciones || "Sin observaciones");
    })
    .catch(function (error) {
      aviso.textContent = error.message;
    });
}
