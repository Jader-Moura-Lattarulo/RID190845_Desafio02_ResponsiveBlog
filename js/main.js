const carouselLabel = document.querySelector('.carousel-label');
const carouselTitle = document.querySelector('.carousel-title');
const carouselAuthor = document.querySelector('.carousel-autor');
const carouselPost = document.getElementById('carousel-post');

const carouselData = [
  {
    imageSrc: './images/images-carousel/what-its-like-tobe-developer-img.png',
    label: 'Opinião',
    title: 'Como é ser um desenvolvedor',
    author: 'Fabio Tetsuo',
  },
  {
    imageSrc: './images/images-carousel/prioritizing-emotional-health.png',
    label: 'Saúde',
    title: 'Priorizando a saúde emocional',
    author: 'Jader Moura',
  },
  {
    imageSrc: './images/images-carousel/building-a-good-portfolio.png',
    label: 'Desenvolvimento',
    title: 'Construindo um bom portfólio',
    author: 'Jader Moura',
  },
];

let currentIndex = 0;

function updateCarousel() {
  const currentData = carouselData[currentIndex];
  carouselPost.style.backgroundImage = `url(${currentData.imageSrc})`;
  carouselLabel.textContent = currentData.label;
  carouselTitle.textContent = currentData.title;
  carouselAuthor.innerHTML = `<b>By</b> ${currentData.author}`;
  currentIndex = (currentIndex + 1) % carouselData.length;
}

setInterval(updateCarousel, 4000);
updateCarousel();
