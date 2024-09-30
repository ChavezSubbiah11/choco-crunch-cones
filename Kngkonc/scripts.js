let cart = [];

document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product = {
        name: 'Chocolate-Filled Sugar Cone',
        price: 50.00,
        quantity: 1
    };
    
    cart.push(product);
    console.log('Product added to cart:', product);
});
