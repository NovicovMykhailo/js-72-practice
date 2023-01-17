// ## Example 7 - Сортировка массива с циклом

// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве
// элемента.


const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// console.table(langs[1][0]>'a')

for( let i=0; i < langs.length; i+=1){

    if(langs[i][0] > langs[i + 1]){
        langs.splice(i, 1)[0];
    }
}


console.log(langs)