// Background define
const images = [
  'img/fondo.jfif',
  'img/fondo2.jfif',
  'img/fondo3.jfif',
  'img/fondo4.jfif',
  'img/fondo5.jfif',
  'img/fondo6.jfif',
  'img/fondo7.jfif',
  'img/fondo8.jfif',
];

// App state
let index = 0;
const max = images.length;

// Get the DOM elements
const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

// Listen for arrow click events
prevSlideButton.addEventListener('click', function() {
  index--;
  setImageIndex();
  changeBackgroundImage(images[index], containerElement);
});

nextSlideButton.addEventListener('click', function() {
  index++;
  setImageIndex();
  changeBackgroundImage(images[index], containerElement);
});

// Utility function
function setImageIndex() {
  if (index < 0) index = max - 1;
  if (index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
  element.style.backgroundImage = `url(${backgroundImage})`;
}