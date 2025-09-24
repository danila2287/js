// const a = +prompt("Введите первое число", 0);
// const b = +prompt("Введите второе число", 0);
// let max;
// if(a>b){
//     max=a;
// }
// else{
//     max=b;
// }
// const max = a > b ? a * 2 : b + 3;
// const max = !isNaN(a) || !isNaN(b) ? (a > b ? a : b) : "Что-то пошло не так";
//   a !== NaN && b !== NaN ? (a > b ? a : b) : ("Что-то пошло не так");
// console.log(max);

// Урок 14

// 1 задача

let g = +prompt("Введите число g");
if (g % 2 == 0) {
  alert("число четное");
} else {
  alert("число нечетное");
}

// Задача 2

const age =+prompt("Введите возраст");
const discont = !isNaN(age) && age>=0? ((age<18)?"Скидка 10%":((age >= 18 && age <= 65)? "Скидка 20%": "Скидка 30%")):"неверный возраст";

alert(discont)

// задача 2*

switch(true){
    case (age>=0 && age<18):
        discont="скидка 10%";
        alert(discont);
        break;
    case (age >= 18 && age <= 65):
        discont="скидка 20%";
        alert(discont);
        break;
    case (age>65):
        discont="скидка 30%";
        alert(discont);
        break;
    default:
        alert("неверный возраст")
}

    

