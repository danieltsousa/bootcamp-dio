//--> adicionar item no carinho
async function addItem(userCart, item){
userCart.push(item);
}

async function deleteItem(userCart, name) {

}

async function removeItem(userCart, index) {
    
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