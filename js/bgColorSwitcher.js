'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

function getColor() {
  return colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function setColor() {
  refs.body.style.backgroundColor = getColor();
}

const colorSwither = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    refs.btnStart.classList.add('btn-notactive');
    setColor();
    this.intervalId = setInterval(() => {
      setColor();
    }, 1000);
  },
  stop() {
    this.isActive = false;
    refs.btnStart.classList.remove('btn-notactive');
    clearInterval(this.intervalId);
  },
};

refs.btnStart.addEventListener('click', colorSwither.start.bind(colorSwither));
refs.btnStop.addEventListener('click', colorSwither.stop.bind(colorSwither));
