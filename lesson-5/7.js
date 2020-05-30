/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 * 
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// Решение

function getDivisors(param) {
  let arr = [];

  try {

    if (typeof param !== 'number') {
      throw new Error('param should be a number!');
    }

    if (param < 1) {
      throw new Error('param should be from 1 to 7!');
    }

    for(let i = 1; i <= param; i++) {
      let num = (param/i) % 1;

      if( num === 0 ) {
         arr.push(i);
      } 
    }
    return arr;

  } catch(e) {
    return e.message;
  }

}

console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]