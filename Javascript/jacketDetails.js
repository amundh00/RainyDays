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
        <img class="jacket-image" src="${product.image.url}" alt="${product.image.alt}">
        <span class="jacket-info">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <span class="product-details">
                <p>Color: ${product.baseColor}</p>
                <p>Gender: ${product.gender}</p>
            </span>
            <p>Price: ${product.price} USD</p>
        <span>
    </div>`;
}
