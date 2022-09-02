//Projects carousel

//Getting carousel
const carousel = document.querySelector('.carousel-inner');
const card = document.querySelector('.carousel-item');
//const carouselWidth = document.querySelector('.carousel-inner').scrollWidth;

const nextControl = document.querySelector('.carousel-control-next');
const prevControl = document.querySelector('.carousel-control-prev');

let scrollPosition = 0;

nextControl.addEventListener('click', () => {
  //verifying cardWidth and carouselWidth inside function, that way even if there's a resizing of the page it will scroll the right amount
  let cardWidth = card.scrollWidth;
  let carouselWidth = carousel.scrollWidth;

  if (scrollPosition < carouselWidth - cardWidth * 4) {
    scrollPosition += cardWidth;
    carousel.scroll({
      left: scrollPosition,
      top: 0,
      behavior: 'smooth'
    });
  }
});

prevControl.addEventListener('click', () => {
  let cardWidth = card.scrollWidth;

  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;

    carousel.scroll({
      left: scrollPosition,
      top: 0,
      behavior: 'smooth'
    });
  }
});
