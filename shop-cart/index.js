import createItem from "./services/item.js";


const cart = [];

console.log("Welcome to the shopping cart!");

const item1 = await createItem("Goiás E.C soccer jersey", 20.89, 3);

const item2 = await createItem("Portable videogame GameX 64gb", 155.50, 2);

const item3 = await createItem("Wireless headphones Soundcore", 89.99, 1);

const item4 = await createItem("Screenium Oled Monitor ", 299.99, 1);

console.log("subtotal de Item 1: " + item1.subtotal());
console.log("subtotal de Item 2: " + item2.subtotal());
console.log("subtotal de Item 3: " + item3.subtotal());
console.log("subtotal de Item 4: " + item4.subtotal());
