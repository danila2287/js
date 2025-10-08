"use strict";

// задача 1
const number = (num) => {
  if (num >= 0) {
    let count = [];
    count = num
      .toString()
      .split("")
      .sort((a, b) => {
        return b - a;
      });
    return Number(count.join(""));
  }
};
console.log(number(123456789));

// задача 2
const alphabetPosition = (text) => {
  if (typeof text != "string") {
    return "";
  }
  const str = text;
  const res = [];
  str.split("").forEach((num) => {
    switch (num.toLowerCase()) {
      case "a":
        res.push("1");
        break;
      case "b":
        res.push("2");
        break;
      case "c":
        res.push("3");
        break;
      case "d":
        res.push("4");
        break;
      case "e":
        res.push("5");
        break;
      case "f":
        res.push("6");
        break;
      case "g":
        res.push("7");
        break;
      case "h":
        res.push("8");
        break;
      case "i":
        res.push("9");
        break;
      case "j":
        res.push("10");
        break;
      case "k":
        res.push("11");
        break;
      case "l":
        res.push("12");
        break;
      case "m":
        res.push("13");
        break;
      case "n":
        res.push("14");
        break;
      case "o":
        res.push("15");
        break;
      case "p":
        res.push("16");
        break;
      case "q":
        res.push("17");
        break;
      case "r":
        res.push("18");
        break;
      case "s":
        res.push("19");
        break;
      case "t":
        res.push("20");
        break;
      case "u":
        res.push("21");
        break;
      case "v":
        res.push("22");
        break;
      case "w":
        res.push("23");
        break;
      case "x":
        res.push("24");
        break;
      case "y":
        res.push("25");
        break;
      case "z":
        res.push("26");
        break;
    }
  });

  return res.join(" "); // Возвращаем результат здесь
};
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// задача 3

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

// задача 4
// function duplicateCount(text) {
//   array = text.toLowerCase().split("").sort();
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == array[i + 1]) {
//       sum++;
//       while (array[i] == array[i + 1]) {
//         i++;
//       }
//     }
//   }
//   return sum;
// }
// console.log(duplicateCount("Indivisibilities"));
// задача 5
function openOrSenior(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}
console.log(
  openOrSenior([
    [67, 6],
    [15, 20],
    [65, 29],
  ])
);
//задача 6
function findOutlier(integers) {
  let couty = 0;
  let coutn = 0;
  let chet, nechet;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      couty++;
      chet = integers[i];
    } else {
      coutn++;
      nechet = integers[i];
    }
  }
  if (couty == 1) {
    return chet;
  } else {
    return nechet;
  }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

//задача 7

// function findNb(m) {
//   let res = 0;
//   for (let i = 1; i < m; i++) {
//     res = 0;
//     for (let j = 0; j < i; j++) {
//       res += (i - j) ** 3;
//     }

//     if (res == m) {
//       return i;
//     } else if (res > m) {
//       return -1;
//     }
//   }
//   return -1;
// }
// console.log(findNb(1071225));

function findNb(m) {
  let total = 0;
  let n = 1;

  while (total < m) {
    total += n ** 3;
    if (total === m) return n;
    n++;
  }
  return -1;
}

//задача 8
// match(/\d/) - это метод для поиска цифр в строке с помощью регулярных выражений.
function order(words) {
  const array = words.split(" ");
  const sum = array.sort((a, b) => {
    return a.match(/\d/) - b.match(/\d/);
  });
  return sum.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));

// задача 9
function countSmileys(arr) {
  let sum = 0;
  const filtrArr = arr.filter((smail) => {
    if (
      smail == ":-)" ||
      smail == ":)" ||
      smail == ":~)" ||
      smail == ":~D" ||
      smail == ":-D" ||
      smail == ":D" ||
      smail == ";-)" ||
      smail == ";)" ||
      smail == ";~D" ||
      smail == ";~)" ||
      smail == ";-D" ||
      smail == ";D"
    ) {
      return true;
    }
  });

  for (let i = 0; i < filtrArr.length; i++) {
    sum++;
  }
  return sum;
}
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));

