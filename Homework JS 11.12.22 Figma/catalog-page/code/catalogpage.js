import { req, show, showFilterSize, showFilterColor, searchProduct, searchProductCatalogPage, btnCancelSizeFilter, btnCancelColorFilter } from "./function.js";

// Актуалізуємо поточний рік внизу сторінки

document.querySelector(".last-div").innerHTML = `© ${new Date().getFullYear()} Sportif Mailorder. All Rights Reserved.`


// Виводимо картки товарів при загрузці першої сторінки

req("../servise/products1.json")
    .then(info => show(info));

// Пагінація п'ятьох сторінок з картками товарів
   
const btnOne = document.querySelector(".button-one");
btnOne.addEventListener("click", () => req("../servise/products1.json")
    .then(info => show(info)));

const btnTwo = document.querySelector(".button-two");
btnTwo.addEventListener("click", () => req("../servise/products2.json")
    .then(info => show(info)));

const btnThree = document.querySelector(".button-three");
btnThree.addEventListener("click", () => req("../servise/products3.json")
    .then(info => show(info)));

const btnFour = document.querySelector(".button-four");
btnFour.addEventListener("click", () => req("../servise/products4.json")
    .then(info => show(info)));

const btnFive = document.querySelector(".button-five");
btnFive.addEventListener("click", () => req("../servise/products5.json")
    .then(info => show(info)));



// Фільтруємо по розмірам
req("../servise/products.json")
    .then(info => showFilterSize(info));


// Фільтруємо по кольору
req("../servise/products.json")
    .then(info => showFilterColor(info));

// Запускаємо функцію пошуку товару в хедері, що є на кожній сторінці
req("../servise/products.json")
    .then(info => searchProduct(info));   

// Запускаємо функція пошуку товару на сторінці Catalog-page
req("../servise/products.json")
    .then(info => searchProductCatalogPage(info)); 


// Виклик функції очищення фільтру по розміру
btnCancelSizeFilter();



// Виклик функції очищення фільтру по кольору
btnCancelColorFilter();



// Функція відображення в корзині кількості добавлених товарів 

function printQuantityCatalogPage() {
        let basket = JSON.parse(localStorage.basket);
            const cartQuantity = document.querySelector(".basket-span");
            let length = basket.length;
            cartQuantity.textContent = length;
           };
printQuantityCatalogPage();
        

//Перехід на сторінку корзини при кліку на малюнок корзини зверху екрану
document.querySelector(".basket").addEventListener("click", e => document.location = "/basket");