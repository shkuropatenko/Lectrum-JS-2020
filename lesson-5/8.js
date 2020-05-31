/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

function f(param) {

  try {

    if (!Array.isArray(param)) {
      throw new Error('param should be a Array!');
    }

    if (!param.length) {
      throw new Error('Array length should be from 1');
    }

    let paramLength = param.length;
    
    if (paramLength > 0) {
      console.log(param.splice(0, 1));
      paramLength--;
      
      if(paramLength > 0) {
        return f(param);
      }
     
    }    

  } catch(e) {
    return e.message;
  }

}

f([1, 2, 3]);
// 1
// 2
// 3
