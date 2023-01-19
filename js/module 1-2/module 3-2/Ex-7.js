// ## Example 7 - Среднее значение

// Напишите функцию `calAverage()` которая принимает произвольное кол-во аргументов
// и возвращает их среднее значение. Все аругменты будут только числами.

function calAverage(...num) {
    let sum = 0;
    for(let args of num){
        sum += args;  
    }
    return sum / num.length;
	
	
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
