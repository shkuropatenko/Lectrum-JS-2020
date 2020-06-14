/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение

// first option
function shallowMerge(obj1, obj2) {
  const newObj = {};
  
  for (const key in obj1) {
    const descriptors = Object.getOwnPropertyDescriptor(obj1, key);
    Object.defineProperty(newObj, key, descriptors);
    newObj[key] = obj1[key];
  }

  for (const key in obj2) {
    const descriptors = Object.getOwnPropertyDescriptor(obj2, key);
    Object.defineProperty(newObj, key, descriptors);
    newObj[key] = obj2[key];
  }
    
  return newObj;
}

// second option
function shallowMerge(obj1, obj2 ) {
  const mergedObj = { ...obj1, ...obj2 };

  Object.defineProperties(mergedObj, Object.getOwnPropertyDescriptors(obj1));
  Object.defineProperties(mergedObj, Object.getOwnPropertyDescriptors(obj2));

  return mergedObj;
}


const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false