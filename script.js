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
