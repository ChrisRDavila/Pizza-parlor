//Business Logic for Pizza-----------

//const sizes = [
//  {id: 1, name: "small", value: 10}, 
//  {id: 2, name: "medium", value: 13},
//  {id: 3, name: "large", value: 16}
//];
//let ids = sizes.map( (item) => item.id);
//let names = sizes.map((item) => item.name);
//let values = sizes.map((item) => item.value);

const styles = ["regular", "deep-dish", "thin-crust"]
const sauces = ["red", "white", "BBQ"];
const meats = ["none", "pepperoni", "sausage"];
const veggies = ["none", "olive", "bell-pepper"];



function Pizza(size, style, sauce, meatTop, vegTop, price) {
this.size = this.chooseSize(size);
this.style = this.chooseStyle(style);
this.sauce = this.chooseSauce(sauce);
this.meatTop = this.chooseMeat(meatTop);
this.vegTop = this.chooseVeg(vegTop);
//this.price = this.cost(price);
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
//Pizza.prototype.cost = function(){

//}
 
let testPizza = new Pizza(0, 0, 0, [1, 2], 0);

//Business Logic for Map properties

function PropertyMap = (id, name, value) {
  this.id = id;
  this.name = name;
  this.value = value;
}

const SmallSizeMap = new Map([
  [id, 0],
  ["name", "small"],
  [value, 10]
])
const MediumSizeMap =  new Map([
  [id, 1],
  ["name", "small"],

])