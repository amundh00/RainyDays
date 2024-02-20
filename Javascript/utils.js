export function listData(list, out){
    out.innerHTML = "";
    let newCards = "";
    for (let product of list) {
        newCards += `<a href="./jacketspecific.html?id=${product.id} "class="jacket-card-link">
                        <div class="product-card">
                            <img class="product-image" src="${product.image.url}" alt="${product.image.alt}">
                            <h2>${product.title}</h2>
                            <p>Price: $${product.price}</p>
                            <span>Read More</span>
                        </div>
                    </a>`;
    }
    out.innerHTML = newCards;
}

/*********
Cart code
*********/

export let cart;

export const cartStorage = localStorage.getItem("cart");
if (!cart) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart)); 
} else {
    cart = JSON.parse(cartStorage);
}

export function cartListing(id); {
    let added = false;
    if (cart.includes(id)) {
        added = true;
    }
    if (added === true) {
        cart = cart.filter((item) => item !== id);
    } else {
        cart.push(id);
    }

localStorage.setItem("", JSON.stringify(cart));
//console.log(handlekurv);
}
