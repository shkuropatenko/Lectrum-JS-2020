/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

function f2(param) {

  try {

    if (typeof param !== 'number') {
      throw new Error('param should be a number!');
    }
  
    return param*param*param;

  } catch(e) {
    return e.message;
  }

}

console.log(f2(2)); // 8
