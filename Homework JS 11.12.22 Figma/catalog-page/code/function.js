
// Функція отримання масиву по запиту
async function req(url) { 
    const data = await fetch(url);
    return data.json()
};


// Функція створення тегу Div, додавання до нього класу та контенту
function createDiv(clas, content) { 
    const div = document.createElement("div");
    div.classList.add(clas);
    div.textContent = content;
    return div;
};

// Функція створення тегу Img, додавання до нього атрибутів
function createImg(content, content2) { 
    const img = document.createElement("img");
    img.setAttribute("src", content);
    img.setAttribute("alt", content2);
    return img;
};

// Функція створення тегу Span, додавання до нього класу та контенту
function createSpan(clas, content) { 
    const span = document.createElement("span");
    span.classList.add(clas);
    span.textContent = content;
    return span;
}

// Функція створення тегу Button, додавання до нього класу 
function createBtn(clas) { 
    const btn = document.createElement("button");
    btn.classList.add(clas);
        return btn;
};


// Функція додавання картки товару на сторінку
function show(data) { 
        // debugger
        const container = document.querySelector(".products");
        container.innerHTML = "";
        data.forEach(obj => {
                let productBox = createDiv("products-box");
                container.append(productBox);
                let productBoxId = createDiv("products-id", `Id: ${obj.id}`)
                productBox.append(productBoxId);
                let divProductImage = createDiv("products-image")
                productBox.append(divProductImage);

// Навішуємо клік на картинку для відкриття картки товару з детальною інформацією про товар
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

// Навішуємо клік на кнопку додавання товару в корзину
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


// Функція фільтрації товарів по розмірам

function showFilterSize(data) {
const [...sizes] = document.querySelectorAll(".size-btn li");
        sizes.forEach(el => {
                let res = [];
                el.addEventListener("click", e => {
                        data.forEach(obj => {
                                if (e.target.dataset.filter == obj.size) {
                                        res.push(obj);
                                }
                                return res;
                        });
                        show(res);
                });
        });
};


// Функція фільтрації товарів по кольору

function showFilterColor(data) {
const [...colors] = document.querySelectorAll(".color-btn li");
        colors.forEach(el => {
                let res = [];
                el.addEventListener("click", e => {
                        data.forEach(obj => {
                                if (e.target.dataset.filter == obj.color) {
                                        res.push(obj);
                                };
                                return res;
                        });
                        show(res);
                });
        });
};

// Функція пошуку товару в хедері, що є на кожній сторінці

function searchProduct(data) { 
const search = document.querySelector(".search-title input");
        search.addEventListener("change", e => {
                const newArray = data.filter((obj) => {
                return obj.name.toLowerCase().includes(e.target.value);
                });

                show(newArray);
 
        });
};

// Функція пошуку товару на сторінці Catalog-page

function searchProductCatalogPage(data) { 
const search = document.querySelector(".header-div-search-title input");
        search.addEventListener("change", e => {
                const newArray = data.filter((obj) => {
                        return obj.name.toLowerCase().includes(e.target.value);
                });
                show(newArray);
        });
};


    // Функція очищення фільтру по розміру
    
function btnCancelSizeFilter() { 
    let btn = document.querySelector(".del-size-filter");
    btn.addEventListener("click", e => {
        req("../servise/products1.json")
            .then(info => show(info));
    });
};

// Функція очищення фільтру по кольору
function btnCancelColorFilter() { 
    let btn = document.querySelector(".del-color-filter");
    btn.addEventListener("click", e => {
        req("../servise/products1.json")
            .then(info => show(info));
    });
};



export { req, show, showFilterSize, showFilterColor, searchProduct, searchProductCatalogPage, btnCancelSizeFilter, btnCancelColorFilter };
export { createDiv, createImg, createSpan, createBtn};