## Describe: 
Pizza()
## Test 1:
Will build properties of pizza when strings for properties are input
## Code:
let testPizza = new Pizza("large", "deep-dish", "red-sauce", "pepperoni", "olive")
## Expected Output:
>testPizza; {size: "large", style: "deep-dish, sauce: "red-sauce", meatTop: "pepperoni, vegTop: "olive"}

## Test 2:
should specify a size for our Pizza with options as postions in an array
## Code:
let testPizza = new Pizza(0, "detroit", "red", "pepperoni", "olive") 
sizeChoose["small", "medium", "large"]
## Expected Output:
testPizza;
Pizza {size:"small"...}

## Test 3:
Should specify a style for a Pizza from an array of options
## Code: 
let testPizza = new Pizza(0, 0, "red", "pepperoni", "olive"); 
chooseStyle["regular", "deep-dish", "thin-crust"]
## Expected Output:
Pizza {size:small, style:regular...}


## Test 4:
Should allow to specify a type of meat topping from array of options for new Pizza Object
## Code:
let testPizza = new Pizza(0, 0, 0, 0, "olive");
suaceType["none", "pepperoni", "sausage"]
## Expected Output:
Pizza {size:small, style:regular, sauce:red, meatTop:none...}

## Test 5:
Should allow to specify a type of veggie topping from array of options for new Pizza Object
## Code:
let testPizza = new Pizza(0, 0, 0, 0, 0);
suaceType["none", "olive", "bell-pepper"]
## Expected Output:
Pizza {size:small, style:regular, sauce:red, meatTop:none...}

## Test 6:
Adding Mapping to each property to associate my array properties with an id and value which should held later when developing a cost()  
## Code:
let testPizza = new Pizza(0.....)
## Expected Output:
Pizza {size:
id: 0, name: "small", value: 10}

# Test 7:
Adding Mapping to each property to associate my array properties with an id,name and value which should held later when developing a cost(), starting with size property 
## Code:
let testPizza = new Pizza(0.....)
## Expected Output:
testPizza; Pizza... {size:
id: 0, name: "small", value: 10}

# Test 8:
Adding Mapping to each property to associate my array properties with an id and value which should held later when developing a cost(). moving on to styles  
## Code:
let testPizza = new Pizza(0, 0...)
## Expected Output:
testPizza; Pizza ... {style:
id: 0, name: "regular", value: 0}...

# Test 9:
Adding Mapping to each property to associate my array properties with an id and value which should held later when developing a cost(). moving on to sauce  
## Code:
let testPizza = new Pizza(0, 0, 0...)
## Expected Output:
testPizza; Pizza ... {sauce:
id: 0, name: "red", value: 0}...

# Test 10:
Adding Mapping to each property to associate my array properties with an id and value which should held later when developing a cost(). moving on to meat toppings  
## Code:
let testPizza = new Pizza(0, 0, 0, 0...)
## Expected Output:
testPizza; Pizza ... {meatTop:
id: 0, name: "none", value: 0}...

# Test 11:
Adding Mapping to each property to associate my array properties with an id and value which should held later when developing a cost(). moving on to veggie toppings  
## Code:
let testPizza = new Pizza(0, 0, 0, 0, 0)
## Expected Output:
testPizza; Pizza ... {vegTop:
id: 0, name: "none", value: 0}...

## Test 12:
will test if cost() adds values from properties assigned to a new Pizza() to give sum of all property values
## Code: 
let testPizza = new(0, 0, 0, 0, 0)
## Expected Output:
testPizza; Pizza ... {price:
pizzaPrice: 10}.....

## Test 13:
Should allow to specify a type of side from array of options for new Pizza Object
## Code:
let testPizza = new Pizza(0, 0, 0, 0, 1, 0);
sides["none", "pepsi", "ranch-dressing"]
## Expected Output:
testPizza; Pizza {side: id:0, name: "Pepsi", value: 1} 

---------------------------------------------

## Test:
size function will determine cost of pizza based on string
## Code:
let testPizza  = new Pizza("small")
## Expected Output:
testPizza; Pizza {size:small, price: 10}

## Test:
test will allow to add style and sauce type to pizza
## Code:
let testPizza = new Pizza("small", "regular", "red")
## Expected Output:
testPizza; Pizza {size:"small", style:"regular, sauce:red, price: 10}


## Test:
Add toppings that will add to cost and display with pizza
## Code:
let testPizza = new Pizza("small", "regular", "red", ["pepperoni", "olive"])
## Expected Output:
testPizza; Pizza {size:"small, styles:regular, sauce: red, toppings: ["pepproni", "olive"], price: 14}

## Test:
Add sides to new Pizza and cost of sides
## Code:
let testPizza = newPizza(....["soda", "brownie"])
## Expected Output:
test Pizza; Pizza {.....sides:["soda", "brownie"], price: 16}

## Test:
add option to deliver and delivery cost
## Code:
let testPizza = newPizza(....,true)
## Expected Output:
test Pizza; Pizza {.....sides:["soda", "brownie"], delivery: true,  price: 21}



## Test:
turn output cost into cash value element
## Code:
`$${cost}.00`
## Expected Output:
test Pizza; Pizza {.....sides:["soda", "brownie"], delivery: true,  price: "21.00"}
-------------------------------------------------------
## TDD for corrections

## Desribe:
Pizza()

## Test:
Will build Pizza object with correct properties and price set at 10$ to start for small plain cheese pizza with no added toppings, sides or delivery
## Code:
let testPizza = new Pizza("large", "deep-dish", "red-sauce", "pepperoni", "olive", "deliver")
## Expected Output:
testPizza; {size: "large", style: "deep-dish, sauce: "red-sauce", meatTop: "pepperoni, vegTop: "olive", "deliver, price: 10, }

## Describe

Pizza.prototype.getCost()

## Test:
Will add 10 dollars to price if small chosen
## Code:
let testPizza = new Pizza("small")
const cost = testPizza.getCost():
## Expected Output:
testPizza; {size:"small", price: 10}


## Test:
Will add 13 dollars to price if medium chosen
## Code:
let testPizza = new Pizza("medium")
const cost = testPizza.getCost():
## Expected Output:
testPizza; {size:"medium", price: 13}


## Test:
Will add 16 dollars to price if large chosen
## Code:
let testPizza = new Pizza("large")
const cost = testPizza.getCost():
## Expected Output:
testPizza; {size:"large", price: 16}

## Test:
Will add 2 dollars to price if one topping chosen
## Code:
let testPizza = new Pizza("small",["olive"])
const cost = testPizza.getCost():
## Expected Output:
testPizza; {size: "small" topping:"olive", price: 12}

## Test:
Will add 2 dollars to price per topping
## Code:
let testPizza = new Pizza("small",["olive", "pepperoni"])
const cost = testPizza.getCost():
## Expected Output:
testPizza; {size: "small" topping:["olive", "pepperoni"], price: 14}

## Test:
## Code:
## Expected Output:



