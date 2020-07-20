let hamburgerBtn = document.querySelector("logo");
let navList = document.querySelector("flex-nav");

hamburgerBtn.addEventListener("click", function () {
  navList.classList.toggle("showing");
});
