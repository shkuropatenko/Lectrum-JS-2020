/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(str) {

  if(typeof str !== 'string') {
    throw new Error('Should be a string!');
  }

  if(!str) {
    return str;
  }

  let newStr = str.charAt(0).toUpperCase() + str.slice(1);
  return newStr;
}

console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('')); // ''