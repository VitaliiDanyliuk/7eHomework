import { editInputProduct, generatorID, closeWindowModal } from "./functions.js";



const data = JSON.parse(localStorage.BDStore),
    btnClose = document.getElementById("close"),
    btnSave = document.getElementById("save"),
    modalWindow = document.querySelector(".container-modal");

function showProduct() {
    console.dir(document.location.pathname)
    if (document.location.pathname.search("store") !== -1) {
        const tbody = document.querySelector("table tbody");
        tbody.innerHTML = "";
        tbody.insertAdjacentHTML("beforeend", data.map((infoProduct, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${infoProduct.productName}</td>
                <td title="При настиску сортувати.">${infoProduct.productQuantity === "" ? "0" : infoProduct.productQuantity}</td>
                <td title="При настиску сортувати.">${infoProduct.porductPrice} грн.</td>
                <td class = "edit" data-id = "${index}">&#128221;</td>
                <td>${infoProduct.status ? "&#9989;" : "&#10060;"}</td>
                <td>${infoProduct.dataAdd ? infoProduct.dataAdd : "Без дати"}</td>
                <td>&#128465;</td>
            </tr>`
        }).join(""))
    };

    const [...edits] = document.querySelectorAll(".edit");
    edits.forEach((tdEdit) => {
    tdEdit.addEventListener("click", (e) => {
        modalWindow.classList.add("active");
        editProduct(data[tdEdit.dataset.id], document.location.pathname);
    });
   
});
};
showProduct();



btnClose.addEventListener("click", closeWindowModal);

const editProduct = (product, url = "") => {
    if (url.includes("store")) {
        console.log(product);
        const { id, keywords, productPrice, productName, productQuantity, productDescription, productImage, status } = product;
        const inputs = [
            editInputProduct("text", keywords, "Ключові слова", generatorID(), ""),
            editInputProduct("number", productPrice, "Вартість продукту", generatorID(), ""),
            editInputProduct("text", productName, "Назва продукту", generatorID(), ""),
            editInputProduct("number", productQuantity, "Залишок", generatorID(), ""),
            editInputProduct("text", productDescription, "Гарний опис продукції", generatorID(), ""),
            editInputProduct("text", productImage, "Картинка продукту", generatorID(), ""),
            editInputProduct("checkbox", status, "Наявніть/статус", generatorID(), "")
        ]
        document.querySelector(".input-edit").dataset.key = id;
        document.querySelector(".input-edit").innerHTML = "";
        document.querySelector(".input-edit").append(...inputs);
    };
};


function saveBtnClick () {
        const keyForm = document.querySelector(".input-edit").dataset.key;
        const inputs = document.querySelectorAll(".input-edit input");
        const obj = {};
        inputs.forEach((input) => {
            if (input.key === "Ключові слова") {
                obj.keywords = input.value.split(",")
            } else if (input.key === "Вартість продукту") {
                obj.porductPrice = parseFloat(input.value);
            } else if (input.key === "Назва продукту") {
                obj.productName = input.value;
            } else if (input.key === "Залишок") {
                obj.productQuantity = parseFloat(input.value);
            } else if (input.key === "Гарний опис продукції") {
                obj.productDescription = input.value;
            } else if (input.key === "Картинка продукту") {
                obj.productImage = input.value;
            } else if (input.key === "Наявніть/статус") {
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

    localStorage.BDStore = JSON.stringify(data);
    showProduct();
    closeWindowModal();

}


btnSave.addEventListener("click", saveBtnClick);


