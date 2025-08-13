
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

const sugerencias = document.getElementById("sugerencias");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  sugerencias.innerHTML = "";

  let coincidencias = [];

  productCards.forEach(card => {
    const name = card.querySelector("h2").textContent;
    if (name.toLowerCase().includes(query)) {
      coincidencias.push(name);
    }
  });

  if (query && coincidencias.length > 0) {
    coincidencias.forEach(nombre => {
      const item = document.createElement("li");
      item.textContent = nombre;
      item.style.cursor = "pointer";
item.style.padding = "8px 12px";
item.style.background = "#ffffff";
item.style.border = "1px solid #ccc";
item.style.borderRadius = "4px";
item.style.marginBottom = "4px";
item.style.transition = "background 0.3s";
item.addEventListener("mouseover", () => {
  item.style.background = "#e6f7ff";
});
item.addEventListener("mouseout", () => {
  item.style.background = "#ffffff";
});

const mensajeNoEncontrado = document.getElementById("no-result");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  let hayCoincidencias = false;

  productCards.forEach(card => {
    const name = card.querySelector("h2").textContent.toLowerCase();
    const coincide = name.includes(query);
    card.style.display = coincide ? "block" : "none";
    if (coincide) hayCoincidencias = true;
  });

  mensajeNoEncontrado.style.display = hayCoincidencias ? "none" : "block";
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
      memoria: ["$150"],
      specs: [
      "Pantalla Tipo: PLS LCD",
      "Tamaño: 6.5\"", 
      "Resolución: 720 x 1600",
      "Memoria Interna: 64 GB",
      "camara Frontal: 5 MP", 
      "Camara Trasera: 13 MP + 2 MP",
      "servicios: Reconocimiento facial",
      "adicionales: Envío gratis",
      "generales: Android 14", 
      "Procesador Octa-core"
    ]
        },
    "hot-50": {
      nombre: "Infinix Hot 50",
      memoria: ["$150"],
      specs: [
      "Pantalla Tipo: IPS LCD", 
      "Tamaño: 6.78\"", 
      "Resolución: 1080 x 2460",
      "Memoria: Interna: 128 GB",
     "Camara Frontal: 8 MP",
     "Camara Trasera: 50 MP + AI Lens",
      "Servicios: Huella digital lateral",
      "Adicionales: Envío gratis",
      "Generales: Android 13",
      "Procesador Helio G88"
        ]
        },
    "galaxy-a16": {
  nombre: "Samsung Galaxy A16",
      memoria: ["$150"],
      specs: [
  "Pantalla Tipo: PLS LCD", 
  "Tamaño: 6.5\"", 
  "Resolución: 720 x 1600",
  "Memoria Interna: 128 GB",
  "Camara Frontal: 8 MP", 
  "Camara Trasera: 50 MP + 2 MP",
  "Servicios: Reconocimiento facial",
  "Adicionales: Envío gratis",
  "Generales: Android 14", 
  "Procesador Octa-core"
  ]
},
"galaxy-a55-5g": {
  nombre: "Samsung Galaxy A55 5G",
  memoria: ["$150"],
  specs: [
  "Pantalla: Tipo: Super AMOLED", 
  "Tamaño: 6.6\"", 
  "Resolución: 1080 x 2340",
  "Memoria Interna: 256 GB",
  "Camara Frontal: 32 MP", 
  "Camara Trasera: 50 MP + 12 MP + 5 MP",
  "Servicios: Huella bajo pantalla",
  "Adicionales: Envío gratis",
  "Generales: Android 14",
  "Procesador Exynos 1480"
  ]
},
"infinix-smart-9": {
  nombre: "Infinix Smart 9",
  memoria: ["$150"],
  specs: [
  "Pantalla Tipo: IPS LCD", 
  "Tamaño: 6.6\"", 
  "Resolución: 720 x 1612",
  "Memoria Interna: 64 GB",
  "Camara Frontal: 8 MP", 
  "Trasera: 13 MP + AI Lens",
  "Servicios: Huella digital lateral",
  "Adicionales: Envío gratis",
  "Generales: Android 13", 
 "Procesador Unisoc T606"
]
},
"infinix-smart-9-hd": {
  nombre: "Infinix Smart 9 HD",
  memoria: ["$150"],
  specs: [
  "Pantalla Tipo: IPS LCD", 
  "Tamaño: 6.6\"", 
  "Resolución: 720 x 1612",
  "Memoria: Interna: 64 GB",
  "Camara: Frontal: 8 MP", 
  "Camara Trasera: 8 MP + AI Lens",
  "Servicios: Reconocimiento facial",
  "Adicionales: Envío gratis",
  "Generales: Android 13", 
  "Procesador Unisoc SC9863A"
]
},
"infinix-hot-60-pro": {
  nombre: "Infinix Hot 60 Pro",
  memoria: ["$150"],
  specs: [
  "Pantalla Tipo: IPS LCD", 
  "Tamaño: 6.78\"", 
  "Resolución: 1080 x 2460",
  "Memoria Interna: 256 GB",
  "Camara Frontal: 8 MP", 
  "Camara Trasera: 108 MP + AI Lens",
  "servicios: Huella lateral",
  "Adicionales: Envío gratis",
  "Generales: Android 14", 
  "Procesador Helio G99 Ultimate"
    ]
},
"infinix-hot-60-pro-plus": {
  nombre: "Infinix Hot 60 Pro+",
  memoria: ["$150"],
  specs: [
  "Pantalla: Tipo: IPS LCD", 
  "Tamaño: 6.78\"", 
  "Resolución: 1080 x 2460",
  "Memoria Interna: 256 GB",
  "Camara Frontal: 8 MP", 
  "Camara Trasera: 108 MP + AI Lens",
  "servicios: Huella lateral",
  "Adicionales: Envío gratis",
  "Generales: Android 14", 
  "Procesador Helio G99 Ultimate"
  ]
},
"infinix-hot-60¡": {
  nombre: "Infinix Hot 60¡",
  memoria: ["$150"],
  specs: [
  "Pantalla Tipo: IPS LCD", 
  "Tamaño: 6.78\"", 
  "Resolución: 1080 x 2460",
  "Memoria Interna: 128 GB",
  "Camara Frontal: 8 MP", 
  "Camara Trasera: 50 MP + AI Lens",
  "Servicios: Huella lateral",
  "Adicionales: Envío gratis",
  "Generales: Android 14", 
  "Procesador Helio G88"
  ]
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
    
    const specsContainer = document.getElementById("modal-specs");
specsContainer.innerHTML = ficha.specs.map(item => `<p>${item}</p>`).join("");
    
    modal.style.display = "block";
  }
});

  function mostrarFicha(modelo) {
  const ficha = fichas[modelo];
  if (ficha) {
    modalTitle.textContent = ficha.nombre;
  const img = document.querySelector(`[data-model="${modelo}"]`);
modalImage.src = img.src;
    modalPrice.textContent = ficha.memoria[0];
    modal.style.display = "block";
  }
}

