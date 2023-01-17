import { req, show } from "./function.js";

// Актуалізуємо поточний рік внизу сторінки

document.querySelector(".last-div").innerHTML = `© ${new Date().getFullYear()} Sportif Mailorder. All Rights Reserved.`


// Виводимо картки товарів при загрузці першої сторінки

req("../servise/products1.json")
    .then(info => show(info));


// Пагінація п'ятьох сторінок з картками товарів
   
const btnOne = document.querySelector(".button-one");
btnOne.addEventListener("click", () => req("../servise/products1.json")
    .then(info => show(info)));

const btnTwo = document.querySelector(".button-two");
btnTwo.addEventListener("click", () => req("../servise/products2.json")
    .then(info => show(info)));

const btnThree = document.querySelector(".button-three");
btnThree.addEventListener("click", () => req("../servise/products3.json")
    .then(info => show(info)));

const btnFour = document.querySelector(".button-four");
btnFour.addEventListener("click", () => req("../servise/products4.json")
    .then(info => show(info)));

const btnFive = document.querySelector(".button-five");
btnFive.addEventListener("click", () => req("../servise/products5.json")
    .then(info => show(info)));



// Додаємо чотири рандомні елементи масиву




function getRandomFourEl(arr) { 
    let count = 4;
    let min = 0;
    let max = arr.length-1;
    let result = [];
    for (let i = 0; i < count; i++) { 
    result.push(Math.round(min - 0.5 + Math.random() * (max - min + 1)))
    }

    return result;
}

