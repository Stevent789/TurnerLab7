var GrocList = [
  {
    name: "pizza",
    price:5
  },
  {
    name: "milk",
    price:3
  },
  {
    name: "bread",
    price:2
  },
  {
    name: "cookies",
    price:3
  },
  {
    name: "eggs",
    price:2
  },
  {
    name: "donuts",
    price:3
  },
  {
    name: "ice cream",
    price: 4
  },
  {
    name: "cereal",
    price:10
  },
  {
    name: "bananas",
    price:20
  },
  {
    name: "pears",
    price:12
  }
];


GrocList.forEach(function(item) {
  console.log(item.name);
  console.log(item.price);
})

var total = 0
var pay = "Your subtotal is "
var pay2 = "Your total is "
var tax = 1.06
GrocList.forEach(function(cost) {
  total += cost.price
})


console.log(pay + total + " dollars");
console.log(pay2 + total * tax + " dollars")
