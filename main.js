document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.querySelector('.products');

    const products = [
        { name: 'Batom', price: 10, image: 'batom.jpg' },
        { name: 'Sombra', price: 15, image: 'sombra.jpg' },
        { name: 'Blush', price: 12, image: 'blush.jpg' }
    ];

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>R$${product.price.toFixed(2)}</p>
            <button>Adicionar ao Carrinho</button>
        `;
        productsContainer.appendChild(productElement);
    });
});