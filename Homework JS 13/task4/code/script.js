// 4.
// - При завантаженні сторінки показати користувачеві поле введення (`input`)
//  з написом`Price`.Це поле буде служити для введення числових значень
// - Поведінка поля має бути такою:
// - При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору.
// При втраті фокусу вона пропадає.
// - Коли забрали фокус з поля - його значення зчитується, над полем створюється
// `span`, в якому має бути виведений текст:
// .
// Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення
//  фарбується зеленим.
// - При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
// - Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле
// введення червоною рамкою,
// під полем виводити фразу - `Please enter correct price`. `span` зі значенням
//  при цьому не створюється.

let spanCreated = false;
const input = document.querySelector('input');

input.addEventListener('focusin', function () {
    this.style.border = '2px solid green'
    this.style.outline = '0'
});

input.addEventListener('input', function () {
        
    this.value = this.value.replace(/[^0-9\+\-\.]/g, '')
});

input.addEventListener('focusout', function () {
    if (parseInt(this.value) < 0) {
        this.after(helpText2)
        this.style.border = '2px solid red'
        setTimeout(function () {
            helpText2.remove()
        }, 7000)
    } else {
        this.style.border = '2px solid black'
        this.insertAdjacentElement('beforebegin', spanHelpText)
    }
});

let helpText2 = document.createElement('span');
helpText2.innerHTML = '<br>Please enter correct price';
helpText2.style.color = 'rgb(2 1 1 / .4)';

let spanClose = document.createElement('span');
spanClose.innerHTML = 'X<br>';
spanClose.classList = 'close';
spanClose.onclick = closeClick.bind(this);

let spanHelpText = document.createElement('span', document.createElement('hr'));
spanHelpText.innerHTML = 'КНОПКА';
spanHelpText.id = 'help-text';

spanHelpText.append(spanClose);

    function closeClick(e){
        if (e.target.parentElement === spanHelpText){
            spanHelpText.remove()
        }

};
