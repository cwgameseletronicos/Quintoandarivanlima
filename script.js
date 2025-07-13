const slider = document.getElementById('slider');
let startX;
let isDragging = false;
let currentIndex = 0;

const images = slider.querySelectorAll('img');
const imageWidth = slider.clientWidth;

function goToImage(index) {
  currentIndex = Math.max(0, Math.min(index, images.length - 1));
  slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Mouse
slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
});

slider.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  const diff = e.pageX - startX;
  if (diff > 50) {
    goToImage(currentIndex - 1);
  } else if (diff < -50) {
    goToImage(currentIndex + 1);
  } else {
    goToImage(currentIndex); // Volta pro mesmo se pouco arrasto
  }
});

// Touch (celular)
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;
  if (diff > 50) {
    goToImage(currentIndex - 1);
  } else if (diff < -50) {
    goToImage(currentIndex + 1);
  } else {
    goToImage(currentIndex);
  }
});
