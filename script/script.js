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
  countTimer("23 august 2021");

  const toggleMenu = () => {
    const menu = document.querySelector("menu");

    const handlerMenu = () => {
      menu.classList.toggle("active-menu");
    };

    document.addEventListener("click", (event) => {
      let target = event.target;
      if (target.closest(".menu")) {
        handlerMenu();
      } else if (target.classList.contains("close-btn")) {
        handlerMenu();
      } else if (target.tagName === "A") {
        handlerMenu();
        event.preventDefault();
        const blockID = event.target.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };

  toggleMenu();

  const togglePopUp = () => {
    const popup = document.querySelector(".popup"),
      popupBtn = document.querySelectorAll(".popup-btn"),
      hightWindow = window.innerWidth;

    popup.style.opacity = 0;

    const openPopUp = () => {
      if (hightWindow > 768) {
        const animate = ({ timing, draw, duration }) => {
          let start = performance.now();

          requestAnimationFrame(function animate(time) {
            // timeFraction изменяется от 0 до 1
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) {
              timeFraction = 1;
            }
            // вычисление текущего состояния анимации
            let progress = timing(timeFraction);

            draw(progress); // отрисовать её

            if (timeFraction < 1) {
              requestAnimationFrame(animate);
            }
          });
        };

        animate({
          duration: 500,
          timing(timeFraction) {
            return Math.pow(timeFraction, 2);
          },
          draw(progress) {
            popup.style.opacity = progress * 1;
          },
        });
      }
    };

    popupBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        if (!popup.style.display || popup.style.display === "none") {
          openPopUp();
          popup.style.display = "initial";
        }
      });
    });

    popup.addEventListener("click", (event) => {
      let target = event.target;
      if (target.classList.contains("popup-close")) {
        popup.style.display = "none";
      } else {
        target = target.closest(".popup-content");
        if (!target) {
          popup.style.display = "none";
        }
      }
    });
  };
  togglePopUp();

  const tabs = () => {
    const tabHeader = document.querySelector(".service-header"),
      tab = tabHeader.querySelectorAll(".service-header-tab"),
      tabContent = document.querySelectorAll(".service-tab");

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add("active");
          tabContent[i].classList.remove("d-none");
        } else {
          tab[i].classList.remove("active");
          tabContent[i].classList.add("d-none");
        }
      }
    };
    tabHeader.addEventListener("click", (event) => {
      let target = event.target;

      target = target.closest(".service-header-tab");

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();
});
