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
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

window.onload = function () {
  // @ts-ignore
  document.querySelector("main #texto").style.display = "none";
  // @ts-ignore
  document.querySelector("main #cd").style.display = "none";
  // @ts-ignore
  document.getElementById("hotel").onclick = function () {
    // @ts-ignore
    document.querySelector("main #texto").style.display = "none";
    // @ts-ignore
    document.querySelector("main #cd").style.display = "block";
  };
  // @ts-ignore
  document.getElementById("detail").onclick = function () {
    // @ts-ignore
    document.querySelector("main #texto").style.display = "block";
    // @ts-ignore
    document.querySelector("main #cd").style.display = "none";
  };
};
