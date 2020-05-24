/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Если в качестве первого параметра передана не строка — нужно вернуть null.
 */

const PRICE = '$120';

// Решение

function extractCurrencyValue(price) {
  let arr = price.split('');
  let num = null;

  for (let i = 0; i < arr.length; i++) {
    if(!isNaN(arr[i])) {
      num = price.slice(i);
      break;
    }
  }

  return +num;
}
console.log(extractCurrencyValue(PRICE)) // 120);

