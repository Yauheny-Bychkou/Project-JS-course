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
        elem.value = elem.value.replace(/[^а-яА-ЯёЁ\ ]/g, "");
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
        elem.value = elem.value.replace(/[^0-9\+]/g, "");
        elem.value = elem.value.replace(/\ +/g, " ");
        elem.value = elem.value.replace(/\-+/g, "-");
        elem.value = elem.value.replace(/^[\s\-]+/g, "");
        elem.value = elem.value.replace(/[\s\-]+$/g, "");
      });
    } else if (elem.getAttribute("name") === "user_message") {
      elem.addEventListener("blur", () => {
        elem.value = elem.value.replace(/[^а-яА-ЯёЁ0-9\-\,\.\!\:\;\ ]/g, "");
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
};
export default validateInput;