document.querySelectorAll('.boton-precio').forEach(button => {
  button.addEventListener('click', function () {
    const producto = this.closest('.producto');
    const modelo = producto.querySelector('.imagen-producto').getAttribute('data-model');
    mostrarFicha(modelo);
  });
});
document.querySelectorAll(".imagen-producto").forEach(img => {
  img.addEventListener("click", () => {
    const modelo = img.dataset.model;
    const ficha = fichas[modelo];

    if (!ficha) return;

    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalPrice = document.getElementById("modal-price");
    const specsContainer = document.getElementById("modal-specs");

    modalTitle.textContent = ficha.nombre;
    modalImage.src = img.src;
    modalPrice.textContent = ficha.memoria[0];
    specsContainer.innerHTML = ficha.specs.map(item => `<p>${item}</p>`).join("");

    modal.style.display = "block";
  });
});

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.producto');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  productCards.forEach(card => {
    const name = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = name.includes(query) ? 'block' : 'none';
  });
});

(function () {
  const cart = [];

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const product = button.getAttribute('data-product');
      cart.push(product);
      alert(`${product} fue agregado al carrito.`);
      console.log('Carrito actual:', cart);
    });
  });
})();

(function () {
  const searchInput = document.getElementById('searchBar');
  if (!searchInput) return;

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
      const name = card.textContent.toLowerCase();
      card.style.display = name.includes(query) ? 'block' : 'none';
    });
  });
})();
