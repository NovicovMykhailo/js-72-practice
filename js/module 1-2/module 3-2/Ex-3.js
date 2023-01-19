// ## Example 3 - Площадь прямоугольника

// Напиши функцию `getRectArea(dimensions)` для вычисления площади прямоугольника
// со сторонами, значения которых будут переданы в параметр `dimensions` в виде
// строки. Значения гарантированно разделены пробелом.


function getRectArea(dimensions) {
    let add = dimensions.split(" ");
    return Number(add[0] * add[1])

}

console.log(getRectArea('8 11'));