// задача 10
function solution(roman) {
  const arr = roman.split("");
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "C" && arr[i + 1] === "M") {
      total += 900;
      i++; //
    } else if (arr[i] === "C" && arr[i + 1] === "D") {
      total += 400;
      i++;
    } else if (arr[i] === "X" && arr[i + 1] === "C") {
      total += 90;
      i++;
    } else if (arr[i] === "X" && arr[i + 1] === "L") {
      total += 40;
      i++;
    } else if (arr[i] === "I" && arr[i + 1] === "X") {
      total += 9;
      i++;
    } else if (arr[i] === "I" && arr[i + 1] === "V") {
      total += 4;
      i++;
    } else if (arr[i] === "M") {
      total += 1000;
    } else if (arr[i] === "D") {
      total += 500;
    } else if (arr[i] === "C") {
      total += 100;
    } else if (arr[i] === "L") {
      total += 50;
    } else if (arr[i] === "X") {
      total += 10;
    } else if (arr[i] === "V") {
      total += 5;
    } else if (arr[i] === "I") {
      total += 1;
    }
  }
  return total;
}

console.log(solution("MDCLXVI"));

//задача 11
function sortArray(arrs) {
  const arrChetNum = [];
  const arrChetInd = [];
  const newArr = arrs.map((num, index) => {
    if (num % 2 == 0) {
      arrChetNum.push(num);
      arrChetInd.push(index);
    }
  });
  let arrSort = arrs
    .sort((a, b) => {
      return a - b;
    })
    .filter((num) => {
      return num % 2 != 0;
    });
  for (let i = 0; i < arrChetNum.length; i++) {
    arrSort.splice(arrChetInd[i], 0, arrChetNum[i]);
  }
  return arrSort;
}
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

//задача12

function moveZeros(arr) {
  let count = 0;
  arr.forEach((element) => {
    if (element === 0) {
      count++;
    }
  });
  const newArr = arr.filter((num) => {
    return num !== 0;
  });
  let result = newArr;
  for (let i = 0; i < count; i++) {
    result.push(0);
  }
  return result;
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
//Задача 13
//Постройте башню в форме пирамиды в виде массива/списка
//  строк с заданным положительным целым числом .
//  Многоэтажный дом представлен с персонажем.number of floors"*"
//Например, башня с этажами выглядит так:
function towerBuilder(nFloors) {
  let spruce = [];
  let str = "";
  let maxWidth = 2 * nFloors - 1;
  // Метод repeat() создает новую строку, повторяя исходную строку указанное количество раз.
  for (let i = 0; i < nFloors; i++) {
    str = "*".repeat(2 * i + 1);
    let spaces = " ".repeat((maxWidth - str.length) / 2);
    spruce.push(spaces + str + spaces);
  }
  return spruce;
}
console.log(towerBuilder(10));
// задача 14
function findUniq(arr) {
  // Проверяем первые три элемента чтобы найти повторяющийся
  if (arr[0] === arr[1]) {
    // arr[0] и arr[1] одинаковые, ищем элемент который от них отличается
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== arr[0]) return arr[i];
    }
  } else {
    // arr[0] и arr[1] разные, уникальный один из них
    // Проверяем какой из них повторяется с arr[2]
    return arr[0] === arr[2] ? arr[1] : arr[0];
  }
}

