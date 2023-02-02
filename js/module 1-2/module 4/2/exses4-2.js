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
console.table(cars);

/*
|
* ==================================================
|
*/

// ## Example 1 - Метод map

// Пусть функция `getModels` возвращает массив моделей (поле model) всех
// автомобилей.

const getModels = cars => {
    console.log("All Models")
    return cars.map(car => car.model)};

console.table(getModels(cars));

/*
|
* ==================================================
|
*/

// ## Example 2 - Метод map

// Пусть функция `makeCarsWithDiscount` возвращает новый массив объектов с изменным
// значением свойства `price` в зависимости от переданной скидки.

const makeCarsWithDiscount = (cars, discount) => {
    console.log(`New Car Price width discount ${discount*100} %`)
    return cars.map(car => car.price - car.price * discount)};
console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));

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
console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));

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

console.table(getCarsWithDiscount(cars));

/*
|
* ==================================================
|
*/

// ## Example 5 - Метод filter

// Пусть функция `getCarsWithType` возвращает массив автомобилей тип которых
// совпадает со значением параметра `type`.


const getCarsWithType = (cars, type) => {
    console.log( `Cars by type ${type}`)
    return cars.filter( car => car.type === type)
};

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));


/*
|
* ==================================================
|
*/

// ## Example 6 - Метод find


const getCarByModel = (cars, model) => {
    console.log(` Find  ${model}  car`)
    return cars.find(car => car.model === model)
};

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));

/*
|
* ==================================================
|
*/
// ## Example 7 - Метод sort

// Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
// отсортированный по возврастанию значения свойства `amount`.


const sortByAscendingAmount = cars => {
    console.log(`Cars by accending amoiunt`)
    return cars.sort()
};

console.table(sortByAscendingAmount(cars));
