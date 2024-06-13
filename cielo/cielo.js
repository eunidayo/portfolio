
// #menu
const menu = document.querySelector("#menu");

// MOBILE(H-.ico_menu)
const ico_menu_H = document.querySelector(".ico_menu");
ico_menu_H.addEventListener("click", () => {
  menu.style.transform = 'translateX(0%)';
});

// MOBILE(H-.ico_close)
const ico_close_H = document.querySelector(".ico_close");
ico_close_H.addEventListener("click", () => {
  // menu.classList.toggle("show-menu");
  menu.style.transform = 'translateX(-100%)';
});



// .navSearch 
const navsearch = document.querySelector(".navSearch");

// PC(N-.ico_search)
const ico_search_N = document.querySelector(".submenu03 .ico_search");
ico_search_N.addEventListener("click", () => {
  navsearch.style.display = "flex";
});

// MOBILE(N-.ico_search)
const ico_search = document.querySelector(".submenu01 .ico_search");
ico_search.addEventListener("click", () => {
  navsearch.style.display = "flex";
});

//PC, MOBILE(N-.ico_close01")
const ico_close = document.querySelector(".ico_close01");
ico_close.addEventListener("click", () => {
  navsearch.style.transform = 'translateY(-100%)';
});



// sec01
var swiper = new Swiper(".mySwiper", {
  zoom: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});



// sec02
var swiper = new Swiper(".sec02mySwiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  breakpoints: {
    799: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1020: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
  freeMode: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
  }
});



const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});




// .loginM
const wrapper = document.querySelector(".wrapper");

//PC(M-.login")
const login = document.querySelector(".submenu01 .submenu .login");
login.addEventListener("click", () => {
  wrapper.style.display = "flex";
});

const ico_close02 = document.querySelector(".wrapper .ico_close02");
ico_close02.addEventListener("click", () => {
  wrapper.style.transform = 'translateY(-100%)';
});

const ico_close03 = document.querySelector(".wrapper .ico_close03");
ico_close03.addEventListener("click", () => {
  wrapper.style.transform = 'translateY(-100%)';
});


//MOBILE(M-.login")
const login02 = document.querySelector(".submenu02 .login02");
login02.addEventListener("click", () => {
  wrapper.style.display = "flex";
});






















