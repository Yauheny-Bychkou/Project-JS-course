window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  function countTimer(deadline) {
    let timerHour = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");
    setInterval(function () {
      function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 3600);
        return { timeRemaining, hours, minutes, seconds };
      }
      function updateClock() {
        let timer = getTimeRemaining();
        if (timer.timeRemaining > 0) {
          if (timer.hours === 0 || timer.hours <= 9) {
            timerHour.textContent = `0${timer.hours}`;
          } else {
            timerMinutes.textContent = `${timer.hours}`;
          }
          if (timer.minutes === 0 || timer.minutes <= 9) {
            timerMinutes.textContent = `0${timer.minutes}`;
          } else {
            timerMinutes.textContent = `${timer.minutes}`;
          }
          if (timer.seconds === 0 || timer.seconds <= 9) {
            timerSeconds.textContent = `0${timer.seconds}`;
          } else {
            timerSeconds.textContent = `${timer.seconds}`;
          }
        } else if (timer.timeRemaining < 0) {
          timerHour.textContent = "00";
          timerMinutes.textContent = "00";
          timerSeconds.textContent = "00";
        }
      }
      updateClock();
    }, 1000);
  }
  countTimer("22 august 2021");
});
