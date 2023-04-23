// try {
// const textarea4 = document.querySelector(".selector");
// const teg4 = document.querySelector(".teg");

// textarea4.addEventListener("input", (e) => {
//   let text = e.target.value;
//   const regIn = /[>]{1}/;
//   let newTeg = null;
//   if (text === "") {
//     teg4.innerText = "";
//   }

//   if (regIn.test(text)) {
//     let arr = text.split(regIn);
//     newTeg = createTegIn(arr[0], arr[1]);
//   }

//   showTeg(newTeg);
// });

// // Функція створення тегу всередині тегу
// function createTegIn(tegNameOne, tegNameTwo) {
//   let tegOne = document.createElement(tegNameOne);
//   let tegTwo = document.createElement(tegNameTwo);
//   if (tegNameOne !== undefined || tegNameTwo !== undefined) {
//     // console.log(tegOne);
//     // console.log(tegTwo);
//     // console.log(tegOne.outerHTML.append(tegTwo.outerHTML));
//     //   tegOne.insertAdjacentHTML("beforeend", tegTwo.outerHTML);
//     tegOne.prepend(tegTwo);
//     console.log(tegOne);
//     // teg4.innerText = tegOne.append(tegTwo);
//     //    teg4.innerText = `${tegOne.outerHTML}${tegTwo.outerHTML}`;
//     //   teg4.innerText = `<${tegOne.outerHTML}><${tegTwo.outerHTML}> </${tegTwo.outerHTML}></${tegOne.outerHTML}>`;
//     //   console.log(teg4);
//   }

//   return tegOne;
// }

// // Функція, яка виводить/показує дані
// function showTeg(obj) {
//   teg4.innerText = obj.outerHTML;
// }


// } catch (error) {
//   console.log(error);
// }

