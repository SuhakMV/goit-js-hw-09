/**Import */
import flatpickr from "flatpickr";
import Notiflix from "notiflix";
import "flatpickr/dist/flatpickr.min.css";

const inputFp = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const valueDays = document.querySelector('[data-days]');
const valueHr = document.querySelector('[data-hours]');
const valueMin = document.querySelector('[data-minutes]');
const valueSec = document.querySelector('[data-seconds]');

let timerId = null;
let selectedDate = null;

btnStart.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= Date.now()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        btnStart.disabled = true;
      } else {
        btnStart.disabled = false;
        selectedDate = selectedDates[0];
        console.log(selectedDate.getTime());
      }
    },
  };

  flatpickr(inputFp, options);

  btnStart.addEventListener('click', onBtnClick);

  function onBtnClick() {
    timerId = setInterval(() => {
      const interval = selectedDate.getTime() - Date.now();
      inputFp.disabled = true;
      btnStart.disabled = true;
      onTimeStop(interval);
      const convertedMs = convertMs(interval);
      onTimeConvert(convertedMs);

    }, 1000);
  }

  function onTimeStop(interval) {
    if (interval <= 1000) {
      clearInterval(timerId);
      btnStart.disabled = true;
      inputFp.disabled = false;
    }
  }

function onTimeConvert({ days, hours, minutes, seconds }) {
  valueDays.textContent = addLeadingZero(days);
  valueHr.textContent = addLeadingZero(hours);
  valueMin.textContent = addLeadingZero(minutes);
  valueSec.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }