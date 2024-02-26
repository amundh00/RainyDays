import { listCartToCheckout, cart, saveFormData } from "./utils.js";


const out = document.getElementById("orderedItems");

async function cartToCheckout(cart) {
    try{
        const api = `https://v2.api.noroff.dev/rainy-days`;
        const response = await fetch(api);
        const data = await response.json();

        let filtered = data.data.filter((item)=>{
            let id = item.id;
            return cart.includes(id);
        });
        if (filtered.length > 0) {
            listCartToCheckout (filtered, out);
        } else {
            out.innerHTML = `You have no products added to cart`;
        }
    } catch (error) {
        //console.error(error.message);
        out.innerHTML = `Could not fetch data`;
    }
}

cartToCheckout(cart);

//display adress,name etc on checkout confirmation from form


async function displayContactInfo() {

    let savedName = localStorage.getItem('fullName');
    let savedAdress = localStorage.getItem('adress');
    let savedCity = localStorage.getItem('city');
    let savedZip = localStorage.getItem('zip');

    if (savedCity && savedZip && savedAdress) {
        let combinedInfo = `${savedCity}, ${savedZip}, ${savedAddress}`;
        var shippingAddressElement = document.querySelector('.shippingAddress');
        shippingAddressElement.textContent = combinedInfo;
    } else {
        console.log('No saved data found for some or all of the keys: city, zip, address');
    }
}

window.onload = function(){
    displayContactInfo();
}