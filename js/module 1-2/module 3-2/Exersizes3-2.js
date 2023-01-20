// function includes(array, value) {

// 	let conclusion;
//  for( const item of array){
// 	if( value === item)
// 	return true;
//  }
// 	return false

// }

// /*Напиши функцию includes(array, value), которая делает тоже самое, 
//   что и метод массива массив.includes(значение) - проверяет, 
//   есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// Объявлена функция includes(array, value)

// В функции includes используется for, return, но не метод массива includes*/

// console.log(includes([1, 2, 3, 4, 5], 3)); // возвращает true
// console.log(includes([1, 2, 3, 4, 5], 17)); // возвращает false
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")); // возвращает true
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")); // возвращает false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum")); // возвращает true
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); // возвращает false


// function areYouPlayingBanjo(name) {
//     // Implement me
//     const arrayName = name.split("");
//     if(arrayName[0] === 'R'){
//       name = name + " play banjo";
//     }else if(arrayName[0] === 'r'){
//         name = name + " play banjo";
//     }
//     else{
//       name = name + " does not play banjo";
//     }
//     return name;
//   }

//   console.log(areYouPlayingBanjo("Adam"));//, "Adam does not play banjo");
//   console.log(areYouPlayingBanjo("Paul"));//, "Paul does not play banjo");
//   console.log(areYouPlayingBanjo("Ringo"));//, "Ringo plays banjo");
//   console.log(areYouPlayingBanjo("bravo"));//), "bravo does not play banjo");
//   console.log(areYouPlayingBanjo("rolf"));//, "rolf plays banjo");