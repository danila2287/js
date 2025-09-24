// Задача1
function calculateFinalPrice(price, discont, tax) {
  let result;
  result =
    price - price * (discont / 100) + (price - price * (discont / 100)) * tax;
  return result;
}
console.log(calculateFinalPrice(100, 10, 0.2));

// Задача2

const checkAccess = (name, password) => {
  if (name == "admin" && password == 123456) {
    return "Доступ разрешен!";
  } else {
    return "Доступ запрещен!";
  }
};
console.log(checkAccess("admin", 123457));

// Задача 3

function getTimeOfDay(day) {
  switch (true) {
    case day >= 0 && day <= 5:
      return "Ночь";
    case day >= 6 && day <= 11:
      return "Утро";
    case day >= 12 && day <= 17:
      return "День";
    case day >= 18 && day <= 23:
      return "Вечер";
    default:
      return "Некорректное время";
  }
}
console.log(getTimeOfDay(19));

// Задача4

const findFirstEven = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      return i;
    }
  }
  return "Чётных чисел нет";
};
console.log(findFirstEven(5, 7));
