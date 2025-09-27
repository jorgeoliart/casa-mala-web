import './style.css'

/* ============================================= */
/*          LÓGICA DEL FORMULARIO DE CONTACTO    */
/* ============================================= */

// Función auto-ejecutable.
(() => {
  const form = document.querySelector('#contact-form');
  // Si no hay formulario, no hagas nada.
  if (!form) return;

  form.addEventListener('submit', (event) => {
    // 1. Previene el comportamiento por defecto del formulario (que es recargar la página)
    event.preventDefault();

    // 2. Simulación de envío de datos.
    // En un proyecto real, aquí es donde enviarías los datos a un servidor.
    // Por ahora, solo mostraremos un mensaje de éxito.
    
    // Opcional: Muestra los datos en la consola del navegador para ver que se capturaron bien.
    const formData = new FormData(form);
    console.log('Datos del formulario capturados:');
    for (let [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }

    // 3. Muestra un mensaje de confirmación
    const formContainer = form.parentElement;
    form.style.display = 'none'; // Oculta el formulario

    const successMessage = document.createElement('p');
    successMessage.textContent = '¡Gracias por tu consulta! Nos pondremos en contacto contigo a la brevedad.';
    successMessage.classList.add('success-message'); // Le añadimos una clase para darle estilo
    formContainer.appendChild(successMessage);
  });
})();
