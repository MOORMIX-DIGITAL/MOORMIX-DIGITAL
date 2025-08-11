// Lista de productos
const productos = [
  {
    nombre: "Samsung Galaxy A06",
    precio: "$129.99",
    descripcion: "Smartphone con pantalla HD+, cámara dual y batería de larga duración.",
    imagen: "imágenes:samsung-galaxy-a06.jpg"
  },
  {
    nombre: "Auriculares Bluetooth MOORMIX",
    precio: "$24.99",
    descripcion: "Auriculares inalámbricos con sonido envolvente y batería de larga duración.",
    imagen: "imagenes/auriculares-bluetooth.jpg"
  }
  // Puedes seguir agregando más productos aquí
];

// Crear contenedor y mostrar productos
const contenedor = document.createElement("div");
contenedor.id = "lista-productos";
document.body.insertBefore(contenedor, document.querySelector("footer"));

productos.forEach(producto => {
  const div = document.createElement("div");
  div.className = "producto";
  div.style.textAlign = "center";
  div.style.marginBottom = "30px";

  div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" style="margin-bottom: 10px; max-width: 200px;" />
    <h3 style="margin-top: 0;">${producto.nombre}</h3>
    <p class="descripcion">${producto.descripcion}</p>
    <p class="precio" style="font-weight: bold;">${producto.precio}</p>
    <button class="abrir-formulario">Comprar ahora</button>
  `;

  contenedor.appendChild(div);
});

// Abrir el formulario al hacer clic en "Comprar ahora"
document.querySelectorAll(".abrir-formulario").forEach(boton => {
  boton.addEventListener("click", () => {
    document.getElementById("formulario-pago").style.display = "flex";
    actualizarDatosBancarios();
  });
});

// Cerrar el formulario
document.querySelector(".cerrar").addEventListener("click", () => {
  document.getElementById("formulario-pago").style.display = "none";
});

// Mostrar datos bancarios o formulario de cliente según método de pago
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

// Eventos para actualizar contenido dinámico
document.getElementById("metodo").addEventListener("change", actualizarDatosBancarios);
document.getElementById("banco").addEventListener("change", actualizarDatosBancarios);
document.getElementById("tipo").addEventListener("change", actualizarDatosBancarios);

// Validación al enviar el formulario
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
