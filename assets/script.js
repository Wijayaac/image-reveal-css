"use strict";

let itemElms = document.querySelectorAll(".list-item");
let i = 1;

itemElms.forEach((item) => {
  let listLInk = item.querySelector(".list-link");
  let imgSource = item.querySelector(".list-link").getAttribute("data-img");

  let imageElm = item.querySelector(`.list-img-${i}`);

  let imageWrapper = item.querySelector(".list-img-wrapper");

  imageElm.style.backgroundImage = `url('./assets/images/${imgSource}`;

  item.querySelector(".list-link").addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    // imageWrapper.style.transform = `translate(-${x}px, -${y}px)`;
    imageWrapper.style.left = `${x}px`;
    imageWrapper.style.top = `${y}px`;
  });
  item.querySelector(".list-link").addEventListener("mouseleave", (e) => {
    imageWrapper.style.left = `unset`;
    imageWrapper.style.top = `unset`;
  });
  i++;
});
