document.querySelectorAll(".abrir-formulario").forEach(boton => {
  boton.addEventListener("click", () => {
    document.getElementById("formulario-pago").style.display = "flex";
  });
});

document.querySelector(".cerrar").addEventListener("click", () => {
  document.getElementById("formulario-pago").style.display = "none";
});

// Mostrar datos bancarios si se elige transferencia
document.getElementById("metodo").addEventListener("change", function () {
  const metodo = this.value;
  const datos = document.getElementById("datos-bancarios");
  if (metodo === "transferencia") {
    datos.style.display = "block";
    const banco = document.getElementById("banco").value;
    document.getElementById("nombre-banco").textContent = banco === "pichincha" ? "Banco Pichincha" : "Banco Guayaquil";
  } else {
    datos.style.display = "none";
  }
});

// Actualizar nombre del banco si se cambia
document.getElementById("banco").addEventListener("change", function () {
  const banco = this.value;
  document.getElementById("nombre-banco").textContent = banco === "pichincha" ? "Banco Pichincha" : "Banco Guayaquil";
});
