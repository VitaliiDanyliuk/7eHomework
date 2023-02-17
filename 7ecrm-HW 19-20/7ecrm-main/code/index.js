import { isAuthorization, validate } from "./functions.js"
import { loginNow, passwordNow } from "./data.js"
import {showVideo} from "./video.js";

isAuthorization();

try {
    const elLogin = document.querySelector("input[data-type='login']");
    const elPassword = document.querySelector("input[data-type='password']");
    const elLog = document.querySelector("button[data-type='log']");
    //events
    elLogin.addEventListener("change", (e) => {
        validate(new RegExp("^" + loginNow + "$"), e.target.value);
    });

    elPassword.addEventListener("change", (e) => {
        validate(new RegExp("^" + passwordNow + "$"), e.target.value)
    });

    elLog.addEventListener("click", () => {
        if (
            validate(new RegExp("^" + loginNow + "$"), elLogin.value) &&
            validate(new RegExp("^" + passwordNow + "$"), elPassword.value)
        ) {
            localStorage.isAuthorization = true;
            document.location = "/"
        }
    })
} catch (error) {
    console.error(error)
}

function showProduct() {
    console.dir(document.location.pathname)
    if (document.location.pathname.search("store") !== -1) {
        const tbody = document.querySelector("table tbody");
        const data = JSON.parse(localStorage.BDStore);
        tbody.insertAdjacentHTML("beforeend", data.map((infoProduct, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${infoProduct.productName}</td>
                <td title="При настиску сортувати.">${infoProduct.productQuantity === "" ? "0" : infoProduct.productQuantity}</td>
                <td title="При настиску сортувати.">${infoProduct.porductPrice} грн.</td>
                <td>&#128221;</td>
                <td>${infoProduct.status ? "&#9989;" : "&#10060;"}</td>
                <td>${infoProduct.dataAdd ? infoProduct.dataAdd : "Без дати"}</td>
                <td>&#128465;</td>
            </tr>`
        }).join(""))
    }
}

showProduct();

showVideo();




