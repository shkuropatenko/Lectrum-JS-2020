/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение

function some(array, callback) {

    try {

        if (!Array.isArray(array)) {
            throw new Error('array should be a Array!');
        }

        if (typeof callback !== 'function') {
            throw new Error('callback should be a Function!');
        }

        for(let i = 0; i < array.length; i++) {
            let result = callback(array[i], i, array);            

            if(result) {
                return true;
            }
        }

        return false;

    } catch(e) {
        return e.message;
    }

}

const result = some(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'string';
});

console.log(result); // true