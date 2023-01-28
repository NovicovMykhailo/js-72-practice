// ## Example 2 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров,
//  вместо набора независимых аргументов.

function printContactsInfo(params) {
	let { names, phones } = params;
	names = names.split(",");
	phones = phones.split(",");
	for (let i = 0; i < names.length; i += 1) {
		console.log(`${names[i]}: ${phones[i]}`);
	}
}

// Было
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Ожидается
printContactsInfo({
	names: "Jacob,William,Solomon,Artemis",
	phones: "89001234567,89001112233,890055566377,890055566300",
});
