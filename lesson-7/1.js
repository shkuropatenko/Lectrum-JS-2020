/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];

// Решение

function inspect(paramArr) {
    
    if(!Array.isArray(paramArr)) {
        throw new Error('Should be Array!');
    }
  
    //  вот эта проверка не нужна hasString = paramArr.every(word => typeof word !== 'string'); и лучше если вы и хотите такую проверку написать лучше её написать так, wrongStringFormat или что-то вроде этого
    let wrongStringFormat = paramArr.every(word => typeof word !== 'string');
    
    if(wrongStringFormat) {
        return [];
    }
    
    const result = paramArr.filter(word => typeof word === 'string').map(num => num.length);

    return result;
}


try {
    inspect(array);
} catch (error) {
    
}
const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

