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

function Hamburger(size) {
    this.price = size.price;
    this.calories = size.calories;
    this.adds = []

    this.addModifier = function(size) {
        if ( size === CHEESE || size === POTATO || size === FLAVOR || size === CHEESE || size === MAYO ) {
            return   this.adds.push(size)
        }
    }

    this.getPrice = function() {
        let sum = 0
        for (let i = 0; i < this.adds.length; i++) {
            sum += this.adds[i].price
        }
        return sum + size.price
    }

    this.getCalories = function() {
        let sum = 0
        for (let i = 0; i < this.adds.length; i++) {
            sum += this.adds[i].calories
        }
        return sum + size.calories
    }
}

let hamburger = new Hamburger(SIZE_BIG)
hamburger.addModifier(MAYO)
hamburger.addModifier(POTATO)
console.log("Price with sauce: " + hamburger.getPrice());
console.log("Calories with sauce: " + hamburger.getCalories());



