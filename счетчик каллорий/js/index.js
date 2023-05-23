import CaloriesCounter from './modules/CaloriesCounter.js';

const counterElements = document.querySelectorAll('.counter');

counterElements.forEach(elem => {
  const counter = new CaloriesCounter(elem);
  counter.init();
});