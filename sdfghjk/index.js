// Initialize the Swiper for automatic sliding and coverflow effect
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',  // Adds the coverflow effect
    grabCursor: true,     // Enable the grab cursor style
    centeredSlides: true, // Center the active slide
    loop: true,           // Loop the slides infinitely
    slidesPerView: 'auto', // Automatically adjust the number of slides
    autoplay: {
      delay: 2500,         // Auto slide every 2.5 seconds
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // Add click animation on images
  const images = document.querySelectorAll('.tranding-slide-img img');

  images.forEach(img => {
    img.addEventListener('click', function () {
      // Add the 'clicked' class to the image to trigger the CSS animation
      img.classList.add('clicked');

      // Remove the class after the animation duration (0.3s) to reset the image
      setTimeout(() => {
        img.classList.remove('clicked');
      }, 300);
    });
  });
