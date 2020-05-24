/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// Решение
const person = {
  rate: 0,
  get salary() {
    if (this.rate) {
      let toDay = new Date().getDate();
      return this.rate * toDay;
    }
    
    return this.rate;
  }
};

Object.defineProperties(person, {
  rate: {
    configurable: false,
    enumerable: false
  },
  salary: {
    configurable: false,
    enumerable: false
  }
});

person.rate = 30;
console.log(person.salary); // Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300