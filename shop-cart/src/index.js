import * as cartService from "./services/cart.js"

import createItem from "./services/item.js";



const myCart = [];
const myWhishList = [];

console.log("Welcome to the shopping cart!");

const item1 = await createItem("Goiás E.C soccer jersey", 20.89, 3);

const item2 = await createItem("Portable videogame GameX 64gb", 155.50, 2);

const item3 = await createItem("Wireless headphones Soundcore", 89.99, 1);

const item4 = await createItem("Screenium Oled Monitor ", 299.99, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item4);


await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart);
