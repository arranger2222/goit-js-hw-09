import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";

const refs = {
    startBtn: document.querySelector('[data-start]'),
    timer: document.querySelector('.timer'),
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0].getTime();
        if (selectedDate <= Date.now()) {
            Notify.failure('Please choose a date in the future');
        }
        else {
            refs.startBtn.disabled = false;
        }
    },
};

let selectedDate;

flatpickr("#datetime-picker", options);

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onStartTimer);

function onStartTimer() {
    const intervalID = setInterval(() => {
        const differenceTime = selectedDate - Date.now();
        const date = convertMs(differenceTime);
        if (date.seconds < 0) {
            clearInterval(intervalID);
            return;
        }
        updateTimerFace(date);  
    }, 1000)
}

function updateTimerFace({ days, hours, minutes, seconds }) {
    refs.timer.querySelector('[data-days]').textContent = pad(days);
    refs.timer.querySelector('[data-hours]').textContent = pad(hours);
    refs.timer.querySelector('[data-minutes]').textContent = pad(minutes);
    refs.timer.querySelector('[data-seconds]').textContent = pad(seconds);
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

function pad(value) {
    return value.toString().padStart(2, '0');
}