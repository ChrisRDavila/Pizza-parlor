//Business Logic for Pizza-----------

function Pizza(size, style, sauce, toppings, sides, delivery) {
  this.size = size;
  this.style = style;
  this.sauce = sauce;
  this.toppings = toppings;
  this.sides = sides;
  this.delivery = delivery;
  this.price = 0;
}
Pizza.prototype.getCost = function() {
  if (this.size === "small") {
    this.price = this.price + 10;
  } else if (this.size === "medium") {
    this.price = this.price + 13;
  } else if (this.size ==="large") {
    this.price = this.price + 16;
  } 
  this.price += this.toppings.length * 2;
  this.price += this.sides.length;
  if(this.delivery === "yes") {
    this.price += 5;
  } else {
    this.price += 0;
  } return this.price
}

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  document.getElementById("order-info").style.visibility = "visible";
  const inputtedSize = document.querySelector("#size").value;
  const inputtedStyle = document.querySelector("#style").value;
  const inputtedSauce = document.querySelector("#sauce").value;
  const toppingOptions = document.querySelectorAll(".top-class:checked");
  const selectedToppings =[];
  for (let i = 0; i < toppingOptions.length; i ++) {
    selectedToppings.push((toppingOptions[i].value));
  }
  const sideOptions = document.querySelectorAll(".side-class:checked");
  const selectedSides = [];
  for (let i = 0; i < sideOptions.length; i ++) {
    selectedSides.push(sideOptions[i].value);
  }  
  const inputtedDelivery = document.querySelector("#delivery-response:checked").value;
  let pizza = new Pizza(inputtedSize, inputtedStyle, inputtedSauce, selectedToppings, selectedSides, inputtedDelivery);
  if (inputtedDelivery) {
    document.getElementById("delivery-input").style.visibility = "visible";
  }
  displayNewOrder(pizza);
  document.getElementById("delivery-info").style.visibility = "visible";
  let deliveryName = document.querySelector("#delivery-name-input").value;
  let deliveryAddress = document.querySelector("#delivery-address-input").value;
  document.querySelector(".delivery-name").innerText = deliveryName;
  document.querySelector(".delivery-address").innerText = deliveryAddress;
}
function displayNewOrder(pizza) {
  document.querySelector(".order-size").innerText = pizza.size;
  document.querySelector(".order-style").innerText = pizza.style;
  document.querySelector(".order-sauce").innerText = pizza.sauce;
  document.querySelector(".order-toppings").innerText = pizza.toppings.join(", ");
  document.querySelector(".order-sides").innerText = pizza.sides.join(", ");
  document.querySelector(".order-price").innerText = pizza.getCost();
}
window.addEventListener("load", function(){
  document.querySelector("form#pizza-form").addEventListener("submit", handleFormSubmission);
});



