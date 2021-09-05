const toggleMenu = () => {
  const menu = document.querySelector("menu");
  const link = document.querySelectorAll("a");
  link.forEach((elem) => {
    if (elem.hash === "#service-block") {
      elem.addEventListener("click", (event) => {
        event.preventDefault();
        const blockID = elem.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  });

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
    } else if (
      !target.classList.contains("active-menu") &&
      target.tagName !== "LI" &&
      menu.classList.contains("active-menu") === true
    ) {
      handlerMenu();
    }
  });
};
export default toggleMenu;
