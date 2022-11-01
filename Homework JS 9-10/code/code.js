import data from "./data.js"

function createElement(tag, text, className) { 
    const el = document.createElement(tag);
    el.textContent = text;
    el.classList.add(className);
    // el.onclick = click;
    return el;

}

const postId = createElement("div"),
    id = createElement("div"),
    name = createElement("div"),
    email = createElement("div"),
    body = createElement("div"),
    btn = createElement("button");


data.forEach((el) => { 
    const {postId, id, name, email, body, btn} = el;
    const arr = [createElement("div", `postId: ${postId}`, "postId"),
    createElement("div", `id: ${id}`, "id"),
    createElement("div", `name: ${name}`, "name"),
    createElement("div", `email: ${email}`, "email"),
    createElement("div", `body: ${body}`, "body"),
    createElement("button", `${btn}`, "btn btn-primary"),
    ];
    
    document.querySelector(".box").append(...arr);
   
})

const butn = document.querySelector(".btn btn-primary");
butn.onclick = function() {
  div.modal-content.append(el.this);
}

// function click() { 
// modal.style.display = "block";
// }

document.querySelector(".box").prepend(postId, id, name, email, body, btn);