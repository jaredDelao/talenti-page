var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
    }
});

var swiper2 = new Swiper('.swiper-clientes', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.pagination-clientes',
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
    }
});