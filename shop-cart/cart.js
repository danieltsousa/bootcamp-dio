//--> adicionar item no carinho
async function addItem(userCart, item){
userCart.push(item);
}

async function deleteItem(userCart, name) {

}

async function removeItem(userCart, index) {
    
}
 async function displayCart(userCart, index) {
     console.log("Shopee cart list:")
     userCart.forEach((item, index) => {
         console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantify} | Subtotal ${item.subtotal()}`);
 });
 }

async function calculateTotal(userCart) {
     const result =  userCart.reduce((total, item) => total + item.subtotal());
 console.log(result)
}

export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem

}
//--> deletar item do carrinho
//--> remover um item 
//-->  calcular o total
