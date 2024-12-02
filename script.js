function toggleMenu() {
  console.info("Menu clicked");
  const menu = document.querySelector(".quick-menu");
  menu.classList.toggle("opened");
}
function RedBLue() {
  const topSection = document.querySelector(".top-section");
  topSection.style.background = "linear-gradient(#ff0000, #0000ff)";
}
function YellowBlue() {
  const topSection = document.querySelector(".top-section");
  topSection.style.background = "linear-gradient(#ffff00, #0000ff)";
}
function PinkGreen() {
  const topSection = document.querySelector(".top-section");
  topSection.style.background = "linear-gradient(#ff00ff, #00ff00)";
}
