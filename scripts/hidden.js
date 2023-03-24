window.onload = function () {
  // @ts-ignore
  document.querySelector("main #cardcontainer").style.display = "none";
  // @ts-ignore
  document.querySelector("main #words").style.display = "block";
  let isHotelHidden = true;
  // @ts-ignore
  document.getElementById("hotel").onclick = function () {
    if (isHotelHidden) {
      // @ts-ignore
      document.querySelector("main #cardcontainer").style.display = "block";
      isHotelHidden = false;
    } else {
      // @ts-ignore
      document.querySelector("main #cardcontainer").style.display = "none";
      isHotelHidden = true;
    }
    // @ts-ignore
    document.querySelector("main #words").style.display = "none";
  };

  let isDetailHidden = false;
  // @ts-ignore
  document.getElementById("detail").onclick = function () {
    if (!isDetailHidden) {
      // @ts-ignore
      document.querySelector("main #words").style.display = "none";
      isDetailHidden = true;
    } else {
      // @ts-ignore
      document.querySelector("main #words").style.display = "block";
      isDetailHidden = false;
    }
    // @ts-ignore
    document.querySelector("main #cardcontainer").style.display = "none";
    isHotelHidden = true;
  };
};
