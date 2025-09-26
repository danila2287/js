// Function Declaration
// Создается до начала выполнения скрипта, можно вызывать перед объявлением
function sumAndAl(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

const result = sumAndAl(6, 10);
console.log(result);

function isEven(num) {
  if (num % 2 == 0) {
    return "число четное";
  } else {
    return "число нечетное";
  }
}
console.log(isEven(result));

function greet(name) {
  return `Привет, ${name}`;
}

// Function Expression
// Cоздается только тогда, когда доходит поток кода, можно вызывать только после объявления

const greet = function (name) {
  return `Привет, ${name}`;
};

console.log(greet("Боб"));

// Стрелочные функции
// Не имеют своего контекста

const factorial = (num)=> {
  let factr = 1;
  for (let i = 1; i <= num; i++) {
    factr = factr * i;
  }
  return factr;
};

console.log(factorial(5));

const isEven= (num)=>{
    return num%2==0
}
console.log(isEven(6))

// самовызывающаяся функция вызывается на месте

(function log(x){
    console.log(x);
})("LOG!")





