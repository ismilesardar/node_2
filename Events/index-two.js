const Shope = require("./pizza-shop");

const pizzaShope = new Shope();

pizzaShope.on('order',(size,category)=>{
    console.log(`You order pizza. ${size} size with ${category}`);
})

pizzaShope.order('Large','Masurium');
pizzaShope.displayOrder();