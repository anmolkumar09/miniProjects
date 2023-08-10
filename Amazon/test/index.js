let menu = document.querySelector(".menu");
let bar1 = document.getElementById("bar1");
let bar3 = document.getElementById("bar3");
menu.addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("icon");

  document.getElementById("nav").classList.toggle("change");
});
