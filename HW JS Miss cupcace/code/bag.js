import { createDiv, createBtn, createImg, showQuantityBag } from "./script.js";
import { showBasket } from "./cupcake.js";
// Актуалізуємо поточний рік внизу сторінки
console.log("+");
document.querySelector(
  ".year"
).innerHTML = `©MISS CUPCAKES ${new Date().getFullYear()}`;
showQuantityBag();
try {
  // Отримуємо масив об'єктів/товарів з локалсторедж
  let basket = JSON.parse(localStorage.basket);
  console.log(basket);

  // При натиску на малюнок корзинки відкривається вікно корзини
  document.querySelector(".basket img").addEventListener("click", () => {
    document.querySelector(".basket-window").style.display = "flex";
  });

  // Функція додавання картки товару на сторінку
  function showBasketMain() {
    let hr = document.createElement("hr");
    let containerBag = document.querySelector(".basket-main");
    basket.forEach((obj) => {
      let productBox = createDiv("products-box-bag");
      containerBag.append(productBox);

      let divProdOne = createDiv("div-prod-one");
      productBox.append(divProdOne);
      let divProductImg = createDiv("products-img-bag");
      divProdOne.append(divProductImg);
      let imgProductImg = createImg(`../images/${obj.image}.png`, `кекс`);
      divProductImg.append(imgProductImg);
      let productsName = createDiv("products-name-bag", `${obj.name}`);
      divProdOne.append(productsName);

      let divProdTwo = createDiv("div-prod-two");
      productBox.append(divProdTwo);

      let productsBoxButton = createDiv("products-box-button-bag-new");
      divProdTwo.append(productsBoxButton);

      let totalAllPriceNew = [];
      let btnMinus = createDiv("btn-minus-bag", "-");
      productsBoxButton.append(btnMinus);

      // Навішуємо клік на кнопку мінус
      let count = obj.count;
      btnMinus.addEventListener("click", () => {
        btnContent.innerHTML = `${obj.count}`;
        if (count <= 0) {
          return;
        } else {
          count--;
          btnContent.innerHTML = count;
          productPrice.innerHTML = `$ ${(obj.price.slice(1, 5) * count).toFixed(
            2
          )}`;
        }
        obj.count = count;
        totalAllPriceNew = [];
        basket.forEach((obj) => {
          let resPrice = +obj.price.slice(1, 5);
          let resCount = obj.count.toFixed(2);
          let res = resPrice * resCount;

          totalAllPriceNew.push(res);
          divFullPrice.innerHTML = "";

          localStorage.fullprice = JSON.stringify(totalAllPriceNew);
          divFullPrice.innerHTML = ` $ ${totalAllPriceNew
            .reduce((a, b) => a + b)
            .toFixed(2)}`;
        });
      });

      let btnContent = createDiv("btn-content-bag", `${obj.count}`);
      productsBoxButton.append(btnContent);

      let btnPlus = createDiv("btn-plus-bag", "+");

      // Навішуємо клік на кнопку плюс
      btnPlus.addEventListener("click", () => {
        btnContent.innerHTML = `${obj.count}`;
        count++;
        btnContent.innerHTML = count;
        obj.count = count;
        productPrice.innerHTML = `$ ${(obj.price.slice(1, 5) * count).toFixed(
          2
        )}`;
        totalAllPriceNew = [];

        basket.forEach((obj) => {
          let resPrice = +obj.price.slice(1, 5);
          let resCount = obj.count.toFixed(2);
          let res = resPrice * resCount;

          totalAllPriceNew.push(res);

          divFullPrice.innerHTML = "";

          localStorage.fullprice = JSON.stringify(totalAllPriceNew);
          divFullPrice.innerHTML = ` $ ${totalAllPriceNew
            .reduce((a, b) => a + b)
            .toFixed(2)}`;
        });
      });
      productsBoxButton.append(btnPlus);

      let productPrice = createDiv(
        "products-price-bag",
        `$ ${(obj.price.slice(1, 5) * obj.count).toFixed(2)}`
      );
      divProdTwo.append(productPrice);
    });

    containerBag.append(hr);
    let divFullPrice = createDiv("full-price-bag");
    containerBag.append(divFullPrice);
    let titleFullPrice = createDiv("title-full-price-bag", "Total to pay");
    divFullPrice.append(titleFullPrice);

    let divButtonBag = createDiv("div-button-bag");
    containerBag.append(divButtonBag);

    let buttonBag = createBtn("products-box-button-bag", "PLACE ORDER");
    divButtonBag.append(buttonBag);

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

  showBasketMain();
} catch (error) {
  console.log(error);
}
