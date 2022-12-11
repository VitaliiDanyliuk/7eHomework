import city from "./uacity.js";

// 3.Використовуючи бібліотеку bootstrap створіть форму у якій запитати
//  у користувача данні.
// Ім'я, Прізвище (Українською)
// Список з містами України
// Номер телефону у форматі +380XX XXX XX XX - Визначити код оператора та
//  підтягувати логотип оператора.
// Пошта
// Якщо поле має помилку показати червоний хрестик  біля поля ❌,  якщо помилки
//  немає показати зелену галочку ✅
// Перевіряти данні на етапі втрати фокуса та коли йде натискання кнопки
// відправити дані

const dataCity = document.querySelector("#data-city");
city.forEach(element => { 
    const option = document.createElement("option");
    option.value = element.city;
    dataCity.append(option);

})

const userName = document.querySelector("#name"),
    userLastName = document.querySelector("#lastName"),
    userTel = document.querySelector("#tel"),
    userMail = document.querySelector("#mail"),
    btnReset = document.querySelector("#reset"),
    btnSend = document.querySelector("#send");
        

 
function validate(patern, value) {
    return patern.test(value);
}
 
userName.addEventListener("change", (e) => {
    if (validate(/^[А-я-ІіЇїЄє]+$/, e.target.value)) {
        e.target.before("✅");
    } else {
        e.target.before("❌");
    }
});

userLastName.addEventListener("change", (e) => {
    if (validate(/^[А-я-ІіЇїЄє]+$/, e.target.value)) {
        e.target.before("✅");
    } else {
        e.target.before("❌");
    }
});

userTel.addEventListener("change", (e) => {
    if (validate(/\+380\d{2} \d{3} \d{2} \d{2}/, e.target.value)) {
        e.target.before("✅");
    } else {
        e.target.before("❌");
    };
    const mob = e.target.value.slice(4, 6);

    if (mob == "67" || mob == "68" || mob == "96" || mob == "97" || mob == "98") {
        e.target.insertAdjacentHTML("afterend", `<img src="./image/kyivstar.png" alt="Київстар">`)
    } else if (mob== "50" || mob == "66" || mob == "95" || mob == "99") {
        e.target.insertAdjacentHTML("afterend", `<img src="./image/мтс.jpg" alt="МТС">`)
    } else if (mob == "63" || mob == "73" || mob == "93") {
       e.target.insertAdjacentHTML("afterend", `<img src="./image/lifecell.png" alt="Лайфсел">`)
    } else if (mob == "91") {
        e.target.insertAdjacentHTML("afterend", `<img src="./image/Utel.jpg" alt="Утел">`)
    } else if (mob == "92") {
        e.target.insertAdjacentHTML("afterend", `<img src="./image/Peoplenet.jpg" alt="Peoplenet">`)
    } else if (mob == "89" || mob == "94") {
       e.target.insertAdjacentHTML("afterend", `<img src="./image/intertelekom.png" alt="Интертелеком">`)
    }

});
  


userMail.addEventListener("change", (e) => {
    if (validate(/^[A-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$/, e.target.value)) {
        e.target.before("✅");
    } else {
        e.target.before("❌");
    }
});

function clearAllFormInputs() {
  let form = document.querySelector("form");
  let inputs = form.querySelector("input");
  for (let input of inputs)
    input.value = '';
}

btnReset.addEventListener("click", clearAllFormInputs);


function sendData() {
alert("Вітаємо!Дані відправлено");
};

btnSend.addEventListener("click", sendData);