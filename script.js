
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

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalPrice = document.getElementById("modal-price");
  const closeBtn = document.querySelector(".close");
  
  // Encuentra todas las imágenes de productos
  const imagenes = document.querySelectorAll(".imagen-producto");

  imagenes.forEach((img) => {
    // Verifica si la imagen es del Samsung Galaxy A06
    if (img.src.includes("samsung-galaxy-a06")) {
      img.style.cursor = "pointer"; // Cambia el cursor
      img.addEventListener("click", () => {
        modal.style.display = "block";
      });
    }
  });
  
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
    },
    "galaxy-a16": {
  nombre: "Samsung Galaxy A16",
  pantalla: ["Tipo: PLS LCD", "Tamaño: 6.5\"", "Resolución: 720 x 1600"],
  memoria: ["Interna: 128 GB"],
  camara: ["Frontal: 8 MP", "Trasera: 50 MP + 2 MP"],
  servicios: ["Reconocimiento facial"],
  adicionales: ["Envío gratis"],
  generales: ["Android 14", "Procesador Octa-core"]
},
"galaxy-a55-5g": {
  nombre: "Samsung Galaxy A55 5G",
  pantalla: ["Tipo: Super AMOLED", "Tamaño: 6.6\"", "Resolución: 1080 x 2340"],
  memoria: ["Interna: 256 GB"],
  camara: ["Frontal: 32 MP", "Trasera: 50 MP + 12 MP + 5 MP"],
  servicios: ["Huella bajo pantalla"],
  adicionales: ["Envío gratis"],
  generales: ["Android 14", "Procesador Exynos 1480"]
},
"infinix-smart-9": {
  nombre: "Infinix Smart 9",
  pantalla: ["Tipo: IPS LCD", "Tamaño: 6.6\"", "Resolución: 720 x 1612"],
  memoria: ["Interna: 64 GB"],
  camara: ["Frontal: 8 MP", "Trasera: 13 MP + AI Lens"],
  servicios: ["Huella digital lateral"],
  adicionales: ["Envío gratis"],
  generales: ["Android 13", "Procesador Unisoc T606"]
},
"infinix-smart-9-hd": {
  nombre: "Infinix Smart 9 HD",
  pantalla: ["Tipo: IPS LCD", "Tamaño: 6.6\"", "Resolución: 720 x 1612"],
  memoria: ["Interna: 64 GB"],
  camara: ["Frontal: 8 MP", "Trasera: 8 MP + AI Lens"],
  servicios: ["Reconocimiento facial"],
  adicionales: ["Envío gratis"],
  generales: ["Android 13", "Procesador Unisoc SC9863A"]
},
"infinix-hot-60-pro": {
  nombre: "Infinix Hot 60 Pro",
  pantalla: ["Tipo: IPS LCD", "Tamaño: 6.78\"", "Resolución: 1080 x 2460"],
  memoria: ["Interna: 256 GB"],
  camara: ["Frontal: 8 MP", "Trasera: 108 MP + AI Lens"],
  servicios: ["Huella lateral"],
  adicionales: ["Envío gratis"],
  generales: ["Android 14", "Procesador Helio G99 Ultimate"]
},
"infinix-hot-60-pro-plus": {
  nombre: "Infinix Hot 60 Pro+",
  pantalla: ["Tipo: IPS LCD", "Tamaño: 6.78\"", "Resolución: 1080 x 2460"],
  memoria: ["Interna: 256 GB"],
  camara: ["Frontal: 8 MP", "Trasera: 108 MP + AI Lens"],
  servicios: ["Huella lateral"],
  adicionales: ["Envío gratis"],
  generales: ["Android 14", "Procesador Helio G99 Ultimate"]
},
"infinix-hot-60¡": {
  nombre: "Infinix Hot 60¡",
  pantalla: ["Tipo: IPS LCD", "Tamaño: 6.78\"", "Resolución: 1080 x 2460"],
  memoria: ["Interna: 128 GB"],
  camara: ["Frontal: 8 MP", "Trasera: 50 MP + AI Lens"],
  servicios: ["Huella lateral"],
  adicionales: ["Envío gratis"],
  generales: ["Android 14", "Procesador Helio G88"]
}
    // Agrega más modelos aquí...
  };

document.querySelectorAll(".producto").forEach(card => {
  card.style.cursor = "pointer"; // Opcional: cambia el cursor al pasar
  card.addEventListener("click", () => {
    const img = card.querySelector(".imagen-producto");
    const modelo = img.dataset.model;
    const ficha = fichas[modelo];
    if (ficha) {
      modalTitle.textContent = ficha.nombre;
      modalImage.src = img.src;
      modalPrice.textContent = ficha.memoria[0];
      modal.style.display = "block";
    }
  });
});

document.querySelectorAll('.boton-precio').forEach(button => {
  button.addEventListener('click', function () {
    const producto = this.closest('.producto');
    const modelo = producto.querySelector('.imagen-producto').getAttribute('data-model');
    mostrarFicha(modelo);
  });
});