// задача 15
// класс RomanNumerals Вызываются напрямую: RomanNumerals.toRoman(5)
class RomanNumerals {
  static toRoman(num) {
    const arrStr = String(num).split("");
    const numArray = arrStr.map((str) => Number(str));
    let sum = [];
    let zain = 1;
    for (let i = numArray.length - 1; i >= 0; i--) {
      sum.push(numArray[i] * zain);
      zain *= 10;
    }
    const arrResult = sum.reverse();
    let res = [];
    const newArr = arrResult.map((num) => {
      const numStr = num.toString();
      const firstDigit = parseInt(numStr[0]);

      if (firstDigit >= 6 && firstDigit <= 8) {
        const zerosCount = numStr.length - 1;
        const base = 5 * Math.pow(10, zerosCount);
        const add = (firstDigit - 5) * Math.pow(10, zerosCount);

        if (base === 2) {
          res.push(1);
          res.push(1);
        } else if (base === 3) {
          res.push(1);
          res.push(1);
          res.push(1);
        } else {
          res.push(base);
        }

        if (add === 2) {
          res.push(1);
          res.push(1);
        } else if (add === 3) {
          res.push(1);
          res.push(1);
          res.push(1);
        } else {
          res.push(add);
        }
      } else if (firstDigit === 3) {
        const part = num / 3;
        res.push(part);
        res.push(part);
        res.push(part);
      } else if (firstDigit === 2) {
        const part = num / 2;
        res.push(part);
        res.push(part);
      } else {
        res.push(num);
      }
    });
    let strRes = "";
    for (let j = 0; j < res.length; j++) {
      if (res[j] == 1000) strRes += "M";
      else if (res[j] == 900) strRes += "CM";
      else if (res[j] == 800) strRes += "DCCC";
      else if (res[j] == 700) strRes += "DCC";
      else if (res[j] == 600) strRes += "DC";
      else if (res[j] == 500) strRes += "D";
      else if (res[j] == 400) strRes += "CD";
      else if (res[j] == 300) strRes += "CCC";
      else if (res[j] == 200) strRes += "CC";
      else if (res[j] == 100) strRes += "C";
      else if (res[j] == 90) strRes += "XC";
      else if (res[j] == 80) strRes += "LXXX";
      else if (res[j] == 70) strRes += "LXX";
      else if (res[j] == 60) strRes += "LX";
      else if (res[j] == 50) strRes += "L";
      else if (res[j] == 40) strRes += "XL";
      else if (res[j] == 30) strRes += "XXX";
      else if (res[j] == 20) strRes += "XX";
      else if (res[j] == 10) strRes += "X";
      else if (res[j] == 9) strRes += "IX";
      else if (res[j] == 8) strRes += "VIII";
      else if (res[j] == 7) strRes += "VII";
      else if (res[j] == 6) strRes += "VI";
      else if (res[j] == 5) strRes += "V";
      else if (res[j] == 4) strRes += "IV";
      else if (res[j] == 3) strRes += "III";
      else if (res[j] == 2) strRes += "II";
      else if (res[j] == 1) strRes += "I";
    }
    return strRes;
  }

  static fromRoman(roman) {
    const arr = roman.split("");
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "C" && arr[i + 1] === "M") {
        total += 900;
        i++; //
      } else if (arr[i] === "C" && arr[i + 1] === "D") {
        total += 400;
        i++;
      } else if (arr[i] === "X" && arr[i + 1] === "C") {
        total += 90;
        i++;
      } else if (arr[i] === "X" && arr[i + 1] === "L") {
        total += 40;
        i++;
      } else if (arr[i] === "I" && arr[i + 1] === "X") {
        total += 9;
        i++;
      } else if (arr[i] === "I" && arr[i + 1] === "V") {
        total += 4;
        i++;
      } else if (arr[i] === "M") {
        total += 1000;
      } else if (arr[i] === "D") {
        total += 500;
      } else if (arr[i] === "C") {
        total += 100;
      } else if (arr[i] === "L") {
        total += 50;
      } else if (arr[i] === "X") {
        total += 10;
      } else if (arr[i] === "V") {
        total += 5;
      } else if (arr[i] === "I") {
        total += 1;
      }
    }
    return total;
  }
}
console.log(RomanNumerals.toRoman(715));
console.log(RomanNumerals.fromRoman("DCCXV"));
// +--------+-------+
// | Symbol | Value |
// +--------+-------+
// |    M   |  1000 |
// |   CM   |   900 |
// |    D   |   500 |
// |   CD   |   400 |
// |    C   |   100 |
// |   XC   |    90 |
// |    L   |    50 |
// |   XL   |    40 |
// |    X   |    10 |
// |   IX   |     9 |
// |    V   |     5 |
// |   IV   |     4 |
// |    I   |     1 |
// +--------+-------+
