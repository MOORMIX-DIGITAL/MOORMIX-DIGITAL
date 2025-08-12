
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
    // lógica para mostrar el modal
  });
});
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-price").textContent = price;
    document.getElementById("modal").style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalPrice = document.getElementById("modal-price");
  const closeBtn = document.querySelector(".close");

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

  document.querySelectorAll(".imagen-producto").forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      const modelo = img.dataset.model;
      const ficha = fichas[modelo];

      if (ficha) {
        modalTitle.textContent = ficha.nombre;
        modalImage.src = img.src;
        modalPrice.textContent = ficha.memoria[0]; // Puedes mostrar más datos si quieres
        modal.style.display = "block";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
