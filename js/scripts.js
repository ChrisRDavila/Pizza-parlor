//Business Logic for Pizza-----------

const sizes = ["small", "medium", "large"];
const styles = ["regular", "deep-dish", "thin-crust"]
const sauces = ["red", "white", "BBQ"];
let meats = [
  {id: 0, value: "none"},
  {id: 1, value: "pepperoni"},
  {id: 2, value: "sausage"}
]
  let ids = meats.map((item)=>item.id);
  let values = meats.map((item)=>item.value); 



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
 
let testPizza = new Pizza(0, 0, 0, 0,"olives");
