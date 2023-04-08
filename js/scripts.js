//Business Logic for Pizza-----------

// const sizes = [
//   {id: 0, name: "small", value: 10}, 
//   {id: 1, name: "medium", value: 13},
//   {id: 2, name: "large", value: 16}
// ];
// let sizeID = sizes.map((item) => item.id);
// let sizeNames = sizes.map((item) => item.name);
// let sizeValues = sizes.map((item) => item.value);

// const styles = [
//   {id: 0, name: "regular", value: 0},
//   {id: 1, name: "deep-dish", value: 2},
//   {id: 2, name: "thin-crust", value: 1}
// ]
// let styleID = styles.map((item) => item.id);
// let styleName = styles.map((item) => item.name);
// let styleValues = styles.map((item) => item.value);

// const sauces = [
//   {id: 0, name: "red", value: 0},
//   {id: 1, name: "white", value: 1},
//   {id: 2, name: "BBQ", value: 1},
// ]
// let sauceID = sauces.map((item) => item.id);
// let sauceName = sauces.map((item) => item.name);
// let sauceValue = sauces.map((item) => item.value);

// const meats = [
//   {id: 0, name: "none", value: 0},
//   {id: 1, name: "pepperoni", value: 1},
//   {id: 2, name: "sausage", value: 1}
// ]
// let meatID = meats.map((item) => item.id);
// let meatName = meats.map((item) => item.name);
// let meatValue = meats.map((item) => item.value);

// const veggies = [
//   {id: 0, name: "none", value: 0},
//   {id: 1, name: "olive", value: 1},
//   {id: 2, name: "bell-pepper", value: 1}
// ]
// let vegID = veggies.map((item) => item.id);
// let vegName = veggies.map((item) => item.name);
// let vegValue = veggies.map((item) => item.value);

// const sides = [
//   {id: 0, name: "none", value: 0},
//   {id: 1, name: "Pepsi", value: 1},
//   {id: 2, name: "ranch-dressing", value: 1}
// ]
// let sideID = sides.map((item) => item.id);
// let sideName = sides.map((item) => item.name);
// let sideValue = sides.map((item) => item.value);

function Pizza(size, style, sauce, toppings, side, deliveryOption) {
this.size = size;
this.style = style;
this.sauce = sauce;
this.toppings = toppings;
//this.side = this.chooseSide(side);
this.price = this.getCost();
//this.deliveryOption = deliveryOption
}

Pizza.prototype.getCost = function() {
  let cost = 10;
  if (this.size === "medium") {
    cost += 5;
  } else if (this.size === "large") {
    cost += 10
  } cost += this.toppings.length * 2;
  return cost;
}
let testPizza = new Pizza("small", "regular", "red", ["pepperoni", "olive"]);
// Pizza.prototype.chooseSauce = function(sauce) {
//   return sauces[sauce];
// }
// Pizza.prototype.chooseMeat = function(meatTop) {
//   return meats[meatTop];
// }
// Pizza.prototype.chooseVeg = function(vegTop) {
//   return veggies[vegTop];
// }
// Pizza.prototype.chooseSide = function(side) {
//   return sides[side];
//}

// Pizza.prototype.cost = function(){
//   let pizzaPrice = this.size.value + this.style.value + this.sauce.value + this.meatTop.value + this.vegTop.value + this.side.value;
//   if (this.deliveryOption === true){
//     pizzaPrice
//   }
//   return pizzaPrice 
// }
// Pizza.prototype.addCost = function(deliveryOption){
//   if(deliveryOption === true) {
//     //remove.hidden
//     this.cost.price += 5;
//   } else {
//   return this.cost.price;
//   }
// }
 


//Business Logic for Delivery

// function Delivery(nickname, address, deliverPrice, timeEst){
//   this.nickname = nickname;
//   this.address = address;
//   this.deliverPrice = deliverPrice;
//   this.timeEst = timeEst;
// }
// Delivery.prototype.totalPrice = function(){
//   if 
// }
// let testOrder = new Delivery("jeff", "77 E Grand", "25", "30 min");

