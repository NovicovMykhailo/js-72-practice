// ## Example 3 - Перебор массива

// Напиши скрипт для перебора массива `fruits` циклом `for`. Для каждого элемента
// массива выведи в консоль строку в формате `номер_элемента: значение_элемента`.
// Нумерация элементов должна начинаться с `1`.


const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

for (let i = 0; i < fruits.length; i += 1){

    console.table(i + 1,  fruits[i])
}