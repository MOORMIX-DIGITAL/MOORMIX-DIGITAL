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

    if (e.target.id === "vaciar-carrito") {
      carrito.length = 0;
      total = 0;
      actualizarCarrito();
    }

    if (e.target.id === "finalizar-compra") {
      if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }

      let resumen = "🛍️ Resumen de tu compra:\n";
      carrito.forEach(item => {
        resumen += `- ${item.nombre}: $${item.precio}\n`;
      });
      resumen += `📦 Envío: $6.00\n`;
      resumen += `💰 Total a pagar: $${total + 6}\n\n`;

      resumen += "💳 Métodos de pago disponibles:\n";
      resumen += "1. Transferencia bancaria\n";
      resumen += "2. Contraentrega (pago al recibir)\n\n";

      resumen += "🏦 Datos para transferencia:\n";
      resumen += "Titular: Juan Pérez\n";
      resumen += "Banco: Banco Pichincha\n";
      resumen += "Cuenta: 1234567890\n";
      resumen += "Tipo: Cuenta de ahorros\n\n";

      resumen += "📲 Para coordinar el pago y envío, contáctanos por WhatsApp:\n";
      resumen += "https://wa.me/593999999999\n\n";

      alert(resumen);

      carrito.length = 0;
      total = 0;
      actualizarCarrito();
    }
  });

  function actualizarCarrito() {
    let totalDiv = document.getElementById("total");
    if (!totalDiv) {
      totalDiv = document.createElement("div");
      totalDiv.id = "total";
      totalDiv.style.marginTop = "20px";
      totalDiv.style.fontWeight = "bold";
      document.body.appendChild(totalDiv);
    }

    let lista = "<ul>";
    carrito.forEach(item => {
      lista += `<li>${item.nombre} - $${item.precio}</li>`;
    });
    lista += "</ul>";

    totalDiv.innerHTML = `
      <h3>Productos en el carrito:</h3>
      ${lista}
      <p>Total: $${total}</p>
      <button id="vaciar-carrito">Vaciar carrito</button>
      <button id="finalizar-compra">Finalizar compra</button>
    `;
  }
});
