// * ===== Slider
(function slider() {
  const sliderEl = document.querySelector('.hero');
  new Swiper(sliderEl, {
    slidesPerView: 1,
    effect: 'fade',
    navigation: {
      nextEl: '.hero .swiper-button-next',
      prevEl: '.hero .swiper-button-prev',
    },
  });
})();

(function showImg() {
  const heroBlock = document.querySelector('.hero');
  const imgs = heroBlock.querySelectorAll('.hero__img');

  heroBlock.addEventListener('mouseover', (e) => {
    let number = e.target.dataset.num;

    if (number) {
      document
        .querySelector(`.hero__img[data-num="${number}"]`)
        .classList.add('active');
    } else {
      imgs.forEach((img) => {
        img.classList.remove('active');
      });
    }
  });
})();
