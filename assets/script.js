// Hamburger Menu JavaScript
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
//     });

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//     }));

const links = document.querySelectorAll('.nav__link');
const light = document.querySelector('.nav__light');

function moveLight({offsetLeft, offsetWidth}){
  light.style.left = `${offsetLeft - offsetWidth/4}px`;
}

function activeLink(linkActive){
  links.forEach(link => {
    link.classList.remove('active');
    linkActive.classList.add('active');
  })
}


links.forEach((link) => {
  link.addEventListener('click', (event) => {
    moveLight(event.target);
    activeLink(link);
  })
})