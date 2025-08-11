// Abrir el formulario al hacer clic en "Comprar ahora"
document.querySelectorAll(".abrir-formulario").forEach(boton => {
  boton.addEventListener("click", () => {
    document.getElementById("formulario-pago").style.display = "flex";
    actualizarDatosBancarios(); // Cargar datos si hay selección previa
  });
});

// Cerrar el formulario
document.querySelector(".cerrar").addEventListener("click", () => {
  document.getElementById("formulario-pago").style.display = "none";
});

// Mostrar datos bancarios o formulario de cliente según método de pago
function actualizarDatosBancarios() {
  const metodo = document.getElementById("metodo").value;
  const banco = document.getElementById("banco").value;
  const datos = document.getElementById("datos-bancarios");
  const cliente = document.getElementById("datos-cliente");

  if (metodo === "transferencia" || metodo === "deposito") {
    datos.style.display = "block";
    cliente.style.display = "none";

    let cuenta = "";
    let nombre = "Michael Moran Lopez";
    let tipoCuenta = "Ahorros";
    let cedula = "1207085943";

    if (banco === "pichincha") {
      cuenta = "0036995950";
    } else if (banco === "guayaquil") {
      cuenta = "2210769474";
    }

    document.getElementById("nombre-banco").textContent = banco === "pichincha" ? "Banco Pichincha" : "Banco Guayaquil";
    document.getElementById("nombre-titular").textContent = nombre;
    document.getElementById("tipo-cuenta").textContent = tipoCuenta;
    document.getElementById("numero-cuenta").textContent = cuenta;
    document.getElementById("cedula-ruc").textContent = cedula;
  } else if (metodo === "contraentrega") {
    datos.style.display = "none";
    cliente.style.display = "block";
  } else {
    datos.style.display = "none";
    cliente.style.display = "none";
  }
}

// Eventos para actualizar contenido dinámico
document.getElementById("metodo").addEventListener("change", actualizarDatosBancarios);
document.getElementById("banco").addEventListener("change", actualizarDatosBancarios);
document.getElementById("tipo").addEventListener("change", actualizarDatosBancarios);

// Validación al enviar el formulario
document.querySelector("form").addEventListener("submit", function(event) {
  const metodo = document.getElementById("metodo").value;
  const tipo = document.getElementById("tipo").value;
  const banco = document.getElementById("banco").value;

  if (!metodo || !tipo || !banco) {
    alert("Por favor, selecciona todas las opciones de pago antes de confirmar.");
    event.preventDefault();
    return;
  }

  if (metodo === "contraentrega") {
    const nombre = document.getElementById("nombre-cliente").value.trim();
    const telefono = document.getElementById("telefono-cliente").value.trim();
    const direccion = document.getElementById("direccion-cliente").value.trim();

    if (!nombre || !telefono || !direccion) {
      alert("Por favor, completa todos los datos del cliente para pago contraentrega.");
      event.preventDefault();
      return;
    }
  }

  alert("Compra confirmada. Gracias por tu pedido.");
  document.getElementById("formulario-pago").style.display = "none";
});
