// 1. Прив'яжіть усім інпутам наступну подію - втрата фокусу кожен інпут
//  виводить своє value в параграф з id = "test"

const [...inputs] = document.querySelectorAll("input");
inputs.forEach(element => {
    element.addEventListener("change", change)
});
function change(e = window.event) { 
    document.querySelector("#test").innerText = e.target.value;
}