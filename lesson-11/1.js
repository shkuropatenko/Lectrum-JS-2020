/**
 * Задача 1.
 *
 * Создайте функцию createNumberGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100 (включительно).
 *
 * Условия:
 * - Числа не должны повторяться;
 * - Задачу нужно решить с помощью замыкания.
 *
 * Генерировать ошибку если:
 * - Функция была вызвана, когда доступные для выведения числа закончились.
 *
 * Подсказка: в замыкании можно хранить массив с числами, которые уже были созданы функцией.
 */

// Решение

const createNumberGenerator = () => {
    let arr = [];
    const MIN = 1;
    const MAX = 101;
    const DIFF = MAX - MIN;
  
    const generator = () => {
      const numFloor = Math.floor(Math.random() * (MAX - MIN)) + MIN;
  
      if (arr.length >= DIFF) {
        throw new Error (`Доступные для выведения числа закончились`)
      }
  
      if (arr.includes(numFloor)) {
        return generator();
      } else {
        arr.push(numFloor);
        return numFloor;    
      }
    };
    
    return generator;
  }
const TOTAL_ITERATIONS = 105;
let invocations = 0;
const generateNumber = createNumberGenerator();

try {
    for (invocations; invocations < TOTAL_ITERATIONS; invocations++) {
        console.log(`Iteration: ${invocations}. Number: ${generateNumber()}`);
    }
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
    console.log(`Function generated an error on ${invocations} invocation.`);
}

// Когда все числа выведутся:
// Error: There are no more numbers available.
// Function generated an error on 100 invocation.