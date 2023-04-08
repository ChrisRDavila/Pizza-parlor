//Business Logic for Pizza-----------

const sizes = [
  {id: 0, name: "small", value: 10}, 
  {id: 1, name: "medium", value: 13},
  {id: 2, name: "large", value: 16}
];
let sizeID = sizes.map((item) => item.id);
let sizeNames = sizes.map((item) => item.name);
let sizeValues = sizes.map((item) => item.value);

const styles = [
  {id: 0, name: "regular", value: 0},
  {id: 1, name: "deep-dish", value: 2},
  {id: 2, name: "thin-crust", value: 1}
]
let styleID = styles.map((item) => item.id);
let styleName = styles.map((item) => item.name);
let styleValues = styles.map((item) => item.value);

const sauces = [
  {id: 0, name: "red", value: 0},
  {id: 1, name: "white", value: 1},
  {id: 2, name: "BBQ", value: 1},
]
let sauceID = sauces.map((item) => item.id);
let sauceName = sauces.map((item) => item.name);
let sauceValue = sauces.map((item) => item.value);

const meats = [
  {id: 0, name: "none", value: 0},
  {id: 1, name: "pepperoni", value: 1},
  {id: 2, name: "sausage", value: 1}
]
let meatID = meats.map((item) => item.id);
let meatName = meats.map((item) => item.name);
let meatValue = meats.map((item) => item.vlaue);

const veggies = [
  {id: 0, name: "none", value: 0},
  {id: 1, name: "olive", value: 1},
  {id: 2, name: "bell-pepper", value: 1}
]
let vegID = veggies.map((item) => item.id);
let vegName = veggies.map((item) => item.name);
let vegValue = veggies.map((item) => item.value);



function Pizza(size, style, sauce, meatTop, vegTop, sides, price) {
this.size = this.chooseSize(size);
this.style = this.chooseStyle(style);
this.sauce = this.chooseSauce(sauce);
this.meatTop = this.chooseMeat(meatTop);
this.vegTop = this.chooseVeg(vegTop);
//this.sides = this.chooseSide(sides);
this.price = this.cost(price);
}

Pizza.prototype.chooseSize = function(size) {
  return sizes[size]; 
}

Pizza.prototype.chooseStyle = function(style) {
  return styles[style];
}
Pizza.prototype.chooseSauce = function(sauce) {
  return sauces[sauce];
}
Pizza.prototype.chooseMeat = function(meatTop) {
  //meatTop = [meats, meats];
  return meats[meatTop];
}
Pizza.prototype.chooseVeg = function(vegTop) {
  return veggies[vegTop];
}
Pizza.prototype.cost = function(){
  let pizzaPrice = this.size.value + this.style.value + this.sauce.value + this.meatTop.value + this.vegTop.value;
  return pizzaPrice 
}
 
let testPizza = new Pizza(0, 1, 1, 1, 1);

//Business Logic for Delivery

//function Delivery(nickname, address, totPrice, timeEst){
  this.nickname = nickname;

//}

