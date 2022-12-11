// 2.Дано інпути. Зробіть так, щоб усі інпути втрати фокусу перевіряли
//  свій вміст на правильну кількість символів.Скільки символів має бути в інпуті,
//  зазначається в атрибуті data - length.Якщо вбито правильну кількість,
//  то межа інпуту стає зеленою, якщо неправильна – червоною

const [...inputs] = document.querySelectorAll("input");
inputs.forEach(element => { 
    element.addEventListener("blur", blur)
})

function blur(e) { 
    if (this.value.length == this.dataset.length) {
        this.style.border = "3px solid green";
    } else { 
        this.style.border = "3px solid red";
    }
}