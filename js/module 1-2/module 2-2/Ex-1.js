// ## Example 1 - Базовые операции с массивом

// 1. Создайте массив `genres` с элементами «Jazz» и «Blues».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Выведите в консоль первый элемент массива.
// 4. Выведите в консоль последний элемент массива. Код должен работать для массива
//    произвольной длины.
// 5. Удалите первый элемент и выведите его в консоль.
// 6. Вставьте «Country» и «Reggae» в начало массива.

const genres = ["Jazz", "Blues"];
console.log("Start Styles Massive: ", genres)

genres[3] = "Рок-н-ролл";
let deletedElement = genres.splice(0, 1)
console.log("deleted 1st element", deletedElement);


console.log("1st element: ", genres[0])
console.log("last element: ", genres[genres.length -1])

console.log("Adding 2 element at the begining")

genres.splice(0, 0, "Country",  "Reggae")


console.table(genres)