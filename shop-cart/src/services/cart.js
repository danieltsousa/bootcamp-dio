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
    console.log("Shopee  Cart TOTAL IS:");

     const result =  userCart.reduce((total, item) => total + item.subtotal());
 console.log(`TOTAL: ${result}`);
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
