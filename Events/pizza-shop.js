const EventEmitter = require('events');

class Shope extends EventEmitter {
    constructor(){
        super();
        this.pizzaOrder = 0;
    }

    order(size,category){
        this.pizzaOrder++;
        this.emit("order",size,category);
    }

    displayOrder(){
        console.log(`You have order ${this.pizzaOrder} pizza.`);
    }
}

module.exports = Shope;