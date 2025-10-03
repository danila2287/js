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
      i++; // ✅ пропускаем следующий символ
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

console.log(solution("MDCLXVI")); // 1666
