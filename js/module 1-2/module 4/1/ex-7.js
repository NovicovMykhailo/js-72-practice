// ## Example 7 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.


function logItems(items) {
    console.log(items);
    items.forEach((item, index) => console.log(`${index} - ${item}`))
  //   for (let i = 0; i < items.length; i += 1) {
  //     console.log(`${i + 1} - ${items[i]}`);
  //   }
  }
  
  logItems(['Mango', 'Poly', 'Ajax']);
  logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
  