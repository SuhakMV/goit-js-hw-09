import Notiflix from "notiflix";

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amout = document.querySelector('[name="amount"]');
const buttonCreate = document.querySelector('[type="submit"]');
console.log(buttonCreate);

let evtDelay = Number(firstDelay.value);
let evtStep = Number(delayStep.value);
let evtAmout = Number(amout.value);

buttonCreate.addEventListener('click', onInterval);



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}