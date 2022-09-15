import Notiflix from "notiflix";

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const inputAmout = document.querySelector('[name="amount"]');
const buttonCreate = document.querySelector('[type="submit"]');

buttonCreate.addEventListener('click', onBtnSubmit);

function onBtnSubmit(e) {
  e.preventDefault();
    let delay = Number(firstDelay.value);
    let step = Number(delayStep.value);
    let amout = Number(inputAmout.value);

      for (let position = 1; position <= amout; position += 1) {
          createPromise(position, delay)
            .then(({ position, delay }) => {
              Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
              Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
            }); 
            delay += step;
      }
    }

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  })
}