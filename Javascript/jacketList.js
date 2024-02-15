const apiUrl = 'https://api.noroff.dev/api/v1/rainy-days';

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function displayData() {
  try {
    const data = await fetchData();
    if (!data) return;

    const productListElement = document.getElementById('productList');

    data.forEach(product => {
      const productCard = document.createElement('a');
      productCard.href = 'jacketspecific.html'; // Link to jacketspecific.html
      productCard.className = 'product-card';

      productCard.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.image.alt}">
        <h3>${product.title}</h3>
        <p>Price: ${product.onSale ? product.discountedPrice : product.price} USD</p> 
      `;

      productListElement.appendChild(productCard);
    });
  } catch (error) {
    console.error('Error displaying data:', error);
  }
}

// Call the displayData function
displayData();


