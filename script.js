// ✅ Estilos CSS integrados
const estilo = document.createElement("style");
estilo.textContent = `
  #menu-marcas button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }
  #menu-marcas button:hover {
    background-color: #0056b3;
  }
  #menu-marcas button.activo {
    background-color: #28a745;
  }
  .categoria h2 {
    font-size: 24px;
    margin-top: 40px;
    color: #333;
  }
  .producto {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    width: 220px;
    background-color: #f9f9f9;
    transition: transform 0.2s;
    cursor: pointer;
  }
  .producto:hover {
    transform: scale(1.05);
  }
  #detalle-producto {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  #detalle-producto .contenido {
    background: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 600px;
    text-align: center;
    position: relative;
  }
  #detalle-producto img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  #detalle-producto .cerrar-detalle {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
    background: none;
    border: none;
    color: #333;
  }
  #detalle-producto button.comprar {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }
`;
document.head.appendChild(estilo);

// ✅ Lista de productos con marca incluida
const productos = [
  { nombre: "Samsung Galaxy A06", marca: "Samsung", precio: "$130", descripcion: "Smartphone con pantalla HD+, cámara dual y batería de larga duración.", imagen: "imagen/samsung-galaxy-a06.jpg" },
  { nombre: "Samsung Galaxy A16", marca: "Samsung", precio: "$170", descripcion: "Auriculares inalámbricos con sonido envolvente y batería de larga duración.", imagen: "imagenes/auriculares-bluetooth.jpg" },
  { nombre: "Samsung Galaxy A55 5G", marca: "Samsung", precio: "$387", descripcion: "Smartphone con pantalla HD+, cámara dual y batería de larga duración.", imagen: "imagen/samsung-galaxy-a06.jpg" },
  { nombre: "Motorola G32", marca: "Motorola", precio: "$150", descripcion: "Pantalla FHD+, cámara triple y batería de 5000mAh.", imagen: "imagen/motorola-g32.jpg" },
  { nombre: "Xiaomi Redmi 13C", marca: "Xiaomi", precio: "$120", descripcion: "Pantalla grande, cámara de 50MP y carga rápida.", imagen: "imagen/xiaomi-redmi-13c.jpg" }
];

// ✅ Crear menú de navegación por marcas
const marcas = [...new Set(productos.map(p => p.marca))];
const menu = document.createElement("nav");
menu.id = "menu-marcas";
menu.style.textAlign = "center";
menu.style.margin = "20px 0";
menu.innerHTML = `<button onclick="filtrarMarca(null)" class="activo">Todos</button>` +
  marcas.map(m => `<button onclick="filtrarMarca('${m}')">${m}</button>`).join(" ");
document.body.insertBefore(menu, document.querySelector("footer"));

// ✅ Crear contenedor principal
const contenedor = document.createElement("div");
contenedor.id = "lista-productos";
document.body.insertBefore(contenedor, document.querySelector("footer"));

// ✅ Crear contenedor para detalle ampliado
const detalle = document.createElement("div");
detalle.id = "detalle-producto";
detalle.innerHTML = `
  <div class="contenido">
    <button class="cerrar-detalle">✖</button>
    <img id="detalle-imagen" src="" alt="" />
    <h2 id="detalle-nombre"></h2>
    <p id="detalle-descripcion"></p>
    <p id="detalle-precio" style="font-weight:bold;"></p>
    <button class="comprar">Comprar ahora</button>
  </div>
`;
document.body.appendChild(detalle);
document.querySelector(".cerrar-detalle").onclick = () => {
  detalle.style.display = "none";
};

// ✅ Mostrar productos agrupados por marca
function mostrarProductos(marcaSeleccionada = null) {
  contenedor.innerHTML = "";
  const marcasFiltradas = marcaSeleccionada ? [marcaSeleccionada] : marcas;

  marcasFiltradas.forEach(marca => {
    const seccion = document.createElement("div");
    seccion.className = "categoria";
    seccion.innerHTML = `<h2 style="text-align:center;">${marca}</h2>`;

    const grupo = document.createElement("div");
    grupo.className = "grupo-productos";
    grupo.style.display = "flex";
    grupo.style.flexWrap = "wrap";
    grupo.style.justifyContent = "center";
    grupo.style.gap = "20px";

    productos.filter(p => p.marca === marca).forEach(producto => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" style="margin-bottom: 10px; max-width: 200px;" />
        <h3 style="margin-top: 0;">${producto.nombre}</h3>
        <p class="precio" style="font-weight: bold;">${producto.precio}</p>
      `;
      div.onclick = () => mostrarDetalle(producto);
      grupo.appendChild(div);
    });

    seccion.appendChild(grupo);
    contenedor.appendChild(seccion);
  });
}

// ✅ Mostrar detalle ampliado
function mostrarDetalle(producto) {
  document.getElementById("detalle-imagen").src = producto.imagen;
  document.getElementById("detalle-nombre").textContent = producto.nombre;
  document.getElementById("detalle-descripcion").textContent = producto.descripcion;
  document.getElementById("detalle-precio").textContent = producto.precio;
  document.getElementById("detalle-producto").style.display = "flex";

  document.querySelector("#detalle-producto .comprar").onclick = () => {
    document.getElementById("formulario-pago").style.display = "flex";
    actualizarDatosBancarios();
    detalle.style.display = "none";
  };
}

// ✅ Función para filtrar por marca y resaltar botón activo
window.filtrarMarca = function(marca) {
  document.querySelectorAll("#menu-marcas button").forEach(btn => btn.classList.remove("activo"));
  document.querySelectorAll("#menu-marcas button").forEach(btn => {
    if ((marca === null && btn.textContent === "Todos") || btn.textContent === marca) {
      btn.classList.add("activo");
    }
  });
  mostrarProductos(marca);
};

// ✅ Mostrar todos los productos al cargar
mostrarProductos();
