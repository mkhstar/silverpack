const SmoothScroll = require('smooth-scroll');
const cpList = require('cp-classlist');
const ScrollReveal = require("./scrollview");

ScrollReveal().reveal('main, #kesfet, #black-series, #one-cikanlar,#newsletter ,footer ', {
  duration: 1500,
  reset: true
});

new SmoothScroll('a[href*="#"]');

const mainNavbar = document.querySelector("nav#main-navbar");
const menuIcon = document.querySelector("nav#main-navbar .menu-icon");
const photoGallery = document.querySelector("section#photo-gallery");
const leftArrow = document.querySelector("#photo-gallery .arrows .left-arrow");
const rightArrow = document.querySelector("#photo-gallery .arrows .right-arrow");
const closeIcon = document.querySelector("#photo-gallery .arrows .close-icon");
const returnToTop = document.querySelector("#return-to-top");

//Handle Navbar responsive
menuIcon.addEventListener("click", e => {
  e.stopPropagation();
  const list = cpList(mainNavbar);
  list.add("cover-navbar");
});

mainNavbar.addEventListener("click", e => {
  const list = cpList(e.currentTarget);
  list.remove("cover-navbar");
});
let oldScroll = 0;

window.addEventListener("scroll", () => {
  const list = cpList(mainNavbar);
  if (posTop() > 50) {
    cpList(returnToTop).add("active")
    if (posTop() < oldScroll) {
      list.add("fixed");
    } else list.remove("fixed");
  } else {
    cpList(returnToTop).remove("active")
    list.remove("fixed")
  }

  oldScroll = posTop() <= 0 ? 0 : posTop();
})

function posTop() {
  return typeof window.pageYOffset != 'undefined' ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
}

// LIGHTBOX LOGIC
photoGallery.addEventListener("click", ({
  target
}) => {
  if (cpList(target).contains("image") || (cpList(target.parentElement).contains("image"))) {
    cpList(photoGallery).add("lightbox");
    cpList(cpList(target).contains("image") ? target : target.parentElement).add("active");
  }
})

leftArrow.addEventListener("click", () => {
  // GET IMAGE WITH ACTIVE CLASSNAME
  const activeImg = document.querySelector("section#photo-gallery .image.active");
  cpList(activeImg).remove("active");

  if (activeImg.previousElementSibling) {

    cpList(activeImg.previousElementSibling).add("active");
  } else {
    // GET LAST CHILD AND ADD
    const nodes = document.querySelectorAll("section#photo-gallery .image");
    cpList(nodes[nodes.length - 1]).add("active");
  }

})
rightArrow.addEventListener("click", () => {
  // GET IMAGE WITH ACTIVE CLASSNAME
  const activeImg = document.querySelector("section#photo-gallery .image.active");
  cpList(activeImg).remove("active");

  if (activeImg.nextElementSibling) {
    cpList(activeImg.nextElementSibling).add("active");
  } else {
    // GET FIRST CHILD AND ADD
    cpList(document.querySelectorAll("section#photo-gallery .image")[0]).add("active");
  }
});
closeIcon.addEventListener("click", () => {
  cpList(document.querySelector("section#photo-gallery .image.active")).remove("active");
  cpList(photoGallery).remove("lightbox");
})