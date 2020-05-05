var swiper = new Swiper('.swiper-inicio', {
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

var swiper = new Swiper('.swiper-sistema', {
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


// scripts smooth scroll
$(".routers .servicios").click(function() {
  $('html, body').animate({
      scrollTop: $(".cards-servicios").offset().top - 70
  }, 500);
});
$(".routers .estudios").click(function() {
  $('html, body').animate({
      scrollTop: $("#estudios").offset().top - 70
  }, 500);
});
$(".routers .clientes").click(function() {
  $('html, body').animate({
      scrollTop: $("#clientes").offset().top
  }, 500);
});
$(".routers .contacto").click(function() {
  $('html, body').animate({
      scrollTop: $("#contacto").offset().top
  }, 500);
});

// Sidebar
var btnMenu = document.getElementsByClassName("openbtn");
function fromSidebar(e) {
  closeNav();
  $('html, body').animate({
    scrollTop: $(e).offset().top - 50
  }, 500);
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  btnMenu[0].style.opacity = 0;
  
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  btnMenu[0].style.opacity = 1;
}
