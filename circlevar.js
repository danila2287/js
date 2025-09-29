"use strict";

// Лексические окружения или область видимости и var

//
const x = 5;

function log() {
  console.log(x);

  let y = 17;
  function innerLog() {
    console.log(y);
  }
  innerLog();
}

log();


//console.log(y);
//выведет ошибку так как мы пытаемся запросить у дочернего эдемента, но мы можем запрашивать как бы ссылки только от дочерних элементов к родительским

// if(true){
//   const test=15;
// }
// console.log(test)

//такая же ошибка circle.js:27  Uncaught ReferenceError: test is not defined

// Есть область видимости блока и есть область видемости функуии
//Так var позволяет в блоке(циклы, условия) видемости кода распознать переменные, но в функции нет

if (true){
  var test2=10;
}
console.log(test2);