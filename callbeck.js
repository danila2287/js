"use strict";
// callback-функции и функции первого класса.

// callback-функции это функция которую мы передаем в качестве аргумента в другую функцию

// ПРИМЕР

// const myFunct = function (name) {
//   console.log(name + " func1");
// };

// const myFunct2 = () => {
//   console.log("LOG2!");
// };

// function callFunc(func) {
//   const name = "Bob";
//   func(name);
// }

// callFunc(myFunct);
// callFunc(myFunct2);

function checkAge(age, callbeck) {
  if (age >= 18) {
    callbeck("доступ разрешен");
  } else {
    callbeck();
  }
}

function showMessage(message){
  console.log(message)
}
function errorMessage(message){
  console.error("ERROR")
}

checkAge(20, showMessage)
checkAge(16, errorMessage)
