// # Модуль 4. Занятие 8. Перебирающие методы массива

// ## Коллекция объектов для всех примеров с автомобилями

const cars = [
	{ make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true },
	{ make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
	{ make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
	{ make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
	{ make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
	{ make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
	{ make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
	{ make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
	{ make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
	{ make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false },
];
// console.table(cars);

/*
|
* ==================================================
|
*/

// ## Example 1 - Метод map

// Пусть функция `getModels` возвращает массив моделей (поле model) всех
// автомобилей.

const getModels = cars => {
	console.log("All Models");
	return cars.map(car => car.model);
};

// console.table(getModels(cars));

/*
|
* ==================================================
|
*/

// ## Example 2 - Метод map

// Пусть функция `makeCarsWithDiscount` возвращает новый массив объектов с изменным
// значением свойства `price` в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) => {
// 	console.log(`New Car Price width discount ${discount * 100} %`);
// 	return cars.map(car => car.price - car.price * discount);
// };    // так делать нельзя. Єтот вариант изменяет оригинальній массив.

const makeCarsWithDiscount = (cars, discount) => cars.map(auto => ({ ...auto, price: (auto.price -= discount) }));

// /\ это правильный метод  с созданием объекиа из распыленого(типо с новой копией) объекта оригинального масива

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

/*
|
* ==================================================
|
*/

// ## Example 3 - Метод filter

// Пусть функция `filterByPrice` возвращает массив автомобилей цена которых меньше
// чем значение параметра `threshold`.

const filterByPrice = (cars, threshold) => {
	console.log(`cars filtered by price lower than ${threshold}`);
	console.log(cars.filter(car => car.price < threshold));
};
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
|
* ==================================================
|
*/

// ## Example 4 - Метод filter

// Пусть функция `getCarsWithDiscount` возвращает массив автомобилей свойство
// onSale которых true.

const getCarsWithDiscount = cars => {
	console.log("Car on sale: ");
	return cars.filter(car => car.onSale);
};

// console.table(getCarsWithDiscount(cars));

/*
|
* ==================================================
|
*/

// ## Example 5 - Метод filter

// Пусть функция `getCarsWithType` возвращает массив автомобилей тип которых
// совпадает со значением параметра `type`.

const getCarsWithType = (cars, type) => {
	console.log(`Cars by type ${type}`);
	return cars.filter(car => car.type === type);
};

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

/*
|
* ==================================================
|
*/

// ## Example 6 - Метод find

const getCarByModel = (cars, model) => {
	console.log(` Find  ${model}  car`);
	return cars.find(car => car.model === model);
};

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

/*
|
* ==================================================
|
*/
// ## Example 7 - Метод sort

// Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
// отсортированный по возврастанию значения свойства `amount`.

const sortByAscendingAmount = cars => {
	console.log(`Cars by accending amoiunt`);
	return cars.sort((a, b) => a.amount - b.amount);
};

// console.table(sortByAscendingAmount(cars));

/*
|
* ==================================================
|
*/

// ## Example 8 - Метод sort

// Пусть функция `sortByDescendingPrice` возвращает новый массив автомобилей
// отсортированный по убыванию значения свойства `price`.

const sortByDescendingPrice = cars => {
	return cars.sort((a, b) => b.price - a.price);
};

// console.table(sortByDescendingPrice(cars));

/*
|
* ==================================================
|
*/

// ## Example 9 - Метод sort

// Пусть функция `sortByModel` возвращает новый массив автомобилей отсортированный
// по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от
// значения параметра `order`.

const sortByModel = (cars, order) => {
	if (order === "asc") {
		return cars.sort((a, b) => a.model.localeCompare(b.model));
	} else if (order === "desc") {
		return cars.sort((a, b) => b.model.localeCompare(a.model));
	}
};

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

/*
|
* ==================================================
|
*/

// ## Example 10 - Метод reduce

// Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
// свойств `amount`).

const getTotalAmount = cars => {
	// return cars
	// .map(car => car.amount)
	// .reduce((acc,el) => acc +el)
	return [...cars].reduce((acc, el) => acc + el.amount, 0);
};

// console.log(getTotalAmount(cars));

/*
|
* ==================================================
|
*/

// ## Example 11 - Цепочки методов

// Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
// только тех, которые сейчас на распродаже.

const getModelsOnSale = cars => {
	console.log("Models On Sale: ");
	return [...cars].filter(cars => cars.onSale).map(el => el.model);
};

// console.table(getModelsOnSale(cars));

/*
|
* ==================================================
|
*/

// ## Example 12 - Цепочки методов

// Пусть функция `getSortedCarsOnSale` возвращает массив автомобилей на распродаже
// (свойство onSale), отсортированных по возрастанию цены.

// const getSortedCarsOnSale = cars => {
// 	console.log("автомобили на распродаже: отсортированные по возрастанию цены:  ")
// 	return [...cars]
// 	.filter(cars => cars.onSale)
// 	.sort((a,b) => a.price - b.price)
// 	.map(el => el.model)
// };

// console.table(getSortedCarsOnSale(cars));

/*
|
* ==================================================
|
*/

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// const getNamesSortedByFriendCount = users =>
// 	[...users].sort((a, b) => a.friends.length - b.friends.length).map(users => users.name);

// console.table(getNamesSortedByFriendCount(users));

// Дополни функцию getNamesSortedByFriendCount(users)
// возвращала массив имён пользователей
// отсортированный по возрастанию количества их друзей (свойство friends).

// const getSortedFriends = users => [...users]
//   .reduce((totalUser, user) => [...totalUser, ...user.friends], [])
//   .sort((a,b) => a.localeCompare(b))
//   .filter((name,index,array) => array.indexOf(name) === index)
// ;
// возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

// console.table(getSortedFriends(users));

// const getTotalBalanceByGender = (Allusers, gender) => {
// 	return [...users]
// 	.filter(el => el.gender === gender)
// 	.reduce((user,idx) => user += idx.balance,0)
// };

// console.table(getTotalBalanceByGender(users, 'female'));

// возвращала общий баланс пользователей (свойство balance), /totalBAllnce
// пол которых (свойство gender) совпадает со
// значением параметра gender. // if gender === gender

class Storage {
	constructor(items = []) {
		this.items = items;
	}
	getItems() {
		return this.items;
	}
	addItem(newItem) {
		return this.items.push(newItem);
	}
	removeItem(itemToRemove) {
		return this.items.splice(this.items.indexOf(itemToRemove), 1);
	}
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

