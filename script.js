(function () {
  const pic = ["image1", "image2", "image3", "image4", "image5", "image6"];
  const pictures = document.querySelector('.image');
  const buttons = document.querySelectorAll('.btn');
  let count = 0;

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.classList.contains('btn-left')) {
        count--;
        if (count < 0) {
          count = pic.length - 1;
        }
        pictures.style.backgroundImage = `url('./images/${pic[count]}.jpg')`;
      }
      if (button.classList.contains('btn-right')) {
        count++;
        if (count > pic.length - 1) {
          count = 0;
        }
        pictures.style.backgroundImage = `url('./images/${pic[count]}.jpg')`;

      }
    })
  })
})();




