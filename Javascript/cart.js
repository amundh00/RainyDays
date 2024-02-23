import { listDataToCart, cart } from "./utils.js";
console.log("cart", cart);

const outElement = document.getElementById("checkout-box");

async function addedToCart(cart) {
    try {
        const api = `https://v2.api.noroff.dev/rainy-days`;
        const response = await fetch(api);
        const data = await response.json();

        let filtered = data.data.filter((item)=>{
            let id = item.id;
            return cart.includes(id);
        });
        if (filtered.length > 0) {
            listDataToCart (filtered, outElement);
        } else {
            outElement.innerHTML = `You have no products added to cart`;
        }
    } catch (error) {
        console.error(error.message);
        outElement.innerHTML = `Could not fetch data`;
    }
}

addedToCart(cart);



function removeFromCart(ClickedId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updatedCart = cart.filter(item => item !== ClickedId);

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    //alert("Item removed");

    location.reload();
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('removeBtn')) {
        removeFromCart(event.target.id);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log(document.getElementById('checkoutKnapp'));
    document.body.addEventListener('click', function(event) {

    if (event.target.id === 'checkoutKnapp') {
        event.preventDefault();
        console.log('check button clicked');
    }

        var form =document.getElementById('cart-form');
        if (form.checkValidity()) {

            window.location.href = 'checkout.html';
        
        } else {
            alert('Please fill in all required fields before checkout.');
            form.querySelector(':invalid').focus();
        }
    });
});