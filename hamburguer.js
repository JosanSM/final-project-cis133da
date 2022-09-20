let hamburger = document.querySelector(".hamburguer");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    console.log('a');
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => {
    n.addEventListener("click", () => {
        console.log('b')
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
});