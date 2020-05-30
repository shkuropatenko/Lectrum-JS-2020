/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

function isEven(param) {

  try {

    if (typeof param !== 'number') {
      throw new Error('param should be a number!');
    }

    if(param % 2) {
      return false;
    }
    
    return true;

  } catch(e) {
    return e.message;
  }

}

console.log(isEven(3)); // false
console.log(isEven(4)); // true
