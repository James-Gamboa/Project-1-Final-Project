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
