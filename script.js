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
  }
  .producto:hover {
    transform: scale(1.05);
  }
`;
document.head.appendChild(estilo);

// ✅ Lista de productos con marca incluida
const productos = [
  {
    nombre: "Samsung Galaxy A06",
    marca: "Samsung",
    precio: "$130",
    descripcion: "Smartphone con pantalla HD+, cámara dual y batería de larga duración.",
    imagen: "imagen/samsung-galaxy-a06.jpg"
  },
  {
    nombre: "Samsung Galaxy A16",
    marca: "Samsung",
    precio: "$170",
    descripcion: "Auriculares inalámbricos con sonido envolvente y batería de larga duración.",
    imagen: "imagenes/auriculares-bluetooth.jpg"
  },
  {
    nombre: "Samsung Galaxy A55 5G",
    marca: "Samsung",
    precio: "$387",
    descripcion: "Smartphone con pantalla HD+, cámara dual y batería de larga duración.",
    imagen: "imagen/samsung-galaxy-a06.jpg"
  },
  {
    nombre: "Motorola G32",
    marca: "Motorola",
    precio: "$150",
    descripcion: "Pantalla FHD+, cámara triple y batería de 5000mAh.",
    imagen: "imagen/motorola-g32.jpg"
  },
  {
    nombre: "Xiaomi Redmi 13C",
    marca: "Xiaomi",
    precio: "$120",
    descripcion: "Pantalla grande, cámara de 50MP y carga rápida.",
    imagen: "imagen/xiaomi-redmi-13c.jpg"
  }
];

// ✅ Crear menú de navegación por marcas
const marcas = [...new Set(productos.map(p => p.marca))];
const menu = document.createElement("nav");
menu.id = "menu-marcas";
menu.style.textAlign = "center";
menu.style.margin = "20px 0";
menu.innerHTML = `<button onclick="filtrarMarca(null)">Todos</button>` +
  marcas.map(m => `<button onclick="filtrarMarca('${m}')">${m}</button>`).join(" ");
document.body.insertBefore(menu, document.querySelector("footer"));

// ✅ Crear contenedor principal
const contenedor = document.createElement("div");
contenedor.id = "lista-productos";
document.body.insertBefore(contenedor, document.querySelector("footer"));

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
      div.style.textAlign = "center";
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" style="margin-bottom: 10px; max-width: 200px;" />
        <h3 style="margin-top: 0;">${producto.nombre}</h3>
        <p class="descripcion">${producto.descripcion}</p>
        <p class="precio" style="font-weight: bold;">${producto.precio}</p>
        <button class="abrir-formulario">Comprar ahora</button>
      `;
      grupo.appendChild(div);
    });

    seccion.appendChild(grupo);
    contenedor.appendChild(seccion);
  });

  activarBotonesCompra();
}

// ✅ Función para filtrar por marca
window.filtrarMarca = function(marca) {
  mostrarProductos(marca);
};

// ✅ Mostrar todos los productos al cargar
mostrarProductos();

// ✅ Activar botones de compra
function activarBotonesCompra() {
  document.querySelectorAll(".abrir-formulario").forEach(boton => {
    boton.addEventListener("click", () => {
      document.getElementById("formulario-pago").style.display = "flex";
      actualizarDatosBancarios();
    });
  });
}

// ✅ Cerrar el formulario
document.querySelector(".cerrar").addEventListener("click", () => {
  document.getElementById("formulario-pago").style.display = "none";
});

// ✅ Mostrar datos bancarios o formulario de cliente según método de pago
function actualizarDatosBancarios() {
  const metodo = document.getElementById("metodo").value;
  const banco = document.getElementById("banco").value;
  const datos = document.getElementById("datos-bancarios");
  const cliente = document.getElementById("datos-cliente");

  if (metodo === "transferencia" || metodo === "deposito") {
    datos.style.display = "block";
    cliente.style.display = "none";
    let cuenta = "";
    let nombre = "Michael Moran Lopez";
    let tipoCuenta = "Ahorros";
    let cedula = "1207085943";

    if (banco === "pichincha") {
      cuenta = "0036995950";
    } else if (banco === "guayaquil") {
      cuenta = "2210769474";
    }

    document.getElementById("nombre-banco").textContent = banco === "pichincha" ? "Banco Pichincha" : "Banco Guayaquil";
    document.getElementById("nombre-titular").textContent = nombre;
    document.getElementById("tipo-cuenta").textContent = tipoCuenta;
    document.getElementById("numero-cuenta").textContent = cuenta;
    document.getElementById("cedula-ruc").textContent = cedula;
  } else if (metodo === "contraentrega") {
    datos.style.display = "none";
    cliente.style.display = "block";
  } else {
    datos.style.display = "none";
    cliente.style.display = "none";
  }
}

// ✅ Eventos para actualizar contenido dinámico
document.getElementById("metodo").addEventListener("change", actualizarDatosBancarios);
document.getElementById("banco").addEventListener("change", actualizarDatosBancarios);
document.getElementById("tipo").addEventListener("change", actualizarDatosBancarios);

// ✅ Validación al enviar el formulario
document.querySelector("form").addEventListener("submit", function(event) {
  const metodo = document.getElementById("metodo").value;
  const tipo = document.getElementById("tipo").value;
  const banco = document.getElementById("banco").value;

  if (!metodo || !tipo || !banco) {
    alert("Por favor, selecciona todas las opciones de pago antes de confirmar.");
    event.preventDefault();
    return;
  }

  if (metodo === "contraentrega") {
    const nombre = document.getElementById("nombre-cliente").value.trim();
    const telefono = document.getElementById("telefono-cliente").value.trim();
    const direccion = document.getElementById("direccion-cliente").value.trim();

    if (!nombre || !telefono || !direccion) {
      alert("Por favor, completa todos los datos del cliente para pago contraentrega.");
      event.preventDefault();
      return;
    }
  }

  alert("Compra confirmada. Gracias por tu pedido.");
  document.getElementById("formulario-pago").style.display = "none";
});
