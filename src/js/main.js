let hamburgerBtn = document.querySelector(".hamburger-menu");
let navList = document.querySelector(".flex-nav");

hamburgerBtn.addEventListener("click", function () {
  navList.classList.toggle("showing");
});
