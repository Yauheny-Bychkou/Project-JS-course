"use strict";
import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import changeImage from "./modules/changeImage";
import validateInput from "./modules/validateInput";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";
import SliderCarusel from "./modules/sliderCarusel";

countTimer("09 september 2021");

toggleMenu();

togglePopUp();

tabs();

slider();

changeImage();

validateInput();

calc(100);

sendForm();

const carousel = new SliderCarusel({
  main: ".companies-wrapper",
  wrap: ".companies-hor",
  // prev: "#test-left",
  // next: "#test-right",
  slidesToShow: 4,
  infinity: true,
  responsive: [
    {
      breakpoint: 1024,
      slidesToShow: 3,
    },
    {
      breakpoint: 768,
      slidesToShow: 2,
    },
    {
      breakpoint: 576,
      slidesToShow: 1,
    },
  ],
});
carousel.init();
