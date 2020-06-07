/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(value, quantity) {
  if(typeof value !== 'number' && typeof value !== 'string' && typeof value !== 'object' && !Array.isArray(value)) {
    throw new Error('value should be a (number, string, object, array)!');
  }

  if(typeof quantity !== 'number') {
    throw new Error('quantity should be a number!');
  }

  let newArr = [];
  let n = 0;
  while(n < quantity) {
    newArr.push(value);
    n++;
  }
  
  return newArr;
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]