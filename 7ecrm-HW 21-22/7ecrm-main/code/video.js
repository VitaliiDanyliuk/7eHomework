import { editInputProduct, generatorID, closeWindowModal } from "./functions.js";

if (!localStorage.BDVideo) {
    localStorage.BDVideo = JSON.stringify([])
} else {
    console.log(localStorage.BDVideo);
};

const data = JSON.parse(localStorage.BDVideo),
    btnClose = document.getElementById("close"),
    btnSave = document.getElementById("save"),
    modalWindow = document.querySelector(".container-modal");





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
                obj.productDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
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
         tbody.innerHTML = "";
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
                <td class = "edit" data-id = "${index}">&#128221;</td>
                <td>&#128465;</td>
            </tr>`
        }).join(""));
    };
        const [...edits] = document.querySelectorAll(".edit");
    edits.forEach((tdEdit) => {
    tdEdit.addEventListener("click", (e) => {
        modalWindow.classList.add("active");
        editProductVideo(data[tdEdit.dataset.id], document.location.pathname);
    });
   
});
};

showVideo();

btnClose.addEventListener("click", closeWindowModal);


const editProductVideo = (product, url = "") => {
    if (url.includes("video")) {
        const { id, productName, productDate, productLink } = product;
        const inputs = [
            editInputProduct("text", productName, "Назва", generatorID(), ""),
            editInputProduct("text", productDate, "Дата публікації", generatorID(), ""),
            editInputProduct("text", productLink, "Посилання на відео", generatorID(), ""),
        ]
        document.querySelector(".input-edit").dataset.key = id;
        document.querySelector(".input-edit").innerHTML = "";
        document.querySelector(".input-edit").append(...inputs);
    };
};


function saveBtnClickVideo () {
        const keyForm = document.querySelector(".input-edit").dataset.key;
        const inputs = document.querySelectorAll(".input-edit input");
        const obj = {};
        inputs.forEach((input) => {
            if (input.key === "Назва") {
                obj.productName = input.value;
            } else if (input.key === "Дата публікації") {
                obj.productDate = input.value;
            } else if (input.key === "Посилання на відео") {
                obj.productLink = input.value;
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

    localStorage.BDVideo = JSON.stringify(data);
    showVideo();
    closeWindowModal();

}




// btnSave.removeEventListener("click", saveBtnClick);
btnSave.addEventListener("click", saveBtnClickVideo);


