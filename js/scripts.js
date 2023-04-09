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
  //remove hidden class for delivery
  if(this.delivery) {
    cost += 5
  }
  return `$${cost}.00`;
}
//let testPizza = new Pizza("small", "regular", "red", ["pepperoni", "olive"], ["soda", "brownie"], true);

//UI Logic



function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedSize = document.querySelector("#size").value;
  const inputtedStyle = document.querySelector("#style").value;
  const inputtedSauce = document.querySelector("#sauce").value;
  const inputtedToppings = document.querySelector("#top-selection").value;
  const inputtedSides = document.querySelector("#side-selection").value;
  const inputtedDelivery = document.querySelector("#delivery-selection").value;
  let pizza = new Pizza(inputtedSize, inputtedStyle, inputtedSauce, inputtedToppings, inputtedSides,inputtedDelivery);
  displayNewOrder(pizza);
  if (this.delivery === true) {
    document.querySelector("#delivery-info").removeAttribute("class");
    }  
}
function displayNewOrder(pizza) {
  document.querySelector(".order-size").innerText = pizza.size;
  document.querySelector(".order-style").innerText = pizza.style;
  document.querySelector(".order-sauce").innerText = pizza.sauce;
  document.querySelector(".order-toppings").innerText = pizza.toppings;
  document.querySelector(".order-sides").innerText = pizza.sides;
  document.querySelector(".order-price").innerText = pizza.price;
}
function displayDeliveryInfo(){
  document.querySelector("#delivery-submit").addEventListener("submit", displayNewOrder)
  let deliveryName = document.querySelector("#delivery-name-input").value;
  let deliveryAddress = document.querySelector("#delivery-address-input").value;
  document.querySelector("delivery-name").innerText = deliveryName;
  document.querySelector("delviery-address").innerText = deliveryAddress;
}

window.addEventListener("load", function(){
  document.querySelector("form#pizza-form").addEventListener("submit", handleFormSubmission);
});

