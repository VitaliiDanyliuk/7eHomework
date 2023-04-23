// try {

// const textarea2 = document.querySelector(".selector");
// const teg2 = document.querySelector(".teg");

// try {
//   textarea2.addEventListener("input", (e) => {
//     let text = e.target.value;
//     const regId = /[\#]{1}/;
//     let newTeg = null;
//     if (text === "") {
//       teg2.innerText = "";
//     }

//     // Перевіряємо на id
//     if (regId.test(text)) {
//       let arr = text.split(regId);
//       console.log(arr);
//       if (arr[0] === "") {
//         newTeg = createTegId("id", arr[1]);
//       } else {
//         newTeg = createTegId(arr[0], arr[1]);
//       }
//     } else {
//       newTeg = createTegId(text);
//     }
//     showTeg(newTeg);
//   });

//   // Функція створення тегу з id
//   function createTegId(tegName, idName) {
//     let teg = document.createElement(tegName);

//     if (idName !== undefined) {
//       teg.setAttribute("id", idName);
//     }

//     return teg;
//   }
// } catch (error) {
//   console.log(error);
// }

// // Функція, яка виводить/показує дані
// function showTeg(obj) {
//   teg2.innerText = obj.outerHTML;
// }

// } catch (error) {
//   console.log(error);
// }
