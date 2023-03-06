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
