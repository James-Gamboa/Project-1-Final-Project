const destiny = document.querySelector("#destiny");
const hotels = document.querySelector("#hotels");
const words = document.querySelector("#words");
const cardcontainer = document.querySelector("#cardcontainer");

Promise.all([
  fetch("https://63f6833959c944921f7569ab.mockapi.io/Destinations"),
  fetch("https://63f6833959c944921f7569ab.mockapi.io/Hotels"),
])
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )
  .then(([destinations, hotels]) => {
    destination1(destinations[0]);
    hotel1(hotels[0]);
    hotels.forEach(showHotel);
  });

function destination1(d) {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2 class="title">${d.destination}</h2>
    <div class="imageCont">
      <img class="imageCont__img" src="${d.heroImage}" alt=""/>
    </div>
  `;
  // @ts-ignore
  destiny.append(div);

  const div2 = document.createElement("div");
  div2.innerHTML = `
    <p class="hidden" id="words">
      ${d.description}
    </p>
  `;
  // @ts-ignore
  words.append(div2);
}

function hotel1(h) {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2 class="title">${h.hotelName}</h2>
    <div class="imageCont">
      <img class="imageCont__img" src="${h.image}" alt=""/>
    </div>
  `;
  // @ts-ignore
  hotels.append(div);
}

function showHotel(h) {
  const div3 = document.createElement("div");

  div3.innerHTML = `
    <li class="card">
      <div class="card__wrapper">
        <img class="card__img" src="${h.image}" alt="">
        <div class="card__info">
          <p class="card__info__name">${h.hotelName}</p>
          <p class="card__info__description">${h.description}</p>
        </div>
        <a class="card__cta" href="${h.HotelPage}"><span class="visually-hidden">See Hotel</span></a>
      </div>
    </li>
  `;
  // @ts-ignore
  cardcontainer.append(div3);
}
