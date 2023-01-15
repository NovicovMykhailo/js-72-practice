// ## Example 7 - Форматирование ссылки (тернарный оператор)

// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

let link = 'https://somesite.com/about';
// let link = 'https://somesite.com/about';
// if (!link.endsWith('/') && link.includes('my-site') ) {
//   link += '/';
// }
link = !link.endsWith('/') && link.includes('my-site') ? link += '/' : link;

console.log(link)