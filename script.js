const buscador = document.getElementById("buscador");
const contenedor = document.querySelector(".buscador-container");
const productos = document.querySelectorAll(".producto");

let activo = false;

contenedor.addEventListener("mouseenter", () => {
  contenedor.classList.add("active");
  activo = true;
});

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  productos.forEach(p => {
    const nombre = p.dataset.nombre.toLowerCase();
    p.style.display = nombre.includes(texto) ? "block" : "none";
  });
});

buscador.addEventListener("blur", () => {
  if (buscador.value === "") {
    activo = false;
    setTimeout(() => {
      if (!activo) contenedor.classList.remove("active");
    }, 1000);
  }
});

const buscador = document.getElementById("buscador");
const contenedor = document.querySelector(".buscador-container");
const productos = document.querySelectorAll(".producto");

let activo = false;

contenedor.addEventListener("mouseenter", () => {
  contenedor.classList.add("active");
  activo = true;
});

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  productos.forEach(p => {
    const nombre = p.dataset.nombre.toLowerCase();
    p.style.display = nombre.includes(texto) ? "block" : "none";
  });
});

buscador.addEventListener("blur", () => {
  if (buscador.value === "") {
    activo = false;
    setTimeout(() => {
      if (!activo) contenedor.classList.remove("active");
    }, 1000);
  }
});

const lupa = document.querySelector(".icono-lupa");

lupa.addEventListener("click", () => {
  buscador.focus();
  contenedor.classList.add("active");
});

// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");

  // Encuentra todas las imágenes de productos
  const imagenes = document.querySelectorAll(".imagen-producto");

  imagenes.forEach((img) => {
    // Verifica si la imagen es del HONOR X6C
    if (img.src.includes("honor-x6c")) {
      img.style.cursor = "pointer"; // Cambia el cursor
      img.addEventListener("click", () => {
        modal.style.display = "block";
      });
    }
  });

  // Cerrar el modal al hacer clic en la X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar el modal al hacer clic fuera del contenido
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
