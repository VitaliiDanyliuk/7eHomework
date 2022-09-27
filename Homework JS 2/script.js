
// ДЗ 2
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте «Рок-н-рол» до кінця.
// Замініть значення всередині на «Класика». Ваш код для пошуку значення
//  всередині повинен працювати для масивів з будь - якою довжиною
// Видаліть перший елемент масиву та покажіть його.
// Вставте «Реп» та «Реггі» на початок масиву.


const styles = ["Джаз", "Блюз"];
const stylesOne = styles.push("Рок-н-рол");
const middleArr = Number.parseInt(styles.length/2);
const stylesTwo = styles.splice(middleArr, 1, "Класика");
const stylesThree = styles.shift();
document.write(stylesThree + "<br/>");
const stylesFour = styles.unshift("Реп", "Реггі");


// ДЗ 1
// Використовуючи цикли намалюйте:
// 1 Порожній прямокутник
// Заповнений
// 2 Рівносторонній трикутний
// 3 Прямокутний трикутник
// 4 Ромб



// 1.

const horiz = 10;
const vert = 10;
const fullstr = '*'.repeat(10);

for (let i = 0; i < vert; ++i) {
  const str = (i == 0 || i == vert - 1) ? fullstr : '*' + ("&nbsp;&nbsp;".repeat(horiz - 2)) + '*';     
  document.write(str + "<br/>");  
}

document.write("<br/>");  


// 2.

for (let i = 0; i < 10; i++) {
    for (let k = (10 - i); k > 0; k--) {
        document.write("&nbsp;");
    }
    for (let j = 0; j <=i; j++) {
        document.write("*");
    }

    document.write("<br/>");
}

document.write("<br/>");  

// 3.

for (let i = 0; i < 10; i++) {
    for (let j = 0; j <=i; j++) {
        document.write("*");
    }

    document.write("<br/>");
}

document.write("<br/>");  

// 4.

for (let i = 0; i < 10; i++) {
    for (let k = (10 - i); k > 0; k--) {
        document.write("&nbsp;");
    }
    for (let j = 0; j <=i; j++) {
        document.write("*");
    }

    document.write("<br/>");
}

for (let i = 10; i >= 0; i--) {
    for (let k = (10 - i); k > 0; k--) {
        document.write("&nbsp;");
    }
    for (let j = 0; j <=i; j++) {
        document.write("*");
    }

    document.write("<br/>");
}



