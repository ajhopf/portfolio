//JavaScript Nav

const menuMobile = document.querySelector('#menu-mobile');

menuMobile.addEventListener('click', () => {
  menuMobile.classList.toggle('is-active');
});

//JavaScript APOD

const photo = document.querySelector('#nasaPhoto');
const video = document.querySelector('#nasaVideo');

const nasaForm = document.querySelector('#nasaForm');
const dateValue = document.querySelector('#photoDate');

//data de hoje
let today = new Date();
today = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} `;

let newToday = new Date();
console.log(newToday.getDay());

// console.log(today);

//inserindo a descrição
function getDescription(text) {
  let slideExplanation = document.querySelector('#photoCommentary');

  slideExplanation.innerText = text;
}

//consumindo a api
async function nasaPhoto(photo, date = today) {
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=6zW6Gu3q5DK47qq0DgRSW4Z4IiVqxGlssTWsJjty&date=${date}`
  );

  let data = await response.json();

  if ((await data.media_type) === 'video') {
    photo.src = '';
    video.removeAttribute('hidden', 'hidden');
    video.src = await data.url;
  } else {
    video.setAttribute('hidden', 'hidden');
    photo.src = await data.url;
  }

  let explanation = await data.explanation;

  getDescription(explanation);
}

//changing photo date

nasaForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(dateValue.value);
  nasaPhoto(photo, dateValue.value);
  dateValue.value = '';
});

//Window onload
window.addEventListener('load', () => {
  AOS.init();

  nasaPhoto(photo);
});
