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
export default togglePopUp;
