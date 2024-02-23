import { listDataToCart, cart } from "./utils.js";

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