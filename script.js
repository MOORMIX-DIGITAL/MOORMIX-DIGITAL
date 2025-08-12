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

document.querySelectorAll(".producto").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h2").textContent;
    const imageSrc = card.querySelector("img").src;
    const price = card.querySelector(".precio").textContent;

    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-price").textContent = price;

    document.getElementById("modal").style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");
  const closeBtn = modal.querySelector(".close");

  // Fichas técnicas por modelo
  const fichas = {
    "galaxy-a06": {
      nombre: "Samsung Galaxy A06",
      pantalla: ["Tipo: PLS LCD", "Tamaño: 6.5\"", "Resolución: 720 x 1600"],
      memoria: ["Interna: 64 GB"],
      camara: ["Frontal: 5 MP", "Trasera: 13 MP + 2 MP"],
      servicios: ["Reconocimiento facial"],
      adicionales: ["Envío gratis"],
      generales: ["Android 14", "Procesador Octa-core"]
    },
    "hot-50": {
      nombre: "Infinix Hot 50",
      pantalla: ["Tipo: IPS LCD", "Tamaño: 6.78\"", "Resolución: 1080 x 2460"],
      memoria: ["Interna: 128 GB"],
      camara: ["Frontal: 8 MP", "Trasera: 50 MP + AI Lens"],
      servicios: ["Huella digital lateral"],
      adicionales: ["Envío gratis"],
      generales: ["Android 13", "Procesador Helio G88"]
    }
    // Agrega más modelos aquí...
  };

  // Evento para abrir el modal
  document.querySelectorAll(".imagen-producto").forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      const modelo = img.dataset.model;
      const ficha = fichas[modelo];

      if (ficha) {
        modalContent.innerHTML = `
          <span class="close">&times;</span>
          <h2>Ficha Técnica: ${ficha.nombre}</h2>
          <h3>Pantalla</h3><ul>${ficha.pantalla.map(item => `<li>${item}</li>`).join("")}</ul>
          <h3>Memoria</h3><ul>${ficha.memoria.map(item => `<li>${item}</li>`).join("")}</ul>
          <h3>Cámara</h3><ul>${ficha.camara.map(item => `<li>${item}</li>`).join("")}</ul>
          <h3>Servicios</h3><ul>${ficha.servicios.map(item => `<li>${item}</li>`).join("")}</ul>
          <h3>Adicionales</h3><ul>${ficha.adicionales.map(item => `<li>${item}</li>`).join("")}</ul>
          <h3>Generales</h3><ul>${ficha.generales.map(item => `<li>${item}</li>`).join("")}</ul>
        `;
        modal.style.display = "block";
      }
    });
  });

  // Cerrar el modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
