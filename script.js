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
    `;
  }
});
