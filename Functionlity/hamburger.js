const hamburger = document.querySelector(".hamburger");
const em = document.querySelector(".em");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    em.classList.toggle("active");
}