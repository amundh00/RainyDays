const outElement = document.getElementById("jacket-main");


let params = new URL(document.location).searchParams;
let id = params.get("id"); 

async function getJacket() {
    try {
        const api = `https://v2.api.noroff.dev/rainy-days/?id=${id}`;
        const response = await fetch(api);
        const data = await response.json();

        
        listFullJacket (data.data, outElement);
    } catch (error) {
        outElement.innerHTML = `Could not fetch data...`;
    }
}

getJacket();


function listFullJacket(product, out) {
    //console.log(card);
    document.title = product.title;
    document.querySelector("h1").innerHTML = card.name;
    let newDiv = `<div class="product-card">
    <img class="product-image" src="${product.image.url}" alt="${product.image.alt}">
    <h2>${product.title}</h2>
    <p>Price: $${product.price}</p>
    <span>Read More</span>
    </div>`;
    //console.log(newDiv);
    out.innerHTML = newDiv;
}