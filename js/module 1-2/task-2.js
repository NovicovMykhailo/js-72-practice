// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.".
//  Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут./*/

const hours = 14;
const min = 0;

let timestring;
 
 if (min !== 0){
    timestring = `${hours} ч. ${min} мин.`;

 }else{
    timestring = `${hours} ч. `;
 }
 console.log (timestring)