//Business Logic for Pizza-----------

const sizes = ["small", "medium", "large"];
const styles = ["regular", "deep-dish", "thin-crust"]
const sauces = ["red", "white", "BBQ"];
const meats = ["none", "pepperoni", "sausage"];
const veggies = ["none", "olive", "bell-pepper"];



function Pizza(size, style, sauce, meatTop, vegTop, crust) {
this.size = this.chooseSize(size);
this.style = this.chooseStyle(style);
this.sauce = this.chooseSauce(sauce);
this.meatTop = this.chooseMeat(meatTop);
this.vegTop = this.chooseVeg(vegTop);
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
  return meats[meatTop];
}
Pizza.prototype.chooseVeg = function(vegTop) {
  return veggies[vegTop];
}
 
let testPizza = new Pizza(0, 0, 0, 0, 0);
