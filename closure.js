"use strict";
//Замыкания

// 1 пример
const x = 10;

function func1() {
  console.log(x);
}

function func2(funArg) {
  const x = 20;
  funArg();
}

func2(func1);
//Выведет 10

// 2 пример

function funct1() {
  const y = 15;
  return function () {
    return y * 2;
  };
}

const funct2 = funct1();
console.log(funct2());

//пример 3
const useCounter = () => {
  let count = 0;
  const increment = () => {
    return ++count;
  };
  const decrement = () => {
    return --count;
  };

  return {
    increment,
    decrement,
  };
};

const counter = useCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

