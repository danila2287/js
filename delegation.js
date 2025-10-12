"use strict";

// const buttons = document.querySelectorAll(".btn");

// buttons.forEach(button=>{
// button.addEventListener("click",(event)=>{
// // console.log(`Клик на элементе ${button.textContent}`)
// console.log("Клик на элементе " + event.target.textContent)
// })
// })

// ======================

const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", (event) => {
  // if (event.target.tagName == "BUTTON") {
  if (event.target.classList.contains("btn")) {
    console.log(event.target);
  }
});
