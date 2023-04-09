import { createDiv, createBtn, createImg, showQuantityBag } from "./script.js";

// Актуалізуємо поточний рік внизу сторінки

document.querySelector(
  ".year"
).innerHTML = `©MISS CUPCAKES ${new Date().getFullYear()}`;

// Викликаємо функцію відображення в корзині зверху екрану кількості добавлених товарів
showQuantityBag();

// Отримуємо масив об'єктів/товарів з локалсторедж
let basket = JSON.parse(localStorage.basket);

// При натиску на малюнок корзинки відкривається вікно корзини
document.querySelector(".basket img").addEventListener("click", () => {
  document.querySelector(".basket-window").style.display = "flex";
});

// Функція додавання картки товару на сторінку
function showBasket() {
  let hr = document.createElement("hr");
  let hr1 = document.createElement("hr");
  let containerBag = document.querySelector(".basket-window");
  let titleBag = createDiv("bag-title");
  containerBag.append(titleBag);

  let boxBagTitle = createDiv("box-bag-title", "My Bag");
  titleBag.append(boxBagTitle);
  let boxBagImg = createImg(`../images/Vector5.png`, `хрестик`);
  titleBag.append(boxBagImg);

  containerBag.append(hr1);

  // При натиску на хрестик закривається вікно корзини
  boxBagImg.addEventListener("click", () => {
    document.querySelector(".basket-window").style.display = "none";
  });

  basket.forEach((obj) => {
    let productBox = createDiv("products-box");
    containerBag.append(productBox);
    let divProductImg = createDiv("products-img");
    productBox.append(divProductImg);
    let imgProductImg = createImg(`../images/${obj.image}.png`, `кекс`);
    divProductImg.append(imgProductImg);
    let productsName = createDiv("products-name", `${obj.name} x `);
    productBox.append(productsName);

    let productCount = createDiv("products-count", `${obj.count}`);
    productsName.append(productCount);
    let productPrice = createDiv(
      "products-price",
      `$ ${(obj.price.slice(1, 5) * obj.count).toFixed(2)}`
    );
    productBox.append(productPrice);
  });

  containerBag.append(hr);
  let divFullPrice = createDiv("full-price");
  containerBag.append(divFullPrice);
  let titleFullPrice = createDiv("title-full-price", "Total to pay");
  divFullPrice.append(titleFullPrice);
  let buttonBag = createBtn("products-box-button", "CHECK OUT");
  containerBag.append(buttonBag);

  buttonBag.addEventListener("click", () => {
    document.location = "/my_bag";
  });

  let bagLastContent = createDiv("bag-last-content", "VIEW CART");
  containerBag.append(bagLastContent);

  let totalAllPrice = 0;

  // Функція відображення загальної вартості добавлених товарів у корзину
  function addTotalPrice() {
    basket.forEach(
      (obj) => (totalAllPrice += obj.price.slice(1, 5) * obj.count)
    );
    divFullPrice.append(`$ ${totalAllPrice.toFixed(2)}`);
  }

  addTotalPrice();
}

showBasket();

export { showBasket };
