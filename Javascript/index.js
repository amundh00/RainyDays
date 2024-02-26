import { listData } from "./utils.js";

let collection = [];
const outElement = document.getElementById("topSellers");

async function collectJackets() {
    try {
        const api = `https://v2.api.noroff.dev/rainy-days`;
        const response = await fetch(api);
        const data = await response.json();
        
        collection = data.data; 

        const topSellerJackets = ["6e5ae9e6-2033-4c63-82b9-5b58226425f4", "b4eaa52e-2efe-4075-9772-e0c6d7ba04bb", "07a7655a-7927-421b-ba6a-b6742d5a75b8"];
        
        const selectedJackets = collection.filter(jacket => topSellerJackets.includes(jacket.id));

        listData(selectedJackets, outElement);
    } catch(error) {
        //console.error('Could not fetch data:', error);
        outElement.innerHTML = `Could not fetch data...`;
    }
}

collectJackets();