/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

function postpone(start, end, delay) {
    if (typeof start !== 'number' || typeof end !== 'number' || typeof delay !== 'number') {
        throw new Error('Params should be a number');
    }

    if(start < end) {
        for(let i = start; i <= end; ++i) {
            setDelay(i);
        }

        function setDelay(i) {

            setTimeout(function(){
            console.log(i);
            }, delay * i);

        }
    }

    if(start > end) {
        setTimeout(() => {

            for(let i = start, timer = 0; i >= end; i--) {
                setDelay(i, timer++);
            }

            function setDelay(i, timer) {
        
                setTimeout(function(){
                    console.log(i);
                
                }, delay * timer);

            }

        }, (start + end) * delay);
        
    }
}

try {
    postpone(1, 3, 1000);
    // 1
    // 2
    // 3
    postpone(3, 1, 1000);
    // 3
    // 2
    // 1
} catch(error) {
    console.log(`${error.name}: ${error.message}`);
}