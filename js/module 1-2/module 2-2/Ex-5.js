// ## Example 5 - Массивы и строки

// Напиши скрипт который выводит в консоль все слова строки кроме первого и
// последнего. Результирующая строка не должна начинаться или заканчиваться
// пробельным символом. Скрипт должен работать для любой строки.


const string = 'Welcome to the future';

const str = string.split(' ')

// var textLine = str.slice(1, -1) ;
// console.log(textLine.join(' '))

console.log(str.slice(1, -1).join(' '))