import { filterJackets, listData } from "./utils.js";

let collection = [];
const outElement = document.getElementById("productList");
const filter = document.getElementById('jacketFilter');

async function collectJackets() {
    try {
        const api = `https://v2.api.noroff.dev/rainy-days`;
        const response = await fetch(api);
        const data = await response.json();
        
        collection = data.data; 
        
        listData(collection, outElement);

        filter.addEventListener('change', () => {
          const selectedGender = filter.value;
          const filteredJackets = filterJackets(collection, selectedGender);
          console.log(filteredJackets);
          listData(filteredJackets, outElement);
        });

    } catch (error) {
        console.error('Could not fetch data:', error);
        outElement.innerHTML = `Could not fetch data...`;
    }
}

//console.log(collection);
//listData(collection, outElement);

collectJackets();



/*******
 Sorting
 *******/

