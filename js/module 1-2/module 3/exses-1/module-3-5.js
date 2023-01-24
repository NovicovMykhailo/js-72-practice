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
   * Метод создает и возвращает объект транзакции.
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
   * Метод возвращает текущий баланс
  
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id

  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
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
