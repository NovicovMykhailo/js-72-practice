

//  Напиши скрипт, который выводит в консоль строку `"Это положительное число"`,
//  если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи
//  в консоль строку `"Это ноль"`. Если передали отрицательное число, в консоли
//  должна быть строка `"Это отрицательное число"`.


const numberDskr = prompt('Введите число');
let numberString;


if(numberDskr > 0){
    numberString = "Это положительное число";
} else if (numberDskr < 0 ){
    numberString = "Это отрицательное число";
} else{
    numberString = "Это ноль";
}
console.log(numberString);