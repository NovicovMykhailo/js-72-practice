// ## Example 6 - Форматирование ссылки (includes и логическое «И»)

// Напиши скрипт который проверяет заканчивается ли значение переменной `link`
// символом `/`. Если нет, добавь в конец значения `link` этот символ, но только в
// том случае, если в `link` есть подстрока `"my-site"`. Используй конструкцию
// `if...else`.


let link = 'https://somesite.com/about';
// let link = 'https://my-site.com/about';
// Пиши код ниже этой строки
if( !link.endsWith('/') && link.includes("my-site")){
    link += "/"
}
// Пиши код выше этой строки
console.log(link);