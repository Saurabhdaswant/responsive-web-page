"use strict";

document.querySelector(".ham").addEventListener("click", function () {
  document.querySelector("nav").style.display = "flex";
  document.querySelector(".close").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector("nav").style.display = "none";
  document.querySelector(".close").style.display = "none";
});
