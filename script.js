const slides = document.querySelectorAll('.slide'); //nodelist
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
let maxSlide = slides.length; //4

const goToSlide = function(slide){
slides.forEach((s, i) => (
  s.style.transform = `translateX(${100*(i-slide)}%)`
))
};

goToSlide(0);

const prevSlide = function() {
  if(currentSlide===0){
    currentSlide = maxSlide-1;
  }
  else currentSlide--;
  goToSlide(currentSlide);
}

const nextSlide = function () {
  if(currentSlide === maxSlide-1){
    currentSlide=0;
  }
  else currentSlide++;
  goToSlide(currentSlide);
}

btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);

