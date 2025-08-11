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

  if (metodo === "transferencia") {
    datos.style.display = "block";
    let cuenta = "";
    let nombre = "Michael Moran Lopez";
    let tipo = "Ahorros";
    let cedula = "1207085943";

    if (banco === "pichincha") {
      cuenta = "0036995950";
    } else if (banco === "guayaquil") {
      cuenta = "2210769474";
    }

    document.getElementById("nombre-banco").textContent = banco === "pichincha" ? "Banco Pichincha" : "Banco Guayaquil";
    document.getElementById("nombre-titular").textContent = nombre;
    document.getElementById("tipo-cuenta").textContent = tipo;
    document.getElementById("numero-cuenta").textContent = cuenta;
    document.getElementById("cedula-ruc").textContent = cedula;
  } else {
    datos.style.display = "none";
  }
}

document.getElementById("metodo").addEventListener("change", actualizarDatosBancarios);
document.getElementById("banco").addEventListener("change", actualizarDatosBancarios);
