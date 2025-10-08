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
 