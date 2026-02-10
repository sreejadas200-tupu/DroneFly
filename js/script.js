AOS.init();

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});

// vertical-slider

// testimonials section

var mySwiper = new Swiper(".left-side-cntn", {
  direction: "vertical",
  // effect: "slide",
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    reverseDirection: true,
    disableOnInteraction: false,
  },
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   centeredSlides: true,
//   spaceBetween: 30,
//   loop: true,

//   simulateTouch: true,
//   allowTouchMove: true,
//   grabCursor: true,
//   touchStartPreventDefault: false,
//   touchMoveStopPropagation: false,
// });

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    allowTouchMove:true,
  });
});
