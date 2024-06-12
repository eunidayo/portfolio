// #menu - H
const menu = document.querySelector("#menu");

const ico_menu_H = document.querySelector(".ico_menu");
ico_menu_H.addEventListener("click", () => {
  // menu.classList.toggle("show-menu");
  menu.style.transform = 'translateX(0%)';
});
const ico_close_H = document.querySelector(".ico_close");
ico_close_H.addEventListener("click", () => {
  // menu.classList.toggle("show-menu");
  menu.style.transform = 'translateX(-100%)';
});



const navsearch = document.querySelector(".navSearch");

const ico_search_N = document.querySelector(".submenu03 .ico_search");
ico_search_N.addEventListener("click", () => {
  navsearch.style.display = "flex";
});

const ico_close = document.querySelector(".ico_close01");
ico_close.addEventListener("click", () => {
  navsearch.style.transform = 'translateY(-100%)';
});


const ico_search = document.querySelector(".submenu01 .ico_search");
ico_search.addEventListener("click", () => {
  navsearch.style.display = "flex";
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





