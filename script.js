document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { nombre: "Samsung S23", precio: 650, imagen: "s23.jpg" },
    { nombre: "iPhone 14", precio: 800, imagen: "iphone14.jpg" }
  ];

  const contenedor = document.getElementById("productos");
  let total = 0;

  productos.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${producto.nombre}</h2>
      <img src="${producto.imagen}" alt="${producto.nombre}" width="200">
      <p>Precio: $${producto.precio}</p>
      <button class="agregar-carrito">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });

  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("agregar-carrito")) {
      const precioTexto = e.target.previousElementSibling.textContent;
      const precio = parseFloat(precioTexto.replace("Precio: $", ""));
      total += precio;
      actualizarTotal();
    }
  });

  function actualizarTotal() {
    let totalDiv = document.getElementById("total");
    if (!totalDiv) {
      totalDiv = document.createElement("div");
      totalDiv.id = "total";
      totalDiv.style.marginTop = "20px";
      totalDiv.style.fontWeight = "bold";
      document.body.appendChild(totalDiv);
    }
    totalDiv.textContent = `Total: $${total}`;
  }
});
