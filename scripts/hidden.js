window.onload = function () {
  // @ts-ignore
  document.querySelector("main #words").style.display = "none";
  // @ts-ignore
  document.querySelector("main #cardcontainer").style.display = "none";
  // @ts-ignore
  document.getElementById("hotel").onclick = function () {
    // @ts-ignore
    document.querySelector("main #words").style.display = "none";
    // @ts-ignore
    document.querySelector("main #cardcontainer").style.display = "block";
  };
  // @ts-ignore
  document.getElementById("detail").onclick = function () {
    // @ts-ignore
    document.querySelector("main #words").style.display = "block";
    // @ts-ignore
    document.querySelector("main #cardcontainer").style.display = "none";
  };
};
