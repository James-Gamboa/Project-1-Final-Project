let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("slideshow__dots--pass");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const sliderList = document.querySelector("#sliderList");
const sliderList2 = document.querySelector("#sliderList2");
const sliderList3 = document.querySelector("#sliderList3");

for (let i = 0; i <= 2; i++) {
  fetch("https://63f6833959c944921f7569ab.mockapi.io/Destinations")
  .then((response) => response.json())
  .then((data) => showDestination(data[i]));
}

for (let i = 3; i <= 5; i++) {
  fetch("https://63f6833959c944921f7569ab.mockapi.io/Destinations")
  .then((response) => response.json())
  .then((data) => showDestination2(data[i]));
}

for (let i = 6; i <= 8; i++) {
  fetch("https://63f6833959c944921f7569ab.mockapi.io/Destinations")
  .then((response) => response.json())
  .then((data) => showDestination3(data[i]));
}

function showDestination(d) {
  const li = document.createElement("li");
    li.classList.add("card");
    li.classList.add("slideshow__fade");
  
    li.innerHTML = `
          <div class="card__wrapper">
          <img class="card__img" src="${d.heroImage}" alt="">
          <div class="card__info">
          <p class="card__info__name">${d.destination}</p>
          <p class="card__info__description">${d.description}</p>
          </div>
          <a class="card__cta" href=""><span class="visually-hidden">See Destination</span></a>
          </div>
          </li>
      `;
    sliderList.append(li);
}

function showDestination2(d) {
  const li = document.createElement("li");
    li.classList.add("card");
    li.classList.add("slideshow__fade");
  
    li.innerHTML = `
          <div class="card__wrapper">
          <img class="card__img" src="${d.heroImage}" alt="">
          <div class="card__info">
          <p class="card__info__name">${d.destination}</p>
          <p class="card__info__description">${d.description}</p>
          </div>
          <a class="card__cta" href=""><span class="visually-hidden">See Destination</span></a>
          </div>
          </li>
      `;
    sliderList2.append(li);
}

function showDestination3(d) {
  const li = document.createElement("li");
    li.classList.add("card");
    li.classList.add("slideshow__fade");
  
    li.innerHTML = `
          <div class="card__wrapper">
          <img class="card__img" src="${d.heroImage}" alt="">
          <div class="card__info">
          <p class="card__info__name">${d.destination}</p>
          <p class="card__info__description">${d.description}</p>
          </div>
          <a class="card__cta" href=""><span class="visually-hidden">See Destination</span></a>
          </div>
          </li>
      `;
    sliderList3.append(li);
}