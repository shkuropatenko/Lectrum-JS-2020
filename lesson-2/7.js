// Напишите код, который посчитает сумму всех парных элементов в массиве.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const array = [1, 2, 3, 4];

////////////////// Решение //////////////////

const array = [1, 2, 3, 4];
let sum = null;
for (const value of array) {
  if (!(value % 2)) {
    sum += value;
  }
}
console.log(sum);