// ## Example 6 - Массивы и строки

// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит
// ее в консоль.

/*const string = "Welcome to the future";

let str = string.split("");

for (let i = 0; i < str.length; i += 1) {
	str.splice(i, 0, str.pop());
}

console.log(str.join(""));*/



const string = 'Welcome to the future';

let str = string.split('');
str.reverse();

console.log(str.join(""))