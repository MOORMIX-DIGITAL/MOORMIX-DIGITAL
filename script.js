document.querySelectorAll(".abrir-formulario").forEach(boton => {
  boton.addEventListener("click", () => {
    document.getElementById("formulario-pago").style.display = "flex";
  });
});

document.querySelector(".cerrar").addEventListener("click", () => {
  document.getElementById("formulario-pago").style.display = "none";
});

// Mostrar datos bancarios si se elige transferencia
function actualizarDatosBancarios() {
  const metodo = document.getElementById("metodo").value;
  const banco = document.getElementById("banco").value;
  const datos = document.getElementById("datos-bancarios");

  // Mostrar datos bancarios solo si el método es transferencia o depósito
  if (metodo === "transferencia" || metodo === "deposito") {
    datos.style.display = "block";

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
  } else {
    datos.style.display = "none";
  }
}

document.getElementById("metodo").addEventListener("change", actualizarDatosBancarios);
document.getElementById("banco").addEventListener("change", actualizarDatosBancarios);

document.querySelector("form").addEventListener("submit", function(event) {
  const metodo = document.getElementById("metodo").value;
  const tipo = document.getElementById("tipo").value;
  const banco = document.getElementById("banco").value;

  if (!metodo || !tipo || !banco) {
    alert("Por favor, selecciona todas las opciones de pago antes de confirmar.");
    event.preventDefault(); // Evita que se envíe el formulario
  }
  else {
  alert("Compra confirmada. Gracias por tu pedido.");
  document.getElementById("formulario-pago").style.display = "none";
}
});
