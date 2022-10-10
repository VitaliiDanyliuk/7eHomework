// ДЗ : 5-6


//1. Створити об'єкт "Документ", де визначити властивості "Заголовок, тіло, футер, дата".
// Створити об'єкт вкладений об'єкт - "Додаток".Створити об'єкт "Додаток", вкладені об'єкти,
// "Заголовок, тіло, футер, дата".Створити методи для заповнення та відображення документа.


const doc = {
    header: "text in header",
    body: "text in body",
    footer: "text in footer",
    date: "text in date",
    dodatok: {
        header: "text in dodatok header",
        body: "text in dodatok body",
        footer: "text in dodatok footer",
        date: "text in dodatok date",
    }
}

let funcElement = function(x) {
    for (let key in x) {
        document.write([key] + "<br/>");
    }
}
funcElement(doc);
funcElement(doc.dodatok);


