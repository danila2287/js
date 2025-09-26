let userName = {
  name: "Alex",
  age: 30,
  "user-city": "Moscow",
  greet: function (name) {
    // ведет себя также, как запись function greet(name){}
    console.log(`Привет, ${name}`);
  },
};

userName.greet("Bob");

//----------------------------------------------------------------------

const product = {
  name: "Ноутбук",
  price: 10000,
  discount:10,
  characteristics: {
    brand: "MSI",
    processor: "intel core i5",
  },
};
console.log(product.characteristics.brand);

// --------------------------------------
const checkDiscount = (product) => {
  if (product.discount == undefined) {
    return "Cкидки нет";
  } else {
    return `Скидка ${product.discount}%`;
  }
};

console.log(checkDiscount(product));