export function listData(list, out){
    out.innerHTML = ""; // Clear the output container
    let newCards = "";
    for (let product of list) {
        newCards += `<a href="./jacketspecific.html?id=${product.id}" class="jacket-card-link">
                        <div class="product-card">
                            <img class="product-image" src="${product.image.url}" alt="${product.image.alt}">
                            <h2>${product.title}</h2>
                            <p>Price: $${product.price}</p>
                            <span>Read More</span>
                        </div>
                    </a>`;
    }
    out.innerHTML = newCards; // Populate the container with new HTML
}
