//Business Logic for Pizza-----------

const sizes = ["small", "medium", "large"];
const styles = ["regular", "deep-dish", "thin-crust"]
const sauces = ["red", "white", "BBQ"];
const meats = new Map();
meats.set(0, "none");
meats.set(1, "pepperoni");
meats.set(2, "sausage");


function Pizza(size, style, sauce, meatTop, vegTop, crust) {
this.size = this.chooseSize(size);
this.style = this.chooseStyle(style);
this.sauce = this.chooseSauce(sauce);
this.meatTop = this.chooseMeat[meatTop];
this.vegTop = vegTop;
this.crust = crust;
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
 
let testPizza = new Pizza(0, 0, 0, [1][2],"olives");
let testPizza = new Pizza(0, 0, 0, meatCombo, "olive");
 or 