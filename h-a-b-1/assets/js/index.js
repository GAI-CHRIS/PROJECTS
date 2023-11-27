let menubars = document.querySelector('#menu-bars')
let navbarNav = document.querySelector('.navbar-nav')
menubars.onclick = () => {
    menubars.classList.toggle('fa-times');
    navbarNav.classList.toggle('active');
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
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
});
  
// const cols = document.querySelectorAll('.col');
// cols.forEach(cols => {
//   cols.addEventListener('mouseover', () => {
//     console.log(cols.childNodes[1].classList);
//     cols.childNodes[1].classList.add('.darken')
//   })
// })