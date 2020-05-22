// Отсортируйте массив по убыванию.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const arr = [1, 2, 3, 4, 5, 6];
// [6,5,4,3,2,1]

////////////////// Решение //////////////////


let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++){
  let min = arr[i];
  let num = i;

  for (let j = i + 1; j < arr.length; j++){
    if (arr[j]>min){
      min = arr[j];
      num = j;
    }
  }
  
  arr[num] =  arr[i];
  arr[i] = min;
}

console.log(arr);