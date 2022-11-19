
const createComment = ({ id, email, body, name }) => { 
    const elCard = document.createElement("div"),
        elName = document.createElement("div"),
        elEmail = document.createElement("div"),
        elBody = document.createElement("div"),
    btn = document.createElement("button");

    elCard.className = "card-comment";

    elCard.dataset.id = id;
    elName.textContent = name;
    elEmail.textContent = email;
    elBody.textContent = body;
    btn.textContent = "Редагувати"

    elCard.append(elName, elEmail, elBody, btn);

    btn.onclick = function () { 
        document.querySelector(".modal").style.display = "flex";
        document.querySelector(".modal > .name").innerHTML = name;
        document.querySelector(".modal > .comment").innerHTML = body;
        document.querySelector(".modal > .comment").setAttribute("contenteditable", "true");
    }

    return elCard;
}

const comments = data.map(el => { 
    return createComment(el)
})

window.onload = () => { 
    document.getElementById("comments").append(...comments);
    document.querySelector(".close").onclick = function () { 
        document.querySelector(".modal").style.display = "none"
    }
}