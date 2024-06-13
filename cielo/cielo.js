
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





// .loginM
const wrapper = document.querySelector(".wrapper");

//PC(M-.login")
const login = document.querySelector(".submenu01 .submenu .login");
login.addEventListener("click", () => {
  wrapper.style.display = "flex";
});



// //PC(M-.ico_close02")
// const ico_closseM = document.querySelector(".ico_close02");
// ico_closseM.addEventListener("click", () => {
//   loginM.style.transform = 'translateY(-100%)';
// });



const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
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





// document.addEventListener("DOMContentLoaded", function () {
//   const tabs = document.querySelectorAll('.tab');
//   const tabContents = document.querySelectorAll('.tab-content');

//   tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//       s;
//       const tabId = tab.getAttribute('data-tab');

//       // 탭 비활성화 !!!
//       tabs.forEach(t => {
//         t.classList.remove('active');
//       });

//       // 탭 내용 비활성화 !!!
//       tabContents.forEach(content => {
//         content.classList.remove('active');
//       });

//       // 클릭한 탭 활성화 !!!
//       tab.classList.add('active');

//       //  tab-conten 활성화 !!!
//       const tabContent = document.getElementById(tabId);
//       tabContent.classList.add('active');
//     });
//   });
// });





