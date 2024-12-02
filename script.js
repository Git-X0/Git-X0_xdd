function toggleMenu() {
  console.info("Menu clicked");
  const menu = document.querySelector(".quick-menu");
  menu.classList.toggle("opened");
}

function RedBlue() {
  const topSection = document.querySelector(".top-section");
  const rect1 = document.querySelector(".rect1");
  const rect2 = document.querySelector(".rect2");
  topSection.style.background = "linear-gradient(#ff0000, #0000ff)";
  rect1.style.background = "#ff0000";
  rect2.style.background = "#0000ff";
}
function YellowBlue() {
  const topSection = document.querySelector(".top-section");
  const rect1 = document.querySelector(".rect1");
  const rect2 = document.querySelector(".rect2");
  topSection.style.background = "linear-gradient(#ffff00, #0000ff)";
  rect1.style.background = "#ffff00";
  rect2.style.background = "#0000ff";
}
function PinkGreen() {
  const topSection = document.querySelector(".top-section");
  const rect1 = document.querySelector(".rect1");
  const rect2 = document.querySelector(".rect2");
  topSection.style.background = "linear-gradient(#ff00ff, #00ff00)";
  rect1.style.background = "#ff00ff";
  rect2.style.background = "#00ff00";
}
