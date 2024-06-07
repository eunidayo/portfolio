
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
    800: {
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



ico_menu.addEventListener("click", () => {
  document.
});


document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      s;
      const tabId = tab.getAttribute('data-tab');

      // 탭 비활성화 !!!
      tabs.forEach(t => {
        t.classList.remove('active');
      });

      // 탭 내용 비활성화 !!!
      tabContents.forEach(content => {
        content.classList.remove('active');
      });

      // 클릭한 탭 활성화 !!!
      tab.classList.add('active');

      //  tab-conten 활성화 !!!
      const tabContent = document.getElementById(tabId);
      tabContent.classList.add('active');
    });
  });
});





