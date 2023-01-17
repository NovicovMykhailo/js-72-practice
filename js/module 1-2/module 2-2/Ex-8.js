// ## Example 8 - Поиск элемента

// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для
// любого массива чисел. Используй цикл для решения задачи.

const numbers = [2, 17, 94, 1, 23, 37];
let min;

for (let i = 0; i < numbers.length; i += 1) {
	let minNumber = i;
	for (let a = i + 1; a < numbers.length; a += 1) {
        if (numbers[a] < numbers[i]){
            minNumber = a;
        }
    }
    if (minNumber !=i){
        let target = numbers[i];
        numbers[i] = numbers[minNumber];
        numbers[minNumber] = target
    }
}
min = numbers.splice(0,1)

console.log(min); // 1