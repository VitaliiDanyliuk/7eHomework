import { createDiv, createImg, createSpan, createBtn } from "../../catalog-page/code/function.js";

// Актуалізуємо поточний рік внизу сторінки
document.querySelector(".last-div").innerHTML = `© ${new Date().getFullYear()} Sportif Mailorder. All Rights Reserved.`

// Отримуємо масив з локалсторедж
let basket = JSON.parse(localStorage.basket);


let lengthBas = basket.length;

// Функція додавання картки товару на сторінку
function showBasket() { 
        const container = document.querySelector(".product-basket");
        basket.forEach(obj => {
        let productBox = createDiv("products-box");
        container.append(productBox);
        let productBoxId = createDiv("products-id", `Id: ${obj.id}`)
        productBox.append(productBoxId);
        let divProductImage = createDiv("products-image")
        productBox.append(divProductImage);
        let imageProductImage = createImg(`../image/imgprod/${obj.image}.png`, `шорти`);
        divProductImage.append(imageProductImage);
        let productsName = createDiv("products-name", `${obj.name}`);
        productBox.append(productsName);
        let divProductPrice = createDiv("products-price", `${obj.price}`);
        productBox.append(divProductPrice);
        let productsSize = createDiv("products-size", `${obj.size}`);
        productBox.append(productsSize);
        let productSpan = createSpan("products-span", "Size: ");     
        productsSize.prepend(productSpan);
        let divProductColor = createDiv("products-color");
        productBox.append(divProductColor);
        let productSpanColor = createSpan("products-span-color", "Color");     
        divProductColor.prepend(productSpanColor);
        let productColorImg = createImg(`../image/${obj.color}.png`, `кольоровий квадрат`);
        divProductColor.append(productColorImg);
        let divProductBtn = createBtn("products-button");
        productBox.append(divProductBtn);
        let productButtonImg = createImg(`../image/imagesdel.png`, `корзина`);      
        divProductBtn.append(productButtonImg);
            divProductBtn.addEventListener("click", e => {
                let value = Object.values(obj);
                let valueId = value[0];
                basket.splice(basket.findIndex((obj) => { return obj.id == valueId }), 1);
                localStorage.basket = JSON.stringify(basket);
                document.location = "/basket";

addTotalPrice();
                });
 
        });
    
};

showBasket();


// Функція відображення в корзині кількості товарів 

function printQuantity () {
const cartQuantity = document.querySelector(".basket-span");
    cartQuantity.textContent = lengthBas;
};
printQuantity();


let totalPrice = 0;

// Функція відображення загальної вартості добавлених товарів у корзину

function addTotalPrice() { 
    basket.forEach(obj => totalPrice += parseInt(obj.price.slice(1, 3)));
const fullPrice = document.querySelector(".full-price");
fullPrice.textContent = `You have selected items totaling: ${totalPrice} $`;
};
addTotalPrice();

