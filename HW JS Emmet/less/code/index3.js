// try {

// const textarea3 = document.querySelector(".selector");
// const teg3 = document.querySelector(".teg");

// textarea3.addEventListener("input", (e) => {
//   let text = e.target.value;
//   const regText = /[{}]{1}/;
//   let newTeg = null;
//   if (text === "") {
//     teg3.innerText = "";
//   }

//   if (regText.test(text)) {
//     let arr = text.split(regText);
//     newTeg = createTegText(arr[0], arr[1]);
//   }

//   showTeg(newTeg);
// });

// // Функція створення тегу з текстом всередині
// function createTegText(tegName, text) {
//   let teg = document.createElement(tegName);

//   if (text !== undefined) {
//     teg.innerText = text;
//   }

//   // if (tegName !== undefined && tegName !== "" && tegName !== null) {
//   //   if (text !== undefined) {
//   //     teg.innerText = text;
//   //   }
//   // }

//   return teg;
// }

// // Функція, яка виводить/показує дані
// function showTeg(obj) {
//   teg3.innerText = obj.outerHTML;
// }


// } catch (error) {
//   console.log(error);
// }
