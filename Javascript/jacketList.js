import { listData } from "./utils.js";

let collection = [];
const outElement = document.getElementById("productList");

async function collectCards() {
    try {
        const api = `https://v2.api.noroff.dev/rainy-days`;
        const response = await fetch(api);
        const data = await response.json();
        
        collection = data.data; 
        
        listData(collection, outElement);
    } catch (error) {
        console.error('Could not fetch data:', error);
        outElement.innerHTML = `Could not fetch data...`;
    }
}

console.log(collection); // Add this line to inspect the 'collection' variable
listData(collection, outElement);

collectCards();
