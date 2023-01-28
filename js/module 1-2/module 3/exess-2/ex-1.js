// # Модуль 3 Занятие 6. Деструктуризация и rest/spread

// ## Example 1 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.


function calcBMI(params) {
    let {weight, height} = params;
    weight = weight.replace(',', '.');
    height = height.replace(',', '.');
    return Number((weight / height ** 2).toFixed(1));
  }
  
  // Было
  // console.log(calcBMI('88,3', '1.75'));
  // console.log(calcBMI('68,3', '1.65'));
  // console.log(calcBMI('118,3', '1.95'));
  
  // Ожидается
  console.log(
    calcBMI({
      weight: '88,3',
      height: '1.75',
    }),
  );
  console.log(
    calcBMI({
      weight: '68,3',
      height: '1.65',
    }),
  );
  console.log(
    calcBMI({
      weight: '118,3',
      height: '1.95',
    }),
  );
  