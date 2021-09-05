const changeImage = () => {
  let image = document.querySelectorAll(".command__photo");
  image.forEach((elem) => {
    elem.addEventListener("mouseenter", (e) => {
      e.target.src = e.target.dataset.img;
    });
  });
};
export default changeImage;
