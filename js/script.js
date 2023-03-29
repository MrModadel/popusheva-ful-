let links = document.querySelectorAll('.menu__link')

links.forEach((link) => {
   link.onclick = (e) => {
      e.preventDefault()
      links.forEach(x => x.classList.remove('active'))
      link.classList.add('active')
   }
})
new Swiper('.main-slider', {
   navigation: {
      nextEl: '.info-slider__next',
      prevEl: '.info-slider__prev'
   },
   loop: true,
   slidesPerView: 1,
   spaceBetween: 80,
   autoHeight: true,
});


/* --------------------------------bigSlider------------------------------- */
new Swiper('.home-slide', {
   navigation: {
      nextEl: '[data-next]',
      prevEl: '[data-prev]'
   },
   loop: true,
   slidesPerView: 1,
   spaceBetween: 160,
   autoHeight: true,
   simulateTouch: false,
});
/* --------------------------------smSlider------------------------------- */

new Swiper('.sm-slide', {
   navigation: {
      nextEl: '.sm-slider__next',
      prevEl: '.sm-slider__prev',
   },
   loop: true,
   slidesPerView: 1,
   spaceBetween: 60,
});
/* ---------------------light-slider------------------------- */
new Swiper('.light-slide', {
   navigation: {
      nextEl: '.light-slider__next',
      prevEl: '.light-slider__prev',
   },
   loop: true,
});
new Swiper('.advan__item-box', {
   slidesPerView: 1.2,
   spaceBetween: 16,
})
/* ------------------arrow-animation---------------------- */
let arrow = document.querySelector('.main-face__arrow');
function arAni(arrow) {
   setTimeout(t => {
      arrow.style.translate = '0 -7px';
      setTimeout(i => {
         arrow.style.translate = '0 7px';
         arAni(arrow)
      }, 900)
   }, 900)
}
arAni(arrow)
/* ------------------modal-video---------------------- */
let opModalVideo = document.querySelectorAll('[data-open]');
let clModalVideo = document.querySelectorAll('[data-close]');
let modalVideo = document.querySelector('.modal-video');

opModalVideo.forEach(item => {
   item.onclick = () => {
      console.log(modalVideo);
      modalVideo.classList.add('show-one', 'fade')
   }
})
clModalVideo.forEach(item => {
   item.onclick = () => {
      modalVideo.classList.remove('show-one')
   }
})
function pageScroll() {
   window.scrollTo({
      top: 795,
      behavior: "smooth",
   });
}
