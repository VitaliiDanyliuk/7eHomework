// Створіть програму секундомір.
// * Секундомір матиме 3 кнопки "Старт", "Стоп", "Скидання"
// * При натисканні на кнопку стоп фон секундоміра має бути червоним,
// старт - зелений, скидання - сірий
// * Виведення лічильників у форматі ЧЧ: ММ: СС
// * Реалізуйте завдання використовуючи синтаксис ES6 та стрілочні функції



const hoursEl = document.querySelector("#hours"),
    minutesEl = document.querySelector("#minutes"),
    secondsEl = document.querySelector("#seconds");

const startBtn = document.querySelector("#start"),
    stoptBtn = document.querySelector("#stop"),
    resetBtn = document.querySelector("#reset");

startBtn.onclick = () => {
    clearInterval(interval);
    interval = setInterval(count, 1000);
    document.querySelector(".black").style.background ='green';
}

stoptBtn.onclick = () => { 
    clearInterval(interval);
    document.querySelector(".black").style.background = 'red';
}

resetBtn.onclick = () => {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    hoursEl.innerHTML = "00";
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";
    document.querySelector(".black").style.background = 'silver';
 }


let hours = 0,
    minutes = 0,
    seconds = 0,
    interval;


const count = () => { 
    seconds++;
    if (seconds <= 9) { 
        secondsEl.innerHTML = "0" + seconds
    }
    if (seconds > 9) { 
        secondsEl.innerHTML = seconds
    }
    if (seconds > 59) { 
        minutes++;
        minutesEl.innerHTML = "0" + minutes;
        seconds = 0;
        secondsEl.innerHTML = "0" + seconds
    }

  if (minutes <= 9) { 
        minutesEl.innerHTML = "0" + minutes
    }
    if (minutes > 9) { 
        minutesEl.innerHTML = minutes
    }
    if (minutes > 59) { 
        hours++;
        hoursEl.innerHTML = "0" + hours;
        minutes = 0;
        minutesEl.innerHTML = "0" + minutes
    }

 if (hours <= 9) { 
        hoursEl.innerHTML = "0" + hours
    }
    if (hours > 9) { 
        hoursEl.innerHTML = hours
    }
    if (hours > 23) { 
        seconds = 0;
        minutes = 0;
    }

}



