/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение

function every(array, callback) {

    try {

        if (!Array.isArray(array)) {
            throw new Error('array should be a Array!');
        }

        if (typeof callback !== 'function') {
            throw new Error('callback should be a Function!');
        }

        for(let i = 0; i < array.length; i++) {
            let result = callback(array[i], i, array);

            if(!result) {
                return false
            }
        }

        return true;

    } catch(e) {
        return e.message;
    }

}

const result = every(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'number';
});

console.log(result); // true