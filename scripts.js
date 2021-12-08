const SIZE_SMALL = {
    price : 50,
    calories : 20
}

const SIZE_MIDDLE = {
    price : 75,
    calories : 30
}

const SIZE_BIG = {
    price : 100,
    calories : 40
}

const CHEESE = {
    price : 10,
    calories : 20
}

const SALAD = {
    price : 20,
    calories : 5
}

const POTATO = {
    price : 15,
    calories : 10
}

const FLAVOR = {
    price : 15,
    calories : 0
}

const MAYO = {
    price : 20,
    calories : 5
}

function Hamburger(name) {
    this.price = name.price;
    this.calories = name.calories;
    this.adds = []

    this.addModifier = function(name) {
        if ( name === CHEESE || name === POTATO || name === FLAVOR || name === CHEESE || name === MAYO ) {
            this.adds.push(name)
        }
    }

    this.getPrice = function() {
        let sum = 0
        for (let i = 0; i < this.adds.length; i++) {
            sum += this.adds[i].price
        }
        return sum + name.price
    }

    this.getCalories = function() {
        let sum = 0
        for (let i = 0; i < this.adds.length; i++) {
            sum += this.adds[i].calories
        }
        return sum + name.calories
    }
}

let hamburger = new Hamburger(SIZE_BIG)
hamburger.addModifier(MAYO)
hamburger.addModifier(POTATO)
console.log("Price with sauce: " + hamburger.getPrice());
console.log("Calories with sauce: " + hamburger.getCalories());



