// Создай класс, который будет создавать пользователей с именем и фамилией. Добавить к классу метод для вывода имени и
// фамилии

// class User {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     getPerson() {
//         console.log(this.name, this.surname);
//     }
// }





// Создай список состоящий из 4 листов. Используя джс обратись к 2 li и с использованием навигации по DOM дай 1 элементу
// синий фон, а 3 красный


// const ul = document.createElement("ul");
// document.body.prepend(ul);

// for (let i = 0; i < 4; i++) {
//     let i = document.createElement("li");
//     ul.prepend(i);
//     }

// document.body.firstElementChild.children[0].style.backgroundColor = "blue";

// document.body.firstElementChild.lastElementChild.previousElementSibling.style.backgroundColor = "red";







// Создай див высотой 400 пикселей и добавь на него событие наведения мышки. При наведении мышки выведите текстом
// координаты, где находится курсор мышки


// const div = document.createElement("div");
// div.style.height = "400px";
// div.style.backgroundColor = "yellow";
// document.body.prepend(div);

// const mouse = (e) => {
//     e.target.innerText = `X: ${e.clientX} / Y: ${e.clientY}`;
// }
// div.addEventListener("mousemove", mouse);





// Создай кнопки 1,2,3,4 и при нажатии на кнопку выведи информацию о том какая кнопка была нажата


// function createBtn  () {
//     let result = [];
//     for (let i = 1; i <= 4; i++) {
//         let btn = document.createElement("button");
//         btn.value = i;
//         btn.prepend(i);
//         result.push(btn);
//         btn.onclick = getValue;
//     }
//     return result;
// }
// document.body.prepend(...createBtn());

// function getValue() {
//     document.body.append(this.value);
// }





// Создай див и сделай так, чтобы при наведении на див, див изменял свое положение на странице

// const div = document.createElement("div");
// div.style.height = "150px";
// div.style.width = "150px";
// div.style.backgroundColor = "green";
// document.body.prepend(div);

// div.addEventListener("mouseover", function() {
//     this.style.position = 'absolute';
//     this.style.left = Math.floor(Math.random() * screen.width) + "px";
//     this.style.top = Math.floor(Math.random() * screen.height) + "px";
// });







// Создай поле для ввода цвета, когда пользователь выберет какой-то цвет сделай его фоном body

// const input = document.createElement("input");
// input.type = "color";
// document.body.prepend(input);
// input.addEventListener("change", (e) => {
// document.body.style.background = e.target.value;
// })







// Создай инпут для ввода логина, когда пользователь начнет Вводить данные в инпут выводи их в консоль

// const input = document.createElement("input");
// document.body.prepend(input);

// input.addEventListener("change", function (e) {
//     console.log(e.target.value);
// })






// Создайте поле для ввода данных поле введения данных выведите текст под полем

// const input = document.createElement("input");
// document.body.prepend(input);
// const div = document.createElement("div");
// input.after(div);

// input.addEventListener("change", function (e) {
//     div.append(e.target.value);
// })