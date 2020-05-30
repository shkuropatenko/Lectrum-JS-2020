/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f() {
  let num = null;

  try {

    for(const value of arguments) {
      if (typeof value !== 'number') {
        throw new Error('param should be a number!');
      }
      num += value;
    }
    
    return num;

  } catch(e) {
    return e.message;
  }

}
console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9
