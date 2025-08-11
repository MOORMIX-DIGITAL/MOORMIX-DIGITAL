const productos = [
  { marca: "Samsung", nombre: "Galaxy A06", descripcion: "Pantalla HD+, cámara dual", precio: "$130", imagen: "img/samsung-a06.jpg" },
  { marca: "Infinix", nombre: "Infinix Hot 30", descripcion: "Pantalla grande, batería potente", precio: "$110", imagen: "img/infinix-hot30.jpg" },
  { marca: "Redmi", nombre: "Redmi 13C", descripcion: "Cámara 50MP, carga rápida", precio: "$120", imagen: "img/redmi-13c.jpg" },
  { marca: "Tecno", nombre: "Tecno Spark 10", descripcion: "Diseño moderno, buen rendimiento", precio: "$115", imagen: "img/tecno-spark10.jpg" },
  { marca: "ZTE", nombre: "ZTE Blade A31", descripcion: "Compacto y económico", precio: "$95", imagen: "img/zte-a31.jpg" }
];

let productosFiltrados = [];

function mostrarCatalogo(marcaSeleccionada) {
  productosFiltrados = productos.filter(p => p.marca === marcaSeleccionada);
  renderizarCatalogo(productosFiltrados);
}

function filtrarProductos() {
  const texto = document.getElementById("buscar").value.toLowerCase();
  const filtrados = productosFiltrados.filter(p =>
    p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto)
  );
  renderizarCatalogo(filtrados);
}

function renderizarCatalogo(lista) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  lista.forEach(producto => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "producto";
    tarjeta.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p><strong>${producto.precio}</strong></p>
      <button>Comprar ahora</button>
    `;
    catalogo.appendChild(tarjeta);
  });
}

function abrirCatalogo(marca) {
  window.location.href = `catalogos/${marca}.html`;
}

function deslizarMarcas(direccion) {
  const contenedor = document.getElementById("marcasContainer");
  const marca = contenedor.querySelector(".marca");
  const desplazamiento = marca.offsetWidth + 40; // ancho + espacio
  contenedor.scrollBy({
    left: direccion * desplazamiento,
    behavior: "smooth"
  });
}

let intervaloCarrusel;

function iniciarCarrusel() {
  intervaloCarrusel = setInterval(() => {
    const contenedor = document.getElementById("marcasContainer");
    const maxScroll = contenedor.scrollWidth - contenedor.clientWidth;
    if (contenedor.scrollLeft >= maxScroll) {
      contenedor.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      deslizarMarcas(1);
    }
  }, 3000); // cada 3 segundos
}

function detenerCarrusel() {
  clearInterval(intervaloCarrusel);
}

window.addEventListener("load", iniciarCarrusel);

const marcasContainer = document.getElementById("marcasContainer");
marcasContainer.addEventListener("mouseenter", detenerCarrusel);
marcasContainer.addEventListener("mouseleave", iniciarCarrusel);

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}
