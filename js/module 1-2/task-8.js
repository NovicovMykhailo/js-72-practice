// ## Example 8 - if...else и логические операторы

// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от
// значения переменной `hours`.

// Если значение переменной `hours`:

// - меньше `17`, выводи строку `"Pending"`
// - больше либо равно `17` и меньше либо равно 24, выводи строку `"Expires"`
// - больше `24` , выводи строку `"Overdue"`

const hours = prompt("введи число");
let dskr;

if( hours < 17){
    dskr = "Pending"
} else if ( hours >= 17 && hours <= 24 ) {
    dskr = "Expires"
} else {
    dskr = "Overdue"
}
console.log (dskr)