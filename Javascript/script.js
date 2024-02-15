const apiUrl = 'https://api.noroff.dev/api/v1/rainy-days';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const productListElement = document.getElementById('productList');
                console.log(productListElement);

                // Loop through each product in the API response
                data.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';

                    productCard.innerHTML = `
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <p>Price: ${product.onSale ? product.discountedPrice : product.price}</p>
                        <img class="product-image" src="${product.image.url}" alt="${product.image.alt}">
                    `;

                    productListElement.appendChild(productCard);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });


