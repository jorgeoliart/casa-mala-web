import './style.css'

/* ============================================= */
/*          LÓGICA DEL CARRUSEL DE FOTOS         */
/* ============================================= */

// Función auto-ejecutable para no mezclar variables con el resto del código.
(() => {
  const carouselTrack = document.querySelector('.carousel-track');
  // Si no hay carrusel en la página, no hagas nada.
  if (!carouselTrack) return;

  const slides = Array.from(carouselTrack.children);
  const nextButton = document.querySelector('.carousel-button.next');
  const prevButton = document.querySelector('.carousel-button.prev');

  // Obtenemos el ancho de una diapositiva (slide)
  const slideWidth = slides[0].getBoundingClientRect().width;

  // 1. Organiza las diapositivas una al lado de la otra
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };
  slides.forEach(setSlidePosition);

  // Función para mover el carrusel
  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  }
  
  // 2. Al hacer clic en la flecha derecha, muévete a la siguiente diapositiva
  nextButton.addEventListener('click', e => {
    const currentSlide = carouselTrack.querySelector('.current-slide') || slides[0];
    let nextSlide = currentSlide.nextElementSibling;
    // Si es la última, vuelve a la primera (efecto loop)
    if (!nextSlide) {
      nextSlide = slides[0];
    }
    moveToSlide(carouselTrack, currentSlide, nextSlide);
  });

  // 3. Al hacer clic en la flecha izquierda, muévete a la diapositiva anterior
  prevButton.addEventListener('click', e => {
    const currentSlide = carouselTrack.querySelector('.current-slide') || slides[0];
    let prevSlide = currentSlide.previousElementSibling;
    // Si es la primera, ve a la última (efecto loop)
    if (!prevSlide) {
      prevSlide = slides[slides.length - 1];
    }
    moveToSlide(carouselTrack, currentSlide, prevSlide);
  });

  // Inicializa la primera diapositiva como la actual
  slides[0].classList.add('current-slide');

})();


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
