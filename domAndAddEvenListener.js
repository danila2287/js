// console.log(document.getElementById("title"));

// const title=document.getElementById("title");
// title.textContent="DOM!";
// title.id="dom";
const boxes = document.querySelectorAll(".box");
// boxes.id = "DOM";
// title.textContent = "Text";
// console.log(title.textContent);
boxes.forEach((element) => {
  element.className = "box box-red";
  element.style.fontSize = "20px";
});
// console.log(boxes);
function log1() {
  console.log(1);
}
// function log2() {
//   console.log(2);
// }

const button = document.querySelector("button");
// button.onclick = log1;
// button.onclick = log2;
const clickFn = () => {
  console.log("click");
};
//слушатель событий, событие click , выпоняем стрелочную функции; вместо стрелочной функции можно
// вставить другую функции и будет при клике на кнопку срабатывать еще и другфя функция
button.addEventListener("click", clickFn);
button.addEventListener("click", log1);

document.addEventListener("scroll", () => {
  console.log("scroll");
});

const textInp = document.querySelector("input");
textInp.addEventListener("input", () => {
  console.log("input");
});

const buttonRemove = document.querySelector("button.remove");

buttonRemove.addEventListener("click", () => { 
  button.removeEventListener("click", clickFn);//removeEventListener  удаление события по клику
});


