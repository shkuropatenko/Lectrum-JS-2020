/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение

function forEach(array, callback) {

    try {

        if (!Array.isArray(array)) {
            throw new Error('array should be a Array!');
        }

        if (typeof callback !== 'function') {
            throw new Error('callback should be a Function!');
        }

        for(let i = 0; i < array.length; i++) {
            callback(array[i], i, array);
        }

    } catch(e) {
        return e.message;
    }

}

const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

console.log(result); // undefined
