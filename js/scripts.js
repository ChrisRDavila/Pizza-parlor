//Business Logic for Pizza-----------

function Pizza(size, style, sauce, toppings, sides, delivery) {
this.size = size;
this.style = style;
this.sauce = sauce;
this.toppings = toppings;
this.sides = sides;
this.delivery = delivery
this.price = this.getCost();
}
// Pizza.prototype.sizePrice = function() {
//   if (this.size === "small"){
//     this.price = 10;
//   }
//   else if (this.size === "medium") {
//     this.price = 13;
//   }
//   else {
//     this.price = 16;
//   }
//   return this.price
// }
// Pizza.prototype.toppingsPrice = function() {
//    return this.price += (this.toppings.lenght * 2);
// }
// Pizza.prototype.sidesPrice = function() {
//   return this.price += (this.sides.length);
// }
// Pizza.prototype.deliveryPrice = function() {
//   if (this.delivery === true) {
//     return this.price
//   }
// }
Pizza.prototype.getCost = function() {
  let cost = 10;
  this.delivery = [Boolean];
  if (this.size === "medium") {
    cost += 3;
  } else if (this.size === "large") {
    cost += 6;
  } 
  this.toppings = [];
  cost += this.toppings.length * 2;
  this.sides = [];
  cost += this.sides.length;
  //remove hidden class for delivery
  if(this.delivery) {
    cost += 5
  }
  return `$${cost}.00`;
}
// let testPizza = new Pizza("small", "regular", "red", ["pepperoni", "olive"], ["soda", "brownie"], true);

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedSize = document.querySelector("#size").value;
  const inputtedStyle = document.querySelector("#style").value;
  const inputtedSauce = document.querySelector("#sauce").value;
  const toppingOptions = document.querySelectorAll(".top-class:checked")
  const selectedToppings =[];
  //let toppingsArray = []
  //("input:checkbox[name=topping-item]:checked").each(function(){
  //  toppingsArray.push($(this).val());
  //});
  for (i = 0; i <= toppingOptions.length; i ++) {
    //if(toppingOptions[i].value === "checked") {
      selectedToppings.push(toppingOptions);
    }
  }
  // const inputtedSides = document.querySelectorAll(".side-class");
  // const selectedSides = [];
  // for (i = 0; i < inputtedSides.length; i ++)
  //   if(inputtedSides[i].value==="checked");{
  //     selectedSides.push("stringvalueofsidesstring")
  //   }
  const inputtedDelivery = document.querySelector("#yes-delivery").value;
  let pizza = new Pizza(inputtedSize, inputtedStyle, inputtedSauce, toppingsArray, selectedSides, inputtedDelivery);
  displayNewOrder(pizza);
  if (inputtedDelivery === true) {
    document.querySelector("#delivery-info").removeAttribute("class");
    }  
}
// function displayNewOrder(pizza) {
//   document.querySelector(".order-size").innerText = pizza.size;
//   document.querySelector(".order-style").innerText = pizza.style;
//   document.querySelector(".order-sauce").innerText = pizza.sauce;
//   document.querySelector(".order-toppings").innerText = pizza.toppings;
//   document.querySelector(".order-sides").innerText = pizza.sides;
//   document.querySelector(".order-price").innerText = pizza.price;
// }
// function displayDeliveryInfo(){
//   document.querySelector("#delivery-submit").addEventListener("submit", displayNewOrder)
//   let deliveryName = document.querySelector("#delivery-name-input").value;
//   let deliveryAddress = document.querySelector("#delivery-address-input").value;
//   document.querySelector("delivery-name").innerText = deliveryName;
//   document.querySelector("delviery-address").innerText = deliveryAddress;
// }

window.addEventListener("load", function(){
  document.querySelector("form#pizza-form").addEventListener("submit", handleFormSubmission);
});

