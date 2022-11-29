// // Реалізуйте програму перевірки телефону
// * Використовуячи JS створіть поле для введення телефону та кнопку збереження
// * Користувач повинен ввести номер телефону у форматі 000-000-00-00
// * Після того як користувач натискає кнопку зберегти перевірте правильність
// введення номера, якщо номер правильний зробіть зелене тло використовуючи document.location
// переведіть користувача на сторінку https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg
// якщо буде помилка , відобразіть її в діві до input

const pattern = /\d{3}-\d{3}-d{2}-d{2}/g;
let input = document.querySelector("#input");
let div = document.querySelector("#div");
let form = document.querySelector("#form");


document.querySelector("#button").onclick = () => { 
         
    if (pattern.test(input)) {
        document.location = "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8+js&sxsrf=ALiCzsbwMQknwCch6PNf0WYlf-LF3s9f0w:1669490296680&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj9rNuAyMz7AhXomIsKHVMmCIYQ_AUoAXoECAIQAw&biw=1280&bih=609&dpr=1.5#imgrc=TmIunsxZy25myM";
        form.classList.add("class1");
        
    } else {
        div.innerHTML = "Не вірний формат номера телефону";
    }
}
        
    
