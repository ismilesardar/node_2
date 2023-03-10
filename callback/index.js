function greet(name) {
    console.log(`Hello ${name}`);
}

function greetIsmile(value,callback) {
    callback(value);
}

greetIsmile('Ismile',greet);