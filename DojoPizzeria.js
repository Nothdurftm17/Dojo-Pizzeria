function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]);
console.log(p1);

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(p2);

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p3 = pizzaOven("hand tossed","BBQ",["mozzarella"],["chicken"]);
console.log(p3);

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p4 = pizzaOven("thin crust","buffalo sauce",["mozzarella","pepperjack"],["sausage","chicken"]);
console.log(p4);


    var crustType = ["deep dish","thin crust","hand tossed"];
    var sauceType = ["marinara","buffalo sauce","BBQ"];
    var cheeses = ["mozzarella","provalone","pepperjack"];
    var toppings = ["pepperoni","chicken","sausage"];

    function pizzaIngredients(arr){
        var i = Math.floor(Math.random() * arr.length)
        return arr[i];
    }

        function randomPizza(){
            var stuff = {}
            stuff.crustType = pizzaIngredients(crustType);
            stuff.sauceType = pizzaIngredients(sauceType);
            stuff.cheeses = pizzaIngredients(cheeses);
            stuff.toppings = pizzaIngredients(toppings);
            
            return stuff;
        }
var rp1= randomPizza()
console.log(rp1)
