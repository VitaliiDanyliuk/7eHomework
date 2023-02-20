import { editInputProduct, generatorID, closeWindowModal } from "./functions.js";

if (!localStorage.BDRestoran) {
    localStorage.BDRestoran = JSON.stringify([])
} else {
    console.log(localStorage.BDRestoran);
};

const data = JSON.parse(localStorage.BDRestoran),
    btnClose = document.getElementById("close"),
    btnSave = document.getElementById("save"),
    modalWindow = document.querySelector(".container-modal");




  

let categoryName = null;
export {categoryName}


export function validateInputRes(obj) {
    const [...inputs] = document.querySelectorAll(".category-info input");
    inputs.forEach((el) => {
        if (el.value.length >= 3) {
            obj.id = generatorID();
            obj.dataAdd =
                `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
            if (el.dataset.type === "Назва продукта") {
                obj.productName = el.value;
            } else if (el.dataset.type === "Введіть грамовку") {
                obj.productWeiht = el.value;
            } else if (el.dataset.type === "Введіть склад") {
                obj.ingredients = el.value;
            } else if (el.dataset.type === "Вартість страви") {
                obj.price = el.value;
            } else if (el.dataset.type === "Зображення") {
                obj.productImageUrl = el.value;
            } else if (el.dataset.type === "Гарячі слова, розділяйте комою.") {
                obj.keywords.push(...el.value.split(","));
            } else if (el.dataset.type === "Вага фінальна") {
                obj.Weiht = el.value;
            }
            el.value = "";
            el.classList.remove("error")
        } else {
            el.classList.add("error")
            return;
        };
    });
    let data = JSON.parse(localStorage.BDRestoran);
    data.push(obj);
    localStorage.BDRestoran = JSON.stringify(data);
};

export function showRestoration() {
    console.dir(document.location.pathname)
    if (document.location.pathname.search("restoran") !== -1) {
        const tbody = document.querySelector("table tbody");
         tbody.innerHTML = "";
        const data = JSON.parse(localStorage.BDRestoran);
        tbody.insertAdjacentHTML("beforeend", data.map((infoProduct, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${infoProduct.productName}</td>
                <td title="При настиску сортувати.">${infoProduct.productWeiht === "" ? "0" : infoProduct.productWeiht}</td>
                <td title="При настиску сортувати.">${infoProduct.price} грн.</td>
                <td class = "edit" data-id = "${index}">&#128221;</td>
                <td>${infoProduct.status ? "&#9989;" : "&#10060;"}</td>
                <td>${infoProduct.dataAdd ? infoProduct.dataAdd : "Без дати"}</td>
                <td>&#128465;</td>
            </tr>`
        }).join(""));
    };
        const [...edits] = document.querySelectorAll(".edit");
    edits.forEach((tdEdit) => {
    tdEdit.addEventListener("click", (e) => {
        modalWindow.classList.add("active");
        editProductRestoran(data[tdEdit.dataset.id], document.location.pathname);
    });
   
});
};

showRestoration();

btnClose.addEventListener("click", closeWindowModal);

const editProductRestoran = (product, url = "") => {
    if (url.includes("restoran")) {
        console.log(product);
        const { id, productName, productWeiht, ingredients, price, productImageUrl, keywords, Weiht, status } = product;
        const inputs = [
            editInputProduct("text", productName, "Назва продукта", generatorID(), ""),
            editInputProduct("number", productWeiht, "Введіть грамовку", generatorID(), ""),
            editInputProduct("text", ingredients, "Введіть склад", generatorID(), ""),
            editInputProduct("number", price, "Вартість страви", generatorID(), ""),   
            editInputProduct("text", productImageUrl, "Зображення", generatorID(), ""),
            editInputProduct("text", keywords, "Гарячі слова, розділяйте комою.", generatorID(), ""),
            editInputProduct("number", Weiht, "Вага фінальна", generatorID(), ""),
            editInputProduct("checkbox", status, "Наявніть/статус", generatorID(), "")
        ]
        document.querySelector(".input-edit").dataset.key = id;
        document.querySelector(".input-edit").innerHTML = "";
        document.querySelector(".input-edit").append(...inputs);
    };
};


function saveBtnClickRestoran () {
        const keyForm = document.querySelector(".input-edit").dataset.key;
        const inputs = document.querySelectorAll(".input-edit input");
        const obj = {};
    inputs.forEach((input) => {
              if (input.key === "Назва продукта") {
                  obj.productName = input.value;
            } else if (input.key === "Введіть грамовку") {
                obj.productWeiht = parseFloat(input.value);
            } else if (input.key === "Введіть склад") {
                obj.ingredients = input.value;
            } else if (input.key === "Вартість страви") {
                obj.price = parseFloat(input.value);
            } else if (input.key === "Зображення") {
                obj.productImageUrl = input.value;
            } else if (input.key === "Гарячі слова, розділяйте комою.") {
                obj.keywords = input.value.split(",")
            } else if (input.key === "Вага фінальна") {
                obj.Weiht = parseFloat(input.value);
            }else if (input.key === "Наявніть/статус") {
                obj.status = input.checked;
            }
        })
    const [rez] = data.filter((el, i) => {
        return el.id === keyForm
    });
        obj.id = rez.id;
        obj.data = rez.data;

    data.forEach((el, i) => {
        if (el.id === rez.id) {
            data.splice(i, 1, obj)
        };
    });

    localStorage.BDRestoran = JSON.stringify(data);

    showRestoration();
    closeWindowModal();

}


// btnSave.removeEventListener("click", saveBtnClick);
btnSave.addEventListener("click", saveBtnClickRestoran);


