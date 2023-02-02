// ## Example 3 - Коллбек функции

// Напишите функцию `each(array, callback)`, которая первым параметром ожидает
// массив, а вторым - функцию, которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив, элементами которого будут результаты
// вызова коллбека.

function each(array, callback) {
	const newArr = [];
	for (const el of array) {
		newArr.push(callback(el));
	}
	return newArr;
}

console.log(each([64, 49, 36, 25, 16], value => value * 2));
console.log(each([64, 49, 36, 25, 16], value => value - 10));
console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));


//[128, 98, 72, 50, 32]
// exses-4-1.js:17 (5) [54, 39, 26, 15, 6]
// exses-4-1.js:18 (5) [8, 7, 6, 5, 4]
// exses-4-1.js:19 (5) [2, 3, 17, 10, 12]
// exses-4-1.js:20 (5) [1, 2, 16, 9, 11]