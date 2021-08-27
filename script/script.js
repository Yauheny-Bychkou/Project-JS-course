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
      } else if (target.tagName === "A" && menu.classList.contains("active-menu")) {
        handlerMenu();
        event.preventDefault();
        const blockID = event.target.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (target.classList.contains("active-menu")) {
        menu.classList.add("active-menu");
      } else if (!target.classList.contains("close-btn")) {
        menu.classList.remove("active-menu");
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

  const slider = () => {
    const slide = document.querySelectorAll(".portfolio-item"),
      slider = document.querySelector(".portfolio-content");

    let currentSlide = 0,
      dots = document.querySelector(".portfolio-dots"),
      interval;

    for (let i = 0; i < slide.length - 1; i++) {
      if (i === 0) {
        let li = document.createElement("li");
        dots.append(li);
        li.classList.add("dot");
        li.classList.add("dot-active");
      }
      let li = document.createElement("li");
      dots.append(li);
      li.classList.add("dot");
    }

    let dot = document.querySelectorAll(".dot");

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");

      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    };

    const startSlide = (time = 1500) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener("click", (event) => {
      event.preventDefault();
      let target = event.target;
      if (!target.matches(".portfolio-btn, .dot ")) {
        return;
      }
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");

      if (target.matches("#arrow-right")) {
        currentSlide++;
      } else if (target.matches("#arrow-left")) {
        currentSlide--;
      } else if (target.matches(".dot")) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    });

    slider.addEventListener("mouseover", (event) => {
      if (event.target.matches(".portfolio-btn") || event.target.matches(".dot")) {
        stopSlide();
      }
    });
    slider.addEventListener("mouseout", (event) => {
      if (event.target.matches(".portfolio-btn") || event.target.matches(".dot")) {
        startSlide();
      }
    });

    startSlide();
  };

  slider();

  const changeImage = () => {
    let image = document.querySelectorAll(".command__photo");
    image.forEach((elem) => {
      elem.addEventListener("mouseenter", (e) => {
        e.target.src = e.target.dataset.img;
      });
    });
  };

  changeImage();

  const validateInput = () => {
    let block = document.querySelector(".footer-form-input");
    let calcItem = document.querySelectorAll(".calc-item");
    let inputs = document.querySelectorAll("input");

    inputs.forEach((elem) => {
      if (elem.getAttribute("name") === "user_name") {
        elem.addEventListener("blur", () => {
          if (elem.value.match(/[а-яА-ЯёЁ\-\ ]/g)) {
            let arr = elem.value.split(" ");
            let newArr = [];

            arr.forEach((word) => {
              word = word[0].toUpperCase() + word.slice(1);
              newArr.push(word);
            });
            elem.value = newArr.join(" ");
          }
          elem.value = elem.value.replace(/[^а-яА-ЯёЁ\-\ ]/g, "");
          elem.value = elem.value.replace(/\ +/g, " ");
          elem.value = elem.value.replace(/\-+/g, "-");
          elem.value = elem.value.replace(/^[\s\-]+/g, "");
          elem.value = elem.value.replace(/[\s\-]+$/g, "");
        });
      } else if (elem.getAttribute("name") === "user_email") {
        elem.addEventListener("blur", () => {
          elem.value = elem.value.replace(/[^a-zA-Z\@-\_\.\~\!\*\']/g, "");
          elem.value = elem.value.replace(/\ +/g, " ");
          elem.value = elem.value.replace(/\-+/g, "-");
          elem.value = elem.value.replace(/^[\s\-]+/g, "");
          elem.value = elem.value.replace(/[\s\-]+$/g, "");
        });
      } else if (elem.getAttribute("name") === "user_phone") {
        elem.addEventListener("blur", () => {
          elem.value = elem.value.replace(/[^0-9\(\)\-]/g, "");
          elem.value = elem.value.replace(/\ +/g, " ");
          elem.value = elem.value.replace(/\-+/g, "-");
          elem.value = elem.value.replace(/^[\s\-]+/g, "");
          elem.value = elem.value.replace(/[\s\-]+$/g, "");
        });
      } else if (elem.getAttribute("name") === "user_message") {
        elem.addEventListener("blur", () => {
          elem.value = elem.value.replace(/[^а-яА-ЯёЁ\-\ ]/g, "");
          elem.value = elem.value.replace(/\ +/g, " ");
          elem.value = elem.value.replace(/\-+/g, "-");
          elem.value = elem.value.replace(/^[\s\-]+/g, "");
          elem.value = elem.value.replace(/[\s\-]+$/g, "");
        });
      }
    });

    calcItem.forEach((elem, n) => {
      if (n !== 0) {
        elem.addEventListener("input", () => {
          elem.value = elem.value.replace(/\D/g, "");
        });
      }
    });

    // block.addEventListener("keyup", (event) => {
    //   let target = event.target;

    //   if (target.matches("#form2-name")) {
    //     if (target.value.match(/[^а-яА-ЯёЁ\-\ ]/g, "")) {
    //       target.value = target.value.replace(/[^а-яА-ЯёЁ\-\ ]/g, "");
    //     }
    //   }
    //   if (target.matches("#form2-message")) {
    //     if (target.value.match(/[^а-яА-ЯёЁ\-\ ]/g, "")) {
    //       target.value = target.value.replace(/[^а-яА-ЯёЁ\-\ ]/g, "");
    //     }
    //   }
    //   if (target.matches("#form2-email")) {
    //     if (target.value.match(/[^a-zA-Z\@-\_\.\~\!\*\']/g, "")) {
    //       target.value = target.value.replace(/[^a-zA-Z\@-\_\.\~\!\*\']/g, "");
    //     }
    //   }
    //   if (target.matches("#form2-phone")) {
    //     if (target.value.match(/[^0-9\(\)\-]/g, "")) {
    //       target.value = target.value.replace(/[^0-9\(\)\-]/g, "");
    //     }
    //   }
    // });
  };

  validateInput();
});

// let block = document.querySelector(".col-md-2");
