//Business Logic for Pizza-----------

const sizes = ["small", "medium", "large"];
const styles = ["regular", "deep-dish", "thin-crust"]

function Pizza(size, style, sauce, meatTop, vegTop, crust) {
this.size = this.chooseSize(size);
this.style = this.chooseStyle(style);
this.sauce = sauce;
this.meatTop = meatTop;
this.vegTop = vegTop;
this.crust = crust;
}

Pizza.prototype.chooseSize = function(size) {
  return sizes[size]; 
}

Pizza.prototype.chooseStyle = function(style) {
  return styles[style];
}

let testPizza = new Pizza(0, 0, "red", "pepperoini", "olive");