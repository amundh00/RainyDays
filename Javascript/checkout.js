document.addEventListener('DOMContentLoaded', () => {
    const cartStorage = localStorage.getItem("cart");
    const cart = cartStorage ? JSON.parse(cartStorage) : [];

    if (cart.length > 0) {
        const orderedItemsElement = document.getElementById('orderedItems');

        const fetchPromises = cart.map(id => {
            return fetch(`https://v2.api.noroff.dev/rainy-days/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .catch(error => console.error('Fetching error:', error));
        });

        Promise.all(fetchPromises).then(products => {
            products.forEach(product => {
                if (product) {
                    const li = document.createElement('li');
                    li.textContent = `${product.title}`;
                    orderedItemsElement.appendChild(li);
                }
            });
        }).catch(error => {
            console.error('Error with Promise.all:', error);
        });
    } else {
        console.log('Cart is empty');
    }
});
