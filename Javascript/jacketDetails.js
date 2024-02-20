let mainJacketPage = document.querySelector("main.jacket-main");
let jacketById = [];

let params = new URL(document.location).searchParams;
let id = params.get("id");

async function getJacketById() {
    try{
        const api = `https://v2.api.noroff.dev/rainy-days/${id}`;
        const response = await fetch(api);
        const data = await response.json();

        jacketById = data.data;
        console.log(jacketById);
        makeJacketPage(jacketById, mainJacketPage); 
    } catch (error) {
        mainJacketPage.innerHTML = `<p>Ingen Jakke å vise hær Lasse</p>`;
    }
}

getJacketById();


function makeJacketPage(api, output) {
    // Anta at api inneholder produktdataene og tilordne det til product
    let product = api; // Denne linjen kan tilpasses basert på den faktiske strukturen av `api`

    output.innerHTML = `
    <div class="jacket-detail">
        <img class="product-image" src="${product.image.url}" alt="${product.image.alt}">
        <h2>${product.title}</h2>
        <p>Price: $${product.price}</p>
    </div>
    `;
}
