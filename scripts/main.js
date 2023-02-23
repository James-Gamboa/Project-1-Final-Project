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
