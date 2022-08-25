//Javascript para o banner principal

//const firstImage = document.querySelector('#carousel1');
//const secondImage = document.querySelector('#carousel2');
//const thirdImage = document.querySelector('#carousel3');

//Adicionando responsividade, fazendo com que a imagem e a descrição sejam atualizadas ao clicar nas setas ou nos indicadores

const slideIndicators = document.querySelectorAll(
  '.carousel-indicators button'
);

slideIndicators.forEach(button => button.addEventListener('click', getPhoto));

let previous = document.querySelector('.carousel-control-prev-icon');
let next = document.querySelector('.carousel-control-next-icon');

previous.addEventListener('click', getPhoto);
next.addEventListener('click', getPhoto);

//data de hoje
let today = new Date();
today = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDay()} `;

//inserindo a descrição
function getDescription(text) {
  let slideExplanation = document.querySelector('#slideExplanation');

  slideExplanation.innerText = text;
}

//consumindo a api
async function nasaPhoto(photo, date = today) {
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=6zW6Gu3q5DK47qq0DgRSW4Z4IiVqxGlssTWsJjty&date=${date}`
  );

  let data = await response.json();
  //console.log(data.explanation);
  console.log(data);
  photo.src = await data.url;
  let explanation = await data.explanation;

  getDescription(explanation);
}

//função com a data a ser chamada
function getPhoto() {
  //setTimeout utilizado para que haja um delay entre o clique e a função, pois sem este recurso estava sempre retornando o item antigo
  setTimeout(() => {
    const activeImage = document.querySelector('.carousel-item.active img');
    let date = '';

    switch (activeImage.id) {
      case 'carousel1':
        date = today;
        break;
      case 'carousel2':
        date = '2020-08-17';
        break;
      case 'carousel3':
        date = today;
        break;
    }

    nasaPhoto(activeImage, date);
  }, 50);
}

window.addEventListener('load', getPhoto);
