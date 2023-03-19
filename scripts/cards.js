const sliderList = document.querySelector("#sliderList");
const url = 'https://63f6833959c944921f7569ab.mockapi.io/Destinations';

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("slideshow__dots--pass");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

fetch(url)
.then(res => res.json())
.then(data => {  
  data.forEach(element => {
    const li = document.createElement('li')
    li.setAttribute('id', element.id)
    li.classList.add("card");
    li.classList.add("slideshow__fade");
    li.innerHTML = `
      <div class="card__wrapper">
      <img class="card__img" src="${element.heroImage}" alt="">
      <div class="card__info">
      <p class="card__info__name">${element.destination}</p>
      <p class="card__info__description">${element.description}</p>
      </div></div>
      </li>
      `;
    li.addEventListener('click', function() {
      window.location.href = `../destiny.html?id=${element.id}`
    })
        
    sliderList.appendChild(li)
  })
})
.catch(err => console.log(err))
