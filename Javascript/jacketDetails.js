import { makeJacketPage, toggleCart } from "./utils.js";

let mainJacketPage = document.querySelector("main.jacket-main");
let jacketById = [];

let params = new URL(document.location).searchParams;
let id = params.get("id");

async function getJacketById() {
    if (mainJacketPage !== "none") {
        mainJacketPage.innerHTML = `<div class="loading">Loading...</div>`;

    try{
        const api = `https://v2.api.noroff.dev/rainy-days/${id}`;
        const response = await fetch(api);
        const data = await response.json();

        jacketById = data.data;

        document.title = jacketById.title;

        setTimeout(() => {
            listData(collection, outElement);
        }, 2000);

        makeJacketPage(jacketById, mainJacketPage);
    } catch (error) {
        mainJacketPage.innerHTML = `<p>Ingen Jakke å vise hær Lasse</p>`;
    }
}
}

getJacketById();


