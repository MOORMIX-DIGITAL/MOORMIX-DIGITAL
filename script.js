document.addEventListener("DOMContentLoaded", function () {
  const productos = [
    {
      marca: "Samsung",
      nombre: "Samsung Galaxy A06",
      descripcion: "Smartphone con pantalla HD+, cámara dual y batería de larga duración.",
      precio: "$130",
      imagen: "img/samsung-a06.jpg"
    },
    {
      marca: "Samsung",
      nombre: "Samsung Galaxy A16",
      descripcion: "Auriculares inalámbricos con sonido envolvente y batería de larga duración.",
      precio: "$170",
      imagen: "img/samsung-a16.jpg"
    },
    {
      marca: "Samsung",
      nombre: "Samsung Galaxy A55 5G",
      descripcion: "Smartphone con pantalla HD+, cámara dual y batería de larga duración.",
      precio: "$387",
      imagen: "img/samsung-a55.jpg"
    },
    {
      marca: "Motorola",
      nombre: "Motorola G32",
      descripcion: "Pantalla FHD+, cámara triple y batería de 5000mAh.",
      precio: "$150",
      imagen: "img/motorola-g32.jpg"
    },
    {
      marca: "Xiaomi",
      nombre: "Xiaomi Redmi 13C",
      descripcion: "Pantalla grande, cámara de 50MP y carga rápida.",
      precio: "$120",
      imagen: "img/xiaomi-13c.jpg"
    }
  ];

  const contenedor = document.body;

  const marcas = [...new Set(productos.map(p => p.marca))];

  marcas.forEach(marca => {
    const seccion = document.createElement("section");
    const titulo = document.createElement("h2");
    titulo.textContent = marca;
    seccion.appendChild(titulo);

    productos.filter(p => p.marca === marca).forEach(producto => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "producto";

      const nombre = document.createElement("h3");
      nombre.textContent = producto.nombre;

      const descripcion = document.createElement("p");
      descripcion.textContent = producto.descripcion;

      const precio = document.createElement("p");
      precio.textContent = producto.precio;

      const boton = document.createElement("button");
      boton.textContent = "Comprar ahora";
      boton.addEventListener("click", () => mostrarNota(producto));

      tarjeta.append(nombre, descripcion, precio, boton);
      seccion.appendChild(tarjeta);
    });

    contenedor.appendChild(seccion);
  });

  function mostrarNota(producto) {
    const nota = document.createElement("div");
    nota.className = "nota";

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement("p");
    precio.textContent = producto.precio;

    const boton = document.createElement("button");
    boton.textContent = "Comprar ahora";

    const cerrar = document.createElement("span");
    cerrar.textContent = "×";
    cerrar.className = "cerrar";
    cerrar.addEventListener("click", () => nota.remove());

    nota.append(cerrar, imagen, nombre, descripcion, precio, boton);
    document.body.appendChild(nota);
  }
});
function mostrarCatalogo(marcaSeleccionada) {
  const productos = [/* tu array de productos */];
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  const productosFiltrados = productos.filter(p => p.marca === marcaSeleccionada);
  productosFiltrados.forEach(producto => {
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

