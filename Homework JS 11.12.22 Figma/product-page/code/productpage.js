
// Актуалізуємо поточний рік внизу сторінки
document.querySelector(".last-div").innerHTML = `© ${new Date().getFullYear()} Sportif Mailorder. All Rights Reserved.`


// Функція додавання картки товару на сторінку Product-page

function addProductPage() {
    const containerProdPage = document.querySelector(".product-page");
    const obj = JSON.parse(localStorage.card);
      containerProdPage.innerHTML = "";                   
        const item = `
      <div class="products-box-page">
        <div class="products-box-page-block-one">
            <div class="products-image-page">
                <img src="../image/imgprod/${obj.image}.png" alt="шорти">
            </div>
            <div class="products-image-page-two">
                <img src="../image/imgprod/${obj.image}.png" alt="шорти">
                <img src="../image/imgprod/${obj.image}.png" alt="шорти">
            </div>
        </div>
        <div class="products-box-page-block-two">
            <div class="products-name-page">${obj.name} <span>ITEM # <span class="products-id-page">Id:
                        ${obj.id}</span></span></div>
            <div class="products-img-page">
                <img src="../image/${obj.img}.png" alt="зірки"> <span>93 REVIEWS</span>
            </div>
            <span class="products-span-page"> As low as: </span>
            <div class="products-price-page">${obj.price}</div>

            <div class="products-box-page-title">COLOR:</div>
            <div class="products-color-page">
                <img src="../image/${obj.color}.png" alt="зірки">
            </div>
            <div class="products-size-page">Size: ${obj.size}</div>
            <div class="products-page-img">
                <div><img src="../image/Group48.png" alt="картинка"></div>
                <div><img src="../image/Group49.png" alt="картинка"></div>
            </div>
            <div class="social-media">
                <div>
                    <img src="../image/facebook1.png" alt="значок фейсбук">
                </div>
                <div>
                    <img src="../image/twitter1.png" alt="значок твітер">
                </div>
                <div>
                    <img src="../image/pinterest1.png" alt="значок пінтерест">
                </div>
                <div>
                    <img src="../image/link1.png" alt="значок лінк">
                </div>
            </div>
            <div class="products-page-section-last">
                <div>- Worry Free Shopping -</div>
                <div>
                    <img src="../image/Rectangle74.png" alt="лінія">
                </div>

                <div class="products-page-section-last-img">
                    <div>
                        <img src="../image/Group86.png" alt="малюнок">
                    </div>
                    <div>
                        <img src="../image/Group51.png" alt="малюнок">
                    </div>
                </div>
            </div>
        </div>
    </div>
         `;
    containerProdPage.insertAdjacentHTML("beforeend", item);
                    
}

addProductPage();   

// Відображення в корзині кількості добавлених товарів 
function printQuantityProductPage() {
        let basket = JSON.parse(localStorage.basket);
            const cartQuantity = document.querySelector(".basket-span");
            let length = basket.length;
            cartQuantity.textContent = length;
           };
printQuantityProductPage();
        
//Перехід на сторінку корзини при кліку на малюнок корзини зверху екрану
document.querySelector(".basket").addEventListener("click", e => document.location = "/basket");
           