const menuButton = document.getElementById("icon");
const hr1 = document.getElementById("hr1");
const hr2 = document.getElementById("hr2");
const menu = document.getElementById("menu");
const navLogo = document.querySelector(".nav-logo");
const main = document.querySelector("main");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    main.classList.toggle("blur");
    navLogo.classList.toggle("blur");
    hr1.classList.toggle("rotated-hr1");
    hr2.classList.toggle("rotated-hr2");
});