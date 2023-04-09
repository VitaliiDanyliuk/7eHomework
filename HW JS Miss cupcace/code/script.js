// Актуалізуємо поточний рік внизу сторінки

document.querySelector(
  ".year"
).innerHTML = `©MISS CUPCAKES ${new Date().getFullYear()}`;

// Функція отримання масиву по запиту
async function request(url) {
  const arrProducts = await fetch(url);
  return arrProducts.json();
}

// Виводимо картки товарів при загрузці сторінки
request("../product.json").then((info) => show(info));

// Функція створення тегу Div, додавання до нього класу та контенту
function createDiv(clas, content) {
  const div = document.createElement("div");
  div.classList.add(clas);
  div.textContent = content;
  return div;
}

// Функція створення тегу Img, додавання до нього атрибутів
function createImg(content, content2) {
  const img = document.createElement("img");
  img.setAttribute("src", content);
  img.setAttribute("alt", content2);
  return img;
}

// Функція створення тегу Button, додавання до нього класу та конткнту
function createBtn(clas, content) {
  const btn = document.createElement("button");
  btn.classList.add(clas);
  btn.textContent = content;
  return btn;
}

// Функція додавання картки товару на сторінку
function show(data) {
  let container = document.querySelector(".products");
  data.forEach((obj) => {
    let productBox = createDiv("products-box");
    container.append(productBox);
    let divProductImg = createDiv("products-img");
    productBox.append(divProductImg);
    let imgProductImg = createImg(`../images/${obj.image}.png`, `кекс`);
    divProductImg.append(imgProductImg);
    let productsName = createDiv("products-name", `${obj.name}`);
    productBox.append(productsName);
    let productsDescription = createDiv(
      "products-description",
      `${obj.description}`
    );
    productBox.append(productsDescription);
    let productsBoxButton = createDiv("products-box-button");
    productBox.append(productsBoxButton);

    let productsBoxButtonOne = createDiv("products-box-button-one");
    productsBoxButton.append(productsBoxButtonOne);

    let btnMinus = createDiv("btn-minus", "-");
    productsBoxButtonOne.append(btnMinus);
    // Навішуємо клік на кнопку мінус
    let count = 0;
    btnMinus.addEventListener("click", () => {
      btnContent.innerHTML = "";
      if (count <= 0) {
        return;
      } else {
        count--;
        btnContent.innerHTML = count;
      }
      obj.count = count;
    });
    let btnContent = createDiv("btn-content", "0");
    productsBoxButtonOne.append(btnContent);

    let btnPlus = createDiv("btn-plus", "+");

    // Навішуємо клік на кнопку плюс
    btnPlus.addEventListener("click", () => {
      btnContent.innerHTML = "";
      count++;
      btnContent.innerHTML = count;
      obj.count = count;
    });
    productsBoxButtonOne.append(btnPlus);
    let productBtn = createBtn("products-button", "ADD TO CART");
    productsBoxButton.append(productBtn);

    // Навішуємо клік на кнопку додавання товару до корзини
    productBtn.addEventListener("click", (e) => {
      if (count === 0) {
        return;
      } else {
        if (!localStorage.basket) {
          localStorage.basket = JSON.stringify([obj]);
        } else {
          let arr = JSON.parse(localStorage.basket);
          arr.push(obj);
          localStorage.basket = JSON.stringify(arr);
        }
        if (!localStorage.count) {
          localStorage.count = JSON.stringify([count]);
        } else {
          let arr = JSON.parse(localStorage.count);
          arr.push(count);
          localStorage.count = JSON.stringify(arr);
        }
      }
      showQuantityBag();
    });
    let divProductImage = createDiv("products-image");
    productBox.append(divProductImage);
  });
}

// Функція відображення в корзині зверху екрану кількості добавлених товарів

function showQuantityBag() {
  let basket = JSON.parse(localStorage.count);
  const cartQuantity = document.querySelector(".basket-span");
  let length = basket.reduce((a, b) => a + b);
  cartQuantity.textContent = length;
}
showQuantityBag();

export { createDiv, createBtn, createImg, showQuantityBag };
