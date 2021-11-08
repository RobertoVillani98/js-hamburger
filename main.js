const openMenu = document.querySelector(".header-right > a");
openMenu.addEventListener("click", function () {
 document.querySelector(".hamburger-menu").classList.add("active");
});

const closeMenu = document.querySelector(".close");
closeMenu.addEventListener("click", function () {
 document.querySelector(".hamburger-menu").classList.remove("active");
});
