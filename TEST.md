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
testPizza; Pizza {size:"small", style:"regular, sauce:red}


## Test:
## Code:
## Expected Output:


## Test:
## Code:
## Expected Output:


## Test:
## Code:
## Expected Output:









<!-- ## Test:
Should allow to specify multiple types of meat topping or other toppings from array of options for new Pizza Object
## Code:
let testPizza = new Pizza(0, 0, 0, [1, 2],0, 0);
suaceType["none", "pepperoni", "sausage"]
## Expected Output:
Pizza {size:small, style:regular, sauce:red, meatTop:sausage, pepperoni...}-->

<!-- ## Describe
Delivery()

## Test 1:
Will give properties for delivery info when given strings for properties in input
## Code:
let testOrder = new Delivery("jeff", "77 E Grand", "25", "30 min");
## Expected Output:
testOrder;
Delivery {nickname: 'jeff', address: '77 E Grand', totalPrice: '25', timeEst: '30 min'} -->

## Test:
## Code:
## Expected Output:

## Test:
## Code:
## Expected Output:



