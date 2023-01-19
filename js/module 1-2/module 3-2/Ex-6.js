// ## Example 6 - Поиск наибольшего элемента

// Напиши функцию `findLargestNumber(numbers)`которая ищет самое большое число в
// массиве.

function findLargestNumber(numbers) {
	console.log(numbers);
	let biggestNumber = numbers[0];

	for (const number of numbers) {
		if (number > biggestNumber) {
			biggestNumber = number;
		}
	}

	return biggestNumber;
}

console.log("biggest Nummber : ", findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log("biggest Nummber: ", findLargestNumber([49, 4, 7, 83, 12])); // 83
