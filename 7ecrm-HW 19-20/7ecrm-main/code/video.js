import { createCategoryInputModal, generatorID } from "./functions.js";

if (!localStorage.BDVideo) {
    localStorage.BDVideo = JSON.stringify([])
} else {
    console.log(localStorage.BDVideo);
};



export function validateInputV(obj) {
    const [...inputs] = document.querySelectorAll(".category-info input");
    inputs.forEach((el) => {
        if (el.value.length >= 3) {
            obj.id = generatorID();
            obj.dataAdd =
                `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
            if (el.dataset.type === "Назва") {
                obj.productName = el.value;
            } else if (el.dataset.type === "Дата публікації") {
                obj.productDate = (new Date(el.value) == 'Invalid Date') ? new Date() : new Date(el.value);
            } else if (el.dataset.type === "Посилання на відео") {
                obj.productLink = el.value
            }
            el.value = "";
            el.classList.remove("error")
        } else {
            el.classList.add("error")
            return;
        };
    });
    let data = JSON.parse(localStorage.BDVideo);
    data.push(obj);
    localStorage.BDVideo = JSON.stringify(data);
};

export function showVideo() {
    console.dir(document.location.pathname)
    if (document.location.pathname.search("video") !== -1) {
        const tbody = document.querySelector("table tbody");
        const data = JSON.parse(localStorage.BDVideo);
        tbody.insertAdjacentHTML("beforeend", data.map((infoProduct, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${infoProduct.productName}</td>
                <td>${infoProduct.productDate}</td>
                <td><iframe width="426" height="240"
                src="${infoProduct.productLink}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope;
                picture-in-picture; web-share"
                allowfullscreen>      
                </iframe>
                </td>
                <td>&#128221;</td>
                <td>&#128465;</td>
            </tr>`
        }).join(""));
    };
};

