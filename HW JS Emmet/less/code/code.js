// const textarea = document.querySelector(".selector");
// const teg = document.querySelector(".teg");

// textarea.addEventListener("input", (e) => {
//   let text = e.target.value;
//   const reg = /[\.]{1}/;
//   const regId = /[\#]{1}/;
//   const regText = /[{}]{1}/;
//   const regIn = /[>]{1}/;

//   let newTeg = null;
//   if (text === "") {
//     teg.innerText = "";
//   }

//   // перевірка на class
//   if (reg.test(text)) {
//     let arr = text.split(reg);
//     if (arr[0] === "") {
//       newTeg = createTeg("div", arr[1]);
//     } else {
//       newTeg = createTeg(arr[0], arr[1]);
//     }
//   } else {
//     newTeg = createTeg(text);
//   }

//   // Перевіряємо на id
//   if (regId.test(text)) {
//     let arr = text.split(regId);
//     console.log(arr);
//     if (arr[0] === "") {
//       newTeg = createTegId("id", arr[1]);
//     } else {
//       newTeg = createTegId(arr[0], arr[1]);
//     }
//   } else {
//     newTeg = createTegId(text);
//   }

//   // Перевіряємо на текст всередині тегу
//   if (regText.test(text)) {
//     let arr = text.split(regText);
//     newTeg = createTegText(arr[0], arr[1]);
//   }

//   // Перевіряємо на знак вкладеності тегу в тег
//   if (regIn.exec(text)) {
//     let arr = text.split(regIn);
//     newTeg = createTegIn(arr[0], arr[1]);
//   }

//   showTeg(newTeg);
// });

// // Функція створення тегу, класу, тексту
// function createTeg(tegName, className, text) {
//   let teg = document.createElement(tegName);
//   if (className !== undefined && className !== '') {
//     teg.classList.add(className);
//   }
//   if (text !== undefined) {
//     teg.innerText = text;
//   }
//   return teg;
// }

//   // Функція створення тегу з id
//   function createTegId(tegName, idName) {
//     let teg = document.createElement(tegName);
//     if (idName !== undefined) {
//       teg.setAttribute('id', idName);
//     }
//     return teg;
//   }

// // Функція створення тегу з текстом всередині
// function createTegText(tegName, text) {
//   let teg = document.createElement(tegName);
//   if (text !== undefined) {
//     teg.innerText = text;
//   }
//   return teg;
// }

// // Функція створення тегу всередині тегу
// function createTegIn(tegNameOne, tegNameTwo) {
//     let tegOne = document.createElement(tegNameOne);
//     let tegTwo = document.createElement(tegNameTwo);
//     if (tegNameOne !== undefined || tegNameTwo !== undefined) {
//         // tegOne.insertAdjacentHTML("beforeend", tegTwo.outerHTML);
//         tegOne.prepend(tegTwo);
//     }
//   return tegOne;
// }




// // Функція, яка виводить/показує дані
// function showTeg(obj) {
//   teg.innerText = obj.outerHTML;
// }
