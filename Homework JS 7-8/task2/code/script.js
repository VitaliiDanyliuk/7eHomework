

// - Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив,
//  який міститиме будь-які дані, другий аргумент - тип даних.
// - Функція повинна повернути новий масив, який міститиме всі дані,
//  які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом.
//   Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string',
//    то функція поверне масив [23, null].

function filterBy(arr, type) { 
    let result = [];
    for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== type) {
        result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterBy([1, 2, 'hello', 7, true], 'number'));
