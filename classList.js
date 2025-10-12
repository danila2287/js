"use strict";

// const { createElement } = require("  react");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  // if (button.classList.contains("red")) {
  //contains позволяет передать  названия классов которые присутствуют у элемента
  //   button.classList.remove("red");
  // } else {
  //   button.classList.add("red");
  // classList это метод который может что-то делать, например  добавлять какие-либо классы удалять
  // }

  //есть метод toggle , который работает так же как и условие выше (например, переключения света)
  button.classList.toggle("red");
});

const input = document.querySelector("input");

input.addEventListener("input", () => {
  input.classList.toggle("red");
});
const box = document.querySelector(".box");

button.addEventListener("click", () => {
  box.classList.toggle("visible");

  const box2 = document.createElement("div"); // добовляем html код div елемент в данном случае;
  box2.classList.add("box");
  box2.textContent = "test";
  box.after(box2);
});

box.insertAdjacentHTML("afterbegin",`<p>123</p>`);//дщбавляет html теги до после и внутри класса бокс 


// box.textContent="Это коробка";

// box.innerHTML=`
// <div>
//   <a href="#">Link</a>
// </div>
// <p>123</p>
// <button>button</button>
// `;

// проблема innerHTML в том, что мы перезаписываем все что находилось в нашем случае классе box

// box.outerHTML=`
// <div>
//   <a href="#">Link</a>
// </div>
// <p>123</p>
// <button>button</button>
// `;

// outerHTML тут мы перезаписываем вместк с классом бокс;
console.log(box.innerHTML);


// document.addEventListener("submit",(event)=>{
  // event.preventDefault(); отменяет перезагрузку страницы
  // event.stopPropagation();отменяет всплытие событий
// })