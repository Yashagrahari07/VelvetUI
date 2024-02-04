// Navbar Responsive Script
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

//Accordian Functioning
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

//Toggler
const togCont = document.querySelector(".toggle-container");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => togCont.classList.toggle("dark"));
toggle.addEventListener("click", () => toggle.classList.toggle("active"));

//Carousel
let currentSlide = 1;

function changeSlide(n) {
  showSlide(currentSlide += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  if (n > slides.length) {
    currentSlide = 1;
  }
  if (n < 1) {
    currentSlide = slides.length;
  }
  const translateValue = -100 * (currentSlide - 1) + '%';
  document.querySelector('.carousel-wrapper').style.transform = 'translateX(' + translateValue + ')';
}
