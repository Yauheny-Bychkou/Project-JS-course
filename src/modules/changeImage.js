const changeImage = () => {
  let image = document.querySelectorAll(".command__photo");
  image.forEach((elem) => {
    let source = elem.src;
    let dataSource = elem.dataset.img;
    elem.addEventListener("mouseenter", (e) => {
      e.target.src = dataSource;
    });
    elem.addEventListener("mouseleave", (e) => {
      e.target.src = source;
    });
  });
};
export default changeImage;
