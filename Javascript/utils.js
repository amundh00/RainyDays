export function listData(list, out){
    out.innerHTML = "";
    let newCards = "";
    for (let product of list) {
        newCards += `<div>
                        <div class="product-card">
                            <img class="product-image" src="${product.image.url}" alt="${product.image.alt}">
                            <h2>${product.title}</h2>
                            <p>Price: $${product.price}</p>
                            <a href="./jacketspecific.html?id=${product.id}" class="jacket-card-link">View Product</a>
                            <button class="cartBtn" id=${product.id}>Add to cart</button>
                        </div>
                    </div>`;
    }
    out.innerHTML = newCards;

    const btns = document.querySelectorAll("button.cartBtn");
    for (const btn of btns) {
        if (cart.includes(btn.id)) btn.style.color = "white";
        btn.addEventListener("click", toggleCart);
    }
}




//Cart code

//what is in the cart?

export let cart;
const cartStorage = localStorage.getItem("cart");
//console.log(cartStorage);
if (!cartStorage) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
} else {
    cart = JSON.parse(cartStorage);
}
console.log(cart);

//add and remove from cart

export function toggleCart() {
    //console.log("Clicked", this.id);
    if (cart.includes(parseInt(this.id))) {
        console.log(this.id, " is in the cart");
        // remove it...
        for (let i = 0; i < cart.length; i++) {
            if (cart[i] === this.id) cart.splice(i, 1); 
        }
        this.style.color = "black";
    } else {
        console.log(this.id, " is not in the cart");
        // Add it:
        cart.push(this.id);
        this.style.color = "white";
    }
    //console.log(favourites);
    localStorage.setItem("cart", JSON.stringify(cart));
 
}

export function listDataToCart(list, out){
    out.innerHTML = "";
    let newCards = "";
    for (let product of list) {
        newCards += `   <div class="cart-card">
                            <img class="cart-image" src="${product.image.url}" alt="${product.image.alt}">
                            <div>
                                <h4>${product.title}</h4>
                                <p>USD: ${product.price}</p>
                            </div>
                            <button class="removeBtn" id=${product.id}>Remove</button>
                        </div>`;
    }
    out.innerHTML = newCards;
}


export function makeJacketPage(api, output) {

    let product = api;

    output.innerHTML = `
    <div class="jacket-detail">
        <img class="jacket-image" src="${product.image.url}" alt="${product.image.alt}">
            <span class="jacket-info">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
            <span class="product-details">
                <p>Color: ${product.baseColor}</p>
                <p>Gender: ${product.gender}</p>
            </span>
            <p class="jacket-price">Price: ${product.price} USD</p>
        <span>
        <button class="cartBtn" id=${product.id}>Add to cart</button>
    </div>`;

    const btns = document.querySelectorAll("button.cartBtn");
    for (const btn of btns) {
        if (cart.includes(btn.id)) btn.style.color = "white";
        btn.addEventListener("click", toggleCart);
    }
}


//Filter System


export function filterJackets(jackets, gender) {
    if (gender === 'none') {
        return jackets;
    }   else {
        return jackets.filter(jacket => jacket.gender === gender);
    }
}







