/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f(param1, param2, param3) {

  try {

    for(const value of arguments) {
      if (typeof value !== 'number') {
        throw new Error('param should be a number!');
      }
    }

    return (param1 - param2) / param3;

  } catch(e) {
    return e.message;
  }

}

console.log(f(9, 3, 2)); // 3