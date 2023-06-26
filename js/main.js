//swiper
var swiper = new Swiper(".mySwiper1", {
  loop:true,
  loopAdditionalSlides: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 화면의 넓이가 320px 이상일 때
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // 화면의 넓이가 640px 이상일 때
    640: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});


let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector(".menu");
let close = document.querySelector("#close");

menuIcon.addEventListener("click", () => {
	menu.classList.add("active");
	menuIcon.classList.add("active");
});
close.addEventListener("click", () => {
	menu.classList.remove("active");
	menuIcon.classList.remove("active");
});

//swiper2
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // 화면의 넓이가 320px 이상일 때
  320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // 화면의 넓이가 640px 이상일 때
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1200:{
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});