const spans = []

// Функція отримання данних по запиту

async function req(url) {
    document.querySelector(".loader").classList.add("active")
    const data = await fetch(url);
    return data.json()
}


// Функція отримання списку справ

function show(data) {
    const display = document.querySelector(".display");
    const table = `
        <table>
         <thead>
          <tr>
           <th>
           №
           </th>
           <th>
           Задача
           </th>
           <th>
           Статус
           </th>
           <th>
           Редагувати
           </th>
          </tr>
         </thead>
         <tbody>
           ${data.map((obj, i) => {
        const span = document.createElement("span");
        span.addEventListener("click", () => {
            clickHendler(obj)
        })
        span.innerHTML = "&#128295;"
        spans.push(span)
        return `
               <tr>
                    <td>
                    ${obj.id}
                    </td>
                    <td>
                    ${obj.title
            }
                    </td>
                    <td>
                    ${obj.completed ? "&#9989;" : "&#10060;"}
                    </td>
                    <td data-span="${i}">
                      
                    </td>
                </tr>`
    }).join("")}
         </tbody>
         </table>
        `
    display.innerHTML = "";
    display.insertAdjacentHTML("beforeend", table)
   

    document.querySelectorAll("td[data-span]")
        .forEach((e, i) => {
        e.append(spans[i])
        })
    document.querySelector(".loader").classList.remove("active")
}

// Модальне вікно

function clickHendler(obj) {
    document.querySelector(".parent").classList.add("active");
    document.getElementById("description").innerText = obj.title;
    document.getElementById("status").checked = obj.completed;

    document.getElementById("save").onclick = () =>{
        const l = JSON.parse(localStorage.history);
        l.push(obj);
        localStorage.history = JSON.stringify(l)
      
        
        document.querySelector("#save")
            .addEventListener("click", e => document.querySelector(".parent").classList.remove("active"))
        
    }
}


// Функція отримання і відображення курсу НБУ

function addCurse(data) {
    const display = document.querySelector(".display");
    const tableNbu = `
    <h2 class="nbu-title">Курс валют НБУ станом на <time></time></h2>
        <table class="table-nbu">
         <thead>
          <tr>
           <th>
           №
           </th>
           <th>
           Назва
           </th>
           <th>
           Ціна
           </th>
        </tr>
         </thead>
         <tbody>
           ${data.map((obj, ind) => {
              return `
     <tr>
        <td>${ind + 1}</td>
        <td>${obj.txt}</td>
        <td>${obj.rate.toFixed(2)}</td>
    </tr>`;
    }).join("")};
         </tbody>
         </table>
        `
    display.innerHTML = "";
    display.insertAdjacentHTML("beforeend", tableNbu);
    document.querySelector(".loader").classList.remove("active");
    document.querySelector("time").innerText = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;
    
}

// Функція отримання і відображення героїв 
    
    function addHeroes(data) {
        const display = document.querySelector(".display");
        console.log(data.results);
    const heroes = `
    <div class="heroes">
           ${data.results.map((obj) => {
              return `
         <div class="heroes-box">
        <div>Name: ${obj.name}</div>
        <div>Height: ${obj.height}</div>
        <div>Mass: ${obj.mass}</div>
        <div>Hair_color: ${obj.hair_color}</div>
        <div>Skin_color: ${obj.skin_color}</div>
        </div>`
           }).join("")}
    </div>
                <ul class="buttons">
                    <li class="button-one">1</li>
                    <li class="button-two">2</li>
                    <li class="button-three">3</li>
                    <li class="button-four">4</li>
                    <li class="button-five">5</li>
                    <li class="button-six">6</li>
                    <li class="button-seven">7</li>
                    <li class="button-eight">8</li>
                    <li class="button-nine">9</li>
                </ul>
        `
    display.innerHTML = "";
    display.insertAdjacentHTML("beforeend", heroes);
        document.querySelector(".loader").classList.remove("active");
        
        const btnOne = document.querySelector(".button-one");
    btnOne.addEventListener("click", () => req("https://swapi.dev/api/people/")
    .then(info => addHeroes(info)));


        
// Пагінація
            
const btnTwo = document.querySelector(".button-two");
    btnTwo.addEventListener("click", () => req("https://swapi.dev/api/people/?page=2")
    .then(info => addHeroes(info)));

const btnThree = document.querySelector(".button-three");
    btnThree.addEventListener("click", () => req("https://swapi.dev/api/people/?page=3")
    .then(info => addHeroes(info)));

const btnFour = document.querySelector(".button-four");
    btnFour.addEventListener("click", () => req("https://swapi.dev/api/people/?page=4")
    .then(info => addHeroes(info)));

const btnFive = document.querySelector(".button-five");
    btnFive.addEventListener("click", () => req("https://swapi.dev/api/people/?page=5")
    .then(info => addHeroes(info)));

const btnSix = document.querySelector(".button-six");
    btnSix.addEventListener("click", () => req("https://swapi.dev/api/people/?page=6")
    .then(info => addHeroes(info)));

const btnSeven = document.querySelector(".button-seven");
    btnSeven.addEventListener("click", () => req("https://swapi.dev/api/people/?page=7")
    .then(info => addHeroes(info)));

const btnEight = document.querySelector(".button-eight");
    btnEight.addEventListener("click", () => req("https://swapi.dev/api/people/?page=8")
    .then(info => addHeroes(info)));

const btnNine = document.querySelector(".button-nine");
    btnNine.addEventListener("click", () => req("https://swapi.dev/api/people/?page=9")
        .then(info => addHeroes(info)));
       
}




export { req, show, addCurse, addHeroes };