new Swiper(".swiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 7,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
