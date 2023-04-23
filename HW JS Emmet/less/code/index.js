try {
  const textarea = document.querySelector(".selector");
  const teg = document.querySelector(".teg");

  textarea.addEventListener("input", (e) => {
    let text = e.target.value;
    const reg = /[\.]{1}/;
    let newTeg = null;
    if (text === "") {
      teg.innerText = "";
    }
    // перевірка на class
    if (reg.test(text)) {
      let arr = text.split(reg);
      if (arr[0] === "") {
        newTeg = createTeg("div", arr[1]);
      } else {
        newTeg = createTeg(arr[0], arr[1]);
      }
    } else {
      newTeg = createTeg(text);
    }

    showTeg(newTeg);
  });

  // Функція створення тегу, класу, тексту
  function createTeg(tegName, className, text) {
    let teg = document.createElement(`${tegName}`);
    if (className !== undefined && className !== "") {
      teg.classList.add(className);
    }

    // if (className !== undefined) {
    //   teg.className = "";
    //   if (teg.className !== "") {
    //     teg.classList.add(className);
    //   }
    // }

    if (text !== undefined) {
      teg.innerText = text;
    }

    return teg;
  }

  // Функція, яка виводить/показує дані
  function showTeg(obj) {
    teg.innerText = obj.outerHTML;
  }
} catch (error) {
  console.log(error);
}
