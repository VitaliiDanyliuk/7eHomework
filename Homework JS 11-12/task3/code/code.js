// // Реалізуйте програму перевірки телефону
// * Використовуячи JS створіть поле для введення телефону та кнопку збереження
// * Користувач повинен ввести номер телефону у форматі 000-000-00-00
// * Після того як користувач натискає кнопку зберегти перевірте правильність
// введення номера, якщо номер правильний зробіть зелене тло використовуючи document.location
// переведіть користувача на сторінку https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg
// якщо буде помилка , відобразіть її в діві до input


let input = document.querySelector("#input");
let div = document.querySelector("#div");
let btn = document.querySelector("#button");

btn.onclick = function (e) {
    e.preventDefault();

    if (!validate(/^\d{3}-\d{3}-\d{2}-\d{2}$/, input.value)) {
        div.innerHTML = "Помилка! Не вірний формат номера телефону";
        div.classList.add("class1");
    } else {
        input.style.border = "2px solid green";
        document.location = "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8+js&sxsrf=ALiCzsbwMQknwCch6PNf0WYlf-LF3s9f0w:1669490296680&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj9rNuAyMz7AhXomIsKHVMmCIYQ_AUoAXoECAIQAw&biw=1280&bih=609&dpr=1.5#imgrc=TmIunsxZy25myM";
    };
};

function validate(patern, value) {
    return patern.test(value)
};

