import { Home } from "./getMeals.module.js";
let home = new Home();

let infoIcon = document.querySelector(".closeDetails");
let logo = document.querySelector(".closeDet2");
let infoClass = document.querySelector(".info");
let homeClass = document.querySelector("div#home");
infoIcon.addEventListener("click", function () {
  infoClass.classList.replace("d-block", "d-none");
  homeClass.classList.replace("d-none", "d-block");
});
logo.addEventListener("click", function () {
  homeClass.classList.replace("d-none", "d-block");
});

// start nav
let outerLeft = $(".outer").offset()?.left || 0;
let navBar = $(".navbar");
let navMenu = $(".navbar .outer .menu i");
let navMenuClose = $(".navbar .outer .menu i.closeLogo");
let listTransform = $(".inner .top-to ul li");
let inner = $(".inner");
navBar.css("left", -outerLeft);

export function slideNAv() {
  if (navBar.css("left") == "0px") {
    navBar.animate({ left: -outerLeft }, 700);
    listTransform.css("transform", "translateY(400px)");
    navMenu.css("display", "block");
    navMenuClose.css("display", "none");
  } else {
    navBar.animate({ left: "0px" }, 700, () => {
      listTransform.css("transform", "translateY(0px)");
    });
    navMenu.css("display", "none");
    navMenuClose.css("display", "block");
  }
}
navMenu.click(() => {
  slideNAv();
});
// end nav

// start loading
// let loadScreen = $(".loading");
// $(window).ready(() => {
//   loadScreen.fadeOut(1000, () => {
//     $("body").css({ overflow: "visible" });
//   });
// });
// end loading
