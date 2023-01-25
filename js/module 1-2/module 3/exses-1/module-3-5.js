// # Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект `account`
// в котором необходимо реализовать методы для работы
// с балансом и историей
// транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

/*
 const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и // объект транзакции.
   * Принимает сумму и тип транзакции.
   
  createTransaction(amount, type) {},

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   
  deposit(amount) {},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.

  withdraw(amount) {},

  /*
   * Метод // текущий баланс
  
  getBalance() {},

  /*
   * Метод ищет и // объект транзации по id

  getTransactionDetails(id) {},

  /*
   * Метод // количество средств
   * определенного типа транзакции из всей истории транзакций
 
  getTransactionTotal(type) {},

  */
const Transaction = {
	DEPOSIT: "deposit",
	WITHDRAW: "withdraw",
};

const account = {
	// Текущий баланс счета
	balance: 0,

	// История транзакций
	transactions: [],

	createTransaction(amount, type) {
		if (!type) {
			this.type = "$";
		} else {
			this.type.push(type);
		}

		this.balance += amount;
		this.transactions.push(amount + this.type);
	},

	deposit(amount) {
		this.createTransaction(amount);
		Transaction.DEPOSIT += ` + ${amount}${this.type}`;
		return Transaction;
	},
	withdraw(amount) {
		this.createTransaction(amount);
	},
	getBalance() {},
	getTransactionDetails(id) {},
	getTransactionTotal(type) {},
};

// console.log(account.createTransaction(100, "€"));
console.log(account.deposit(200));
console.log(account.withdraw(100));

console.dir(account);
// console.log(Transaction.addDeposit(200))
// console.log(Transaction.addDeposit(200))
// console.log(Transaction.removeMoney(300))

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// 	// Пиши код ниже этой строки
// 	let totalPrice = 0;
// 	for (const product of products) {
// 		if (product.name === productName) {
// 			totalPrice = product.price * product.quantity;
// 		}
// 	}
// 	return totalPrice;

// 	// Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};


atTheOldToad.getPotions() // [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),// в массиве potions последним элементом будет этот объект
atTheOldToad.addPotion({ name: "Power potion", price: 270 }),// в массиве potions последним элементом будет этот объект

//Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода

//Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект

atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),// массив potions не изменяется
atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),// массив potions не изменяется
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),// возвращает строку "Error! Potion Dragon breath is already in your inventory!"
 atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), //возвращает строку "Error! Potion Stone skin is already in your inventory!"

 atTheOldToad.removePotion("Dragon breath"),// в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
atTheOldToad.removePotion("Speed potion"), //в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

 atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),// в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
 atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"),// в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
