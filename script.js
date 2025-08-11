document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { nombre: "Samsung S23", precio: 650, imagen: "s23.jpg" },
    { nombre: "iPhone 14", precio: 800, imagen: "iphone14.jpg" }
  ];

  const contenedor = document.getElementById("productos");
  let total = 0;
  const carrito = [];

  productos.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${producto.nombre}</h2>
      <img src="${producto.imagen}" alt="${producto.nombre}" width="200">
      <p>Precio: $${producto.precio}</p>
      <button class="agregar-carrito" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });

  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("agregar-carrito")) {
      const nombre = e.target.getAttribute("data-nombre");
      const precio = parseFloat(e.target.getAttribute("data-precio"));
      total += precio;
      carrito.push({ nombre, precio });
      actualizarCarrito();
    }

    if (e.target.id === "finalizar-compra") {
      mostrarResumen();
    }
  });

  function actualizarCarrito() {
    const lista = document.getElementById("carrito");
    lista.innerHTML = "";
    carrito.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} - $${item.precio}`;
      lista.appendChild(li);
    });
  }

  function mostrarResumen() {
    let resumen = "Resumen de compra:\n";
    carrito.forEach(item => {
      resumen += `- ${item.nombre}: $${item.precio}\n`;
    });
    resumen += `\nTotal: $${total}`;

    document.getElementById("resumen-compra").textContent = resumen;
    document.getElementById("modal").style.display = "block";
  }

  document.querySelector(".close").onclick = function() {
    document.getElementById("modal").style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target === document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
    }
  };
});

document.querySelectorAll(".abrir-formulario").forEach(boton => {
  boton.addEventListener("click", () => {
    document.getElementById("formulario-pago").style.display = "flex";
  });
});

document.querySelector(".cerrar").addEventListener("click", () => {
  document.getElementById("formulario-pago").style.display = "none";
});
