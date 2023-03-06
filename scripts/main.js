window.addEventListener("load", formDisplay);
function formDisplay() {
  var formulario = document.getElementById("form-content");
  // @ts-ignore
  if (formulario.style.display === "none") {
    // @ts-ignore
    formulario.style.display = "block";
  } else {
    // @ts-ignore
    formulario.style.display = "none";
  }
}

//hamburger menu
const nav = document.querySelector("#nav");
// @ts-ignore
const open = document.querySelector("#open");
const cerrar = document.querySelector("#cerrar");

// @ts-ignore
open.addEventListener("click", () => {
  // @ts-ignore
  nav.classList.add("visible");
});

// @ts-ignore
cerrar.addEventListener("click", () => {
  // @ts-ignore
  nav.classList.remove("visible");
});

