// # 
console.log('======= Модуль 5. Занятие 9. Контекст вызова функции и this =======')

// ## Example 1 - Мастерская драгоценностей

// Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// количеством из свойства `stones`.

console.log('======= EX - 1: Мастерская драгоценностей =======')
console.log('')
// ```js
const chopShop = {
	stones: [
		{ name: "Emerald", price: 1300, quantity: 4 },
		{ name: "Diamond", price: 2700, quantity: 3 },
		{ name: "Sapphire", price: 1400, quantity: 7 },
		{ name: "Ruby", price: 800, quantity: 2 },
	],
	calcTotalPrice(stoneName) {
		let a = this.stones.find(stones => stones.name === stoneName);
        console.log(`${stoneName} - ${a.price}$, Quant:${a.quantity}`)
		return 'total Price: '+ a.price * a.quantity;
	},
};

console.log(chopShop.calcTotalPrice("Emerald")); // 5200
console.log(chopShop.calcTotalPrice("Diamond")); // 8100
console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop.calcTotalPrice("Ruby")); // 1600
// ```

// ## Example 2 - Телефонная книга

// Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.
console.log('')
console.log('======= EX - 2: Телефонная книга =======')
console.log('')
// ```js
const phonebook = {
	contacts: [],

	add(contact) {
		const newContact = {
			list: "default",
			...contact,
			id: this.generateId(),
			createdAt: this.getDate(),
		};
        
		this.contacts.push(newContact);
	},

	generateId() {
		return "_" + Math.random().toString(36).substr(2, 9);
	},

	getDate() {
		return Date.now();
	},
};


	phonebook.add({
		name: "Mango",
		email: "mango@mail.com",
		list: "friends",
	}),

	phonebook.add({
		name: "Poly",
		email: "poly@hotmail.com",
	}),


console.table(phonebook.contacts)
// ```

// ## Example 3 - Калькулятор

// Создайте объект `calculator` с тремя методами:

// - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// - `add()` - возвращает сумму сохранённых значений.
// - `mult()` - перемножает сохранённые значения и возвращает результат.
console.log('')
console.log('=======  EX - 3: Калькулятор  =======')
console.log('')
// ```js
const calculator = {
    valueA: 0,
    valueB: 0,

    read(a, b){
        this.valueA = a;
        this.valueB = b;
        // console.log('число а = '+a, 'число b = '+b)
    },
    add(){
       return 'a + b = '+ (this.valueA + this.valueB)
    },
    mult(){
        return 'a x b = '+(this.valueA * this.valueB)
    },

};
// ```
calculator.read( 50, 40)
console.table('A = '+calculator.valueA, 'B = ' +calculator.valueB)
console.log(calculator.add())
console.log(calculator.mult())

