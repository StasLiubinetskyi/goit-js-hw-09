const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;

startButton.addEventListener('click', startColorSwitching);
stopButton.addEventListener('click', stopColorSwitching);

// щоб кнопка "Stop" була спочатку неактивною
stopButton.disabled = true;

function startColorSwitching() {
  startButton.disabled = true;
  stopButton.disabled = false; 
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorSwitching() {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(intervalId);
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
