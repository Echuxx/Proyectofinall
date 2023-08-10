const botonModoToggle = document.getElementById("modoToggle");
const body = document.body;

botonModoToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});