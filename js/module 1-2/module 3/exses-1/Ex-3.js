// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`,
// которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и
// - возвращает общую стоимость
// камней с таким именем,
// ценой и количеством из обьекта

// ### Код

const stones = [
	{ name: "Изумруд", price: 1300, quantity: 4 },
	{ name: "Бриллиант", price: 2700, quantity: 3 },
	{ name: "Сапфир", price: 400, quantity: 7 },
	{ name: "Щебень", price: 200, quantity: 2 },
];


const calcTotalPrice = function (stones, stoneName) {
	for (const stone of stones) {
	  if (stone.name === stoneName)
		  return [
			  `Kамень: ${stone.name}`,
			  `общее количество ${stone.quantity}`,
			  `цена ${stone.price}`,
			  `Общая стоимость: ${stone.quantity * stone.price} `,
		  ];
	}
};

console.table(calcTotalPrice(stones, "Щебень"));
