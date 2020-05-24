/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {
  get salary() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let today = new Date().getDate()
    let date = new Date(year, month + 1, 0).getDate();

    if (date - today > 20) {
      return 'good salary';
    }

    return 'bad salary';
  }
};

// Решение

console.log(person.salary); // good salary