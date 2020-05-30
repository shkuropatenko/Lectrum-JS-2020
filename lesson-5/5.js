/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 * 
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

function isPositive(param) {

  try {

    if (typeof param !== 'number') {
      throw new Error('param should be a number!');
    }

    if(param > 0) {
      return true;
    } else if(param < 0) {
      return false;
    } else {
      return false;
    }

  } catch(e) {
    return e.message;
  }

}

console.log(isPositive(-3)); // false
console.log(isPositive(3)); // true