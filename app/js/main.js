$(function () {});

window.addEventListener("DOMContentLoaded", function () {
  const socialMenu = document.querySelector(".social-menu");
  const toggleButton = document.querySelector(".toggle-menu");
  const closeButton = document.querySelector(".close");

  toggleButton.addEventListener("click", function () {
    socialMenu.classList.toggle("show");
  });
  closeButton.addEventListener("click", function () {
    socialMenu.classList.remove("show");
  });
});
