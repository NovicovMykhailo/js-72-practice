// ## Example 6 - Массивы и строки

// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит
// ее в консоль.


const string = 'Welcome to the future';

let str = string.split('');
let textLine = "";

for ( let i = str.length;  i >= 0; i -= 1){
    // console.log (str[i]);
    textLine = str[i];


}
console.log(textLine)
