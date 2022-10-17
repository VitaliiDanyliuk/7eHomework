

// Створіть клас Phone, який містить змінні number, model і weight.
// Створіть три екземпляри цього класу.
// Виведіть на консоль значення їх змінних.
// Додати в клас Phone методи:
// receiveCall, має один параметр - ім'я.
// Виводить на консоль повідомлення "Телефонує {name}".
// Метод getNumber повертає номер телефону.
// Викликати ці методи кожного з об'єктів.



class Phone { 
    constructor(number, model, weight) { 
        this.number = number;
        this.model = model;
        this.weight = weight;
    }
    receiveCall(name) { 
        console.log(`Телефонує ${name}`);
    }
    getNumber(number) { 
        return this.number;
    }
}

const phoneFirst = new Phone(380971111111, 'X1', 100);
console.log(phoneFirst);

const phoneSecond = new Phone(380972222222, 'X2', 120);
console.log(phoneSecond);

const phoneThird = new Phone(380973333333, 'X3', 150);
console.log(phoneThird);

phoneFirst.receiveCall('Ivan');
console.log(phoneFirst.getNumber());

phoneSecond.receiveCall('Petro');
console.log(phoneSecond.getNumber());

phoneThird.receiveCall('Masha');
console.log(phoneThird.getNumber());
