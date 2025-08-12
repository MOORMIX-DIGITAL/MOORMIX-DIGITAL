document.getElementById('contract-upload').addEventListener('submit', function(e) {
  e.preventDefault();

  alert("Documentos enviados. Te contactaremos por WhatsApp para verificar identidad y firma.");

  const numeroVendedor = "593XXXXXXXX"; // Reemplaza con tu número de WhatsApp
  const mensaje = "Nuevo contrato físico subido con foto del cliente. Verifica identidad y firma.";
  window.open(`https://wa.me/${numeroVendedor}?text=${encodeURIComponent(mensaje)}`, '_blank');
});
