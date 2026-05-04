//--> adicionar item no carinho
async function addItem(userCart, item){
userCart.push(item);
}

async function deleteItem(userCart, name) {
const index = userCart.findIndex((item) => item.name === name);
if (index !== -1){
    userCart.splice(index,1);
}
}

async function removeItem(userCart, index) {
    const deleteIndex = index - 1;

    // encontrar o indice do item
    if(index >= 0 && index < userCart.length){
        userCart.splice(index, 1)
    }
   
}


async function calculateTotal(userCart) {
    // Usamos o .reduce para somar, garantindo que o valor inicial seja 0 (número)
    const result = userCart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    console.log(`\nShopee Cart TOTAL IS:`);
    console.log(`TOTAL: R$ ${result.toFixed(2)}`); // .toFixed(2) para formatar centavos
}

// Dentro de services/cart.js

// O erro comum é esquecer o 'export' antes de 'async function'
 async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`);
    });
}

export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,

}
//--> deletar item do carrinho
//--> remover um item 
//-->  calcular o total
