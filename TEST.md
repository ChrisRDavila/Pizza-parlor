## Describe: 
Pizza()
## Test:
Will give build properties of pizza when strings for properties input
## Code:
let testPizza = new Pizza("large", "deep-dish", "red-sauce", "pepperoni", "olive")
## Expected Output:
>testPizza; {size: "large", style: "deep-dish, sauce: "red-sauce", meatTop: "pepperoni, vegTop: "olive"}

## Test:
should specify a size for our Pizza with options as postions in an array
## Code:
let testPizza = new Pizza(0, "detroit", "red", "pepperoni", "olive") 
sizeChoose["small", "medium", "large"]
## Expected Output:
testPizza;
Pizza {size:"small"...}

## Test:
Should specify a style for a Pizza from an array of options
## Code: 
let testPizza = new Pizza(0, 0, "red", "pepperoni", "olive"); 
chooseStyle["regular", "deep-dish", "thin-crust"]
## Expected Output:
Pizza {size:small, style:regular...}


## Test:
Should allow to specify a type of meat topping from array of options for new Pizza Object
## Code:
let testPizza = new Pizza(0, 0, 0, 0, "olive");
suaceType["none", "pepperoni", "sausage"]
## Expected Output:
Pizza {size:small, style:regular, sauce:red, meatTop:none...}

## Test:
Should allow to specify multiple types of meat topping from array of options for new Pizza Object
## Code:
let testPizza = new Pizza(0, 0, 0, [1,2], "olive");
suaceType["none", "pepperoni", "sausage"]
## Expected Output:
Pizza {size:small, style:regular, sauce:red, meatTop:sausage, pepperoni...}


## Test:
## Code:
## Expected Output:

## Test:
## Code:
## Expected Output:

## Test:
## Code:
## Expected Output:

## Test:
## Code:
## Expected Output:





