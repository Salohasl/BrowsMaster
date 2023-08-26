/* Для всплывающего окна */ 
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('nav');

menuBtn.addEventListener('click', () =>{
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});


/* Для слайд шоу МОИ РАБОТЫ*/ 
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const buttonPrev = document.querySelector('.swiper-button-prev');
const buttonNext = document.querySelector('.swiper-button-next');
const slide = document.querySelector('.swiper');

buttonPrev.addEventListener('mouseover', function(){
  slide.classList.add('color');
  buttonPrev.addEventListener('mouseout', function(){
    slide.classList.remove('color');
  })
})
buttonNext.addEventListener('mouseover', function(){
  slide.classList.add('color');
  buttonNext.addEventListener('mouseout', function(){
    slide.classList.remove('color');
  })
})