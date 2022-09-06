const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
  },
  speed: 1000,
  parallax: true,
});
