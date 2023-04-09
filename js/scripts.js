//Business Logic for Pizza-----------

function Pizza(size, style, sauce, toppings, sides, delivery) {
this.size = size;
this.style = style;
this.sauce = sauce;
this.toppings = toppings;
this.sides = sides;
this.price = this.getCost();
this.delivery = delivery
}

Pizza.prototype.getCost = function() {
  let cost = 10;
  this.delivery = [Boolean];
  if (this.size === "medium") {
    cost += 3;
  } else if (this.size === "large") {
    cost += 6;
  } 
  cost += this.toppings.length * 2;
  cost += this.sides.length;
  if(this.delivery) {
    cost += 5
  }
  return `$${cost}.00`;
}
let testPizza = new Pizza("small", "regular", "red", ["pepperoni", "olive"], ["soda", "brownie"], true);

//UI Logic


