const destiny = document.querySelector("#destiny");
const details = document.querySelector("#details");
const button = document.querySelector('#button');

const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get('id')
const hotelUrl = 'https://63f6833959c944921f7569ab.mockapi.io/Hotels';


fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
  const destination = document.createElement('div')
  destination.innerHTML = `
    <h2 class="title">${data.destination}</h2>
    <div class="imageCont">
    <img class="imageCont__img" src="${data.heroImage}" alt=""/>
    </div>
  `;
  const description = document.createElement("div");
  description.innerHTML = `
  <p class="hidden" id="words">
    ${data.description}
  </p>
`;
  destiny.appendChild(destination)
  words.appendChild(description)
  
})
//.catch(err => console.log(err))


fetch(`${hotelUrl}/${id}`)
.then(res => res.json())
.then(data => {
  const li = document.createElement('li')
    li.setAttribute('id', data.id)
    li.classList.add("card");
    li.innerHTML = `
    <div class="card__wrapper">
    <img class="card__img" src="${data.image}" alt="">
    <div class="card__info">
    <p class="card__info__name">${data.hotelName}</p>
    <p class="card__info__description">${data.description}</p>
    </div>
    </div>
    </li>
  `;

  li.addEventListener('click', function() {
    window.location.href = `../hotel-page.html?id=${data.id}`
  })

  aplicacion.appendChild(li); 

})
//.catch(err => console.log(err)) 

//// HOTEL-PAGE ////
fetch(`${hotelUrl}/${id}`)
.then(res => res.json())
.then(data => {
  const div = document.createElement('div');
  div.setAttribute('id', data.id)
  div.innerHTML = `
  <h2 class="title">${data.hotelName}</h2>
  <div class="imageCont">
  <img class="imageCont__img" src="${data.image}" alt=""/>
  </div>
  </div>`
  ;

  details.appendChild(div); 

  button.addEventListener('click', function() {
    window.location.href = `../hotel-info.html?id=${data.id}`
  })
})
//.catch(err => console.log(err)) 
