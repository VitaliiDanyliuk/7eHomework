// Слайдер <br>
// Створіть слайдер кожні 3 сек змінюватиме зображення <br>
// Зображення для відображення<br>
// https://new-science.ru/wp-content/uploads/2020/03/4848-4.jpg<br>
// https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg<br>
// https://naukatv.ru/upload/files/shutterstock_418733752.jpg<br>
// https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-12/20180913_zaa_p138_057.jpg<br>
// https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg



// Данні посилання не відкриваються (ru), тому я візьму інші картинки

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
const slider = document.querySelector('#slider');
const img = document.querySelector('img');

let i = 0;
img.src = 'images/' + images[0];

const count = () => {
    img.src = 'images/' + images[i];
    i++;
    if (i == images.length) {
        i = 0;
    }
};

setInterval(count, 3000);
