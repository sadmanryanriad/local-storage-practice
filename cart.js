const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    displayProduct(product,quantity);
    saveProductToLocalStorage(product,quantity);
}

const displayProduct = (product,quantity) => {
    if(product==='' || quantity==='') return;
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;

    const ul = document.getElementById('ul');
    ul.appendChild(li);
}

const getStoredCart = () => {
    const localCart = localStorage.getItem('cart');
    let cart = {};
    if(localCart){
        cart = JSON.parse(localCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product,quantity) =>{
    console.log(product);
    console.log(quantity);
    const cart = getStoredCart();

    cart[product] = quantity;
    const stringifiedCart = JSON.stringify(cart);
    console.log(stringifiedCart);

    localStorage.setItem('cart',stringifiedCart);
}

const displayProductFromLocalStorage = () => {
    const savedCart = getStoredCart();
    for(product in savedCart){   
         const quantity = savedCart[product];
        console.log(product);
        displayProduct(product, quantity);
    }

}

displayProductFromLocalStorage();