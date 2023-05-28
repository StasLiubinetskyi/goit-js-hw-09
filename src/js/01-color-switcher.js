const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;

startButton.addEventListener('click', startColorSwitching);
stopButton.addEventListener('click', stopColorSwitching);

function startColorSwitching() {
  startButton.disabled = true;
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorSwitching() {
  startButton.disabled = false;
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

