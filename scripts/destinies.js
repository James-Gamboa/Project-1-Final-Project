// const destiny = document.querySelector("#destiny");
// const words = document.querySelector("#words");

// const getUrl = new URLSearchParams(window.location.search);
// id = getUrl.get('id');
// const destinyUrl = "https://63f6833959c944921f7569ab.mockapi.io/Destinations";


// fetch(destinyUrl)
//   .then((response) => response.json())
//   .then((data) => destination1(data[0]))
//   .catch(err => console.log(err));

// function destination1(d) {
//   const div = document.createElement("div");
  
//     div.innerHTML = `
//       <h2 class="title">${d.destination}</h2>
//       <div class="imageCont">
//       <img class="imageCont__img" src="${d.heroImage}" alt=""/>
//       </div>
//     `;
//     destiny.append(div);
  
//   const div2 = document.createElement("div");
  
//     div2.innerHTML = `
//       <p class="hidden" id="words">
//         ${d.description}
//       </p>
//     `;
//     words.append(div2);
// }

