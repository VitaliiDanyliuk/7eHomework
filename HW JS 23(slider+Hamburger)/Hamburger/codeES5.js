

function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
    
        if (!size || !stuffing) {
            throw new Error("Please select size and stuffing");
        }
        if (
            size !== Hamburger.SIZE_SMALL &&
            size !== Hamburger.SIZE_LARGE &&
            stuffing !== Hamburger.STUFFING_CHEESE &&
            stuffing !== Hamburger.STUFFING_SALAD &&
            stuffing !== Hamburger.STUFFING_MEAT
        ) {
            throw new Error("Invalid size or stuffing");
        }
}

    Hamburger.SIZE_SMALL = {price: 50, calories: 20};
    Hamburger.SIZE_LARGE = {price: 100, calories: 40};
    Hamburger.STUFFING_CHEESE = {price: 10, calories: 20};
    Hamburger.STUFFING_SALAD = {price: 20, calories: 5};
    Hamburger.STUFFING_MEAT = {price: 30, calories: 15};
    Hamburger.TOPPING_MAYO = {price: 20, calories: 5};
    Hamburger.TOPPING_SPICE = {price: 15, calories: 0};





    Hamburger.prototype.addTopping = function(topping) {
        if (!topping) {
            throw new Error("Please select a topping");
        }
        if (this.toppings.includes(topping)) {
            throw new Error("Topping already added");
        }
        if (
            topping !== Hamburger.TOPPING_MAYO &&
            topping !== Hamburger.TOPPING_SPICE
        ) {
            throw new Error("Invalid topping");
        }
        this.toppings.push(topping);
    }

    Hamburger.prototype.removeTopping = function(topping) {
        if (!topping) {
            throw new Error("Please select a topping");
        }
        if (!this.toppings.includes(topping)) {
            throw new Error("Topping not found");
        }
        const index = this.toppings.indexOf(topping);
        this.toppings.splice(index, 1);
    }

    Hamburger.prototype.calculatePrice = function() {
        const toppingsPrice = this.toppings.reduce(
            (total, topping) => total + topping.price,
            0
        );
        return this.size.price + this.stuffing.price + toppingsPrice;
    }

    Hamburger.prototype.calculateCalories = function() {
        const toppingsCalories = this.toppings.reduce(
            (total, topping) => total + topping.calories,
            0
        );
        return this.size.calories + this.stuffing.calories + toppingsCalories;
    }

    Hamburger.prototype.getSize = function() {
        return this.size;
    }

    Hamburger.prototype.getToppings = function() {
        return this.toppings;
    }


try {
    const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
    console.log(`Calories: ${hamburger.calculateCalories()}`);
    console.log(`Price: ${hamburger.calculatePrice()}`);
    hamburger.addTopping(Hamburger.TOPPING_SPICE);
    console.log(`Price with sauce: ${hamburger.calculatePrice()}`);
    console.log(`Is hamburger large: ${hamburger.getSize() === Hamburger.SIZE_LARGE}`);
    hamburger.removeTopping(Hamburger.TOPPING_SPICE);
    console.log(`Have ${hamburger.getToppings().length} toppings`);
} catch (e) {
    console.error(e.message);
}
