
import { req, createDiv, createImg, createSpan, createBtn } from "../catalog-page/code/function.js";

// Актуалізуємо поточний рік внизу сторінки

document.querySelector(".last-div").innerHTML = `© ${new Date().getFullYear()} Sportif Mailorder. All Rights Reserved.`

// Функція отримання чотирьох рандомних елементів масиву

function getRandomFourEl(data) { 
     let min = 0;
    let max = data.length - 1;
    let result = [];
    data.forEach(obj => { 
    if (result.length >= 4) return;
        else { result.push(data[Math.round(min - 0.5 + Math.random() * (max - min + 1))]) };
    return result;
    })
    showRandom(result);
};


// Запит на сервер по рандомним елементам
req("../servise/products.json")
    .then(info => getRandomFourEl(info));

       
   
// Функція додавання рандомних карток товарів на сторінку

function showRandom(data) { 
        const container = document.querySelector(".random-products");
        container.innerHTML = "";
        data.forEach(obj => {
                let productBox = createDiv("products-box");
                container.append(productBox);
                let productBoxId = createDiv("products-id", `Id: ${obj.id}`)
                productBox.append(productBoxId);
                let divProductImage = createDiv("products-image")
                productBox.append(divProductImage);
                divProductImage.addEventListener("click", e => {
                        localStorage.card = JSON.stringify(obj);
                        document.location = "/product-page"
                });
                let imageProductImage = createImg(`../image/imgprod/${obj.image}.png`, `шорти`);
                divProductImage.append(imageProductImage);
                let productsName = createDiv("products-name", `${obj.name}`);
                productBox.append(productsName);
                let divProductImg = createDiv("products-img");
                productBox.append(divProductImg);
                let imgProductImg = createImg(`../image/${obj.img}.png`, `зірки`);
                divProductImg.append(imgProductImg);
                let divProductPrice = createDiv("products-price", `${obj.price}`);
                productBox.append(divProductPrice);
                let productSpan = createSpan("products-span", "As low as:");
                divProductPrice.prepend(productSpan);
                let productsSize = createDiv("products-size", `${obj.size}`);
                productBox.append(productsSize);
                let divProductColor = createDiv("products-color");
                productBox.append(divProductColor);
                let productColorImg = createImg(`../image/${obj.color}.png`, `кольоровий квадрат`);
                divProductColor.append(productColorImg);
                let divProductBtn = createBtn("products-button");
                productBox.append(divProductBtn);
                divProductBtn.addEventListener("click", e => {
                        if (!localStorage.basket) {
                                localStorage.basket = JSON.stringify([obj]);
                                document.location = "/basket"
                        } else {
                                let arr = JSON.parse(localStorage.basket);
                                arr.push(obj);
                                localStorage.basket = JSON.stringify(arr);
                                document.location = "/basket";
                        };
                });
                let productBtnImg = createImg(`../image/Group18.png`, `корзинка`);
                divProductBtn.append(productBtnImg);
        });
};



// Функція відображення в корзині кількості добавлених товарів 

function printQuantityHome() {
        let basket = JSON.parse(localStorage.basket);
            const cartQuantity = document.querySelector(".basket-span");
            let length = basket.length;
            cartQuantity.textContent = length;
           };
printQuantityHome();
        

//Перехід на сторінку корзини при кліку на малюнок корзини зверху екрану
document.querySelector(".basket").addEventListener("click", e => document.location = "/basket");
