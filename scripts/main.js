document.addEventListener("DOMContentLoaded", function() {
  formDisplay();
});

function formDisplay() {
  var formulario = document.getElementById("form-content");
  if (formulario && formulario.style.display === "none") {
    formulario.style.display = "block";
  } else if (formulario) {
    formulario.style.display = "none";
  }
}
