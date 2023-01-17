// ## Example 2 - Массивы и строки

// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения
// которых хранятся в переменной `values` в виде строки. Значения гарантированно
// разделены пробелом.

// S = ab

const values = '8 11';
console.log("Дано прямоугольник со сторонами = ", values)
// var numbers = values.split(' ')
// console.log(numbers)
// numbers[0] * numbers[1]

const area = values.split(' ')[0] * values.split(' ')[1]
console.log( "Площадь прямоугольника = ", area)
