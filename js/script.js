

// const reviewswiper = new swiper('.reviewswiper' , {
//      // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// })


// Initialize Swiper
const swiper = new Swiper(".marquee-swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 2000, // smoother marquee feel
  autoplay: {
    delay: 0,
    disableOnInteraction: false, // allows autoplay to continue after hover
  },
  loop: true,
  slidesPerView: 'auto',
  allowTouchMove: false,
});

// Pause on hover
const marqueeEl = document.querySelector('.marquee-swiper');

marqueeEl.addEventListener('mouseenter', () => {
  swiper.autoplay.stop(); // ✅ Corrected this
});

marqueeEl.addEventListener('mouseleave', () => {
  swiper.autoplay.start(); // ✅ And this
});

