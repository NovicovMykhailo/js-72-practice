// ## Example 8 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.


const printContactsInfo = ({ names, phones }) => {
    const nameList = names.split(',');
    const phoneList = phones.split(',');
    nameList.forEach((name, i) => console.log(`${name}: ${phoneList[i]}`));
  //   for (let i = 0; i < nameList.length; i += 1) {
  //     console.log(`${nameList[i]}: ${phoneList[i]}`);
  //   }
  }
  
  printContactsInfo({
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
  });
  