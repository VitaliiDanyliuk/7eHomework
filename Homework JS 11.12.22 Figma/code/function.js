
// Функція отримання масиву по запиту
async function req(url) { 
    const data = await fetch(url);
    return data.json()
};


// Функція додавання картки товару на сторінку
function show(data) { 
    const container = document.querySelector(".products");
    container.innerHTML = " ";
    data.forEach(obj => {
        const item = `
        <div class="products-box">
        <div class="products-id">Id: ${obj.id}</div>
        <div class="products-image">
        <img src="../image/imgprod/${obj.image}.png" alt="шорти">
        </div>
        <div class="products-name">${obj.name}</div>
        <div class="products-img">
         <img src="../image/${obj.img}.png" alt="зірки">
        </div>
        <div class="products-price"><span class="products-span"> As low as: </span> ${obj.price}</div>
        <div class="products-size">Size: ${obj.size}</div>
        <div class="products-color">
        <img src="../image/${obj.color}.png" alt="зірки">
        </div>
        <button class="products-button">
        <img src="../image/Group18.png" alt="корзинка">
        </button>
        </div>
         `;
        container.insertAdjacentHTML("beforeend", item)
    });
}


// Функція отримання чотирьох рандомних елементів масиву

function getRandomFourEl(arr) { 
    let count = 4;
    let min = 0;
    let max = arr.length-1;
    let result = [];
    for (let i = 0; i < count; i++) { 
    result.push(Math.round(min - 0.5 + Math.random() * (max - min + 1)))
    }
    return result;
}





export { req, show };