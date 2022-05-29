import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const countCounter = document.querySelector('.count_counter--js');
const buttonAdd = document.querySelector('.button__add--js');
const buttonRemove = document.querySelector(".button_remove--js");
const key = new Date().toLocaleString().slice(0,10);
const localStorageValue = localStorage.getItem(key);

console.log(key);

let currentGlassCounter = 0;

if(localStorageValue) {
    currentGlassCounter = localStorageValue;
}
else {
    localStorage.setItem(key,0);
}

countCounter.innerHTML = currentGlassCounter;

buttonAdd.addEventListener('click', () => {
    currentGlassCounter++;
    countCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
})

buttonRemove.addEventListener("click", () => {
  if (currentGlassCounter > 0) { 
      currentGlassCounter--;
      }
  countCounter.innerHTML = currentGlassCounter;
  localStorage.setItem(key, currentGlassCounter);
});