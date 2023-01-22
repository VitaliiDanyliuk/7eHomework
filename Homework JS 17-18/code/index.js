import { req, show, addCurse, addHeroes} from "./function.js"
/*
Зробити програму з навігаційним меню яке буде показувати один з варіантів. 
Курс валют НБУ з датою на який день,  https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json
героїв зоряних війн, https://swapi.dev/api/people/
список справ з https://jsonplaceholder.typicode.com/ виводити які виконані які та які ні з можливістю редагування
*/
if (localStorage.history === undefined) {
    localStorage.history = JSON.stringify([])
}


// Натиск в меню навігації по списку справ

document.getElementById("todo").addEventListener("click", () => {
    req("https://jsonplaceholder.typicode.com/todos")
        .then(info => show(info));
})


// Закриття модального вікна після натиску "відхилити"

document.querySelector("#close")
    .addEventListener("click", e => document.querySelector(".parent").classList.remove("active"));


// Натиск в меню навігації по курсу НБУ

document.getElementById("nbu").addEventListener("click", () => {
    req("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
        .then(info => addCurse(info));
});


// Натиск в меню навігації по героям

document.getElementById("starwars").addEventListener("click", () => {
    req("https://swapi.dev/api/people/")
        .then(info => addHeroes(info));
});







