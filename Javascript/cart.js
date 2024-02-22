import { listData } from "./utils.js"

const outElement = document.getElementById("checkout-box");

async function addedToCart() {
    try {
        const api = `https://v2.api.noroff.dev/rainy-days`;
        const response = await fetch(api);
        const data = await response.json();

        let filtered = data.data.filter((item)=>{
            let id = product.id;
            return cart.includes(id);
        });
        if (filtered.length > 0) {
            listData (filtered, outElement);
        } else {
            outElement.innerHTML = `You have no products added to cart`;
        }
    } catch (error) {
        outElement.innerHTML = `Could not fetch data`;
    }
}

addedToCart();