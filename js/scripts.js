//Business Logic for Pizza-----------

const sizes = ["small", "medium", "large"];

function Pizza(size, style, sauce, meatTop, vegTop) {
this.size = this.chooseSize(size);
this.style = style;
this.sauce = sauce;
this.meatTop = meatTop;
this.vegTop = vegTop;
}




Pizza.prototype.chooseSize = function(size) {
  return sizes[size]; 
}

let testPizza = new Pizza(0, "detroit", "red", "pepperoini", "olive");