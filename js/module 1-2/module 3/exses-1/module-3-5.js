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

createTransaction(amount, type) {},
  /*
  * Метод создает и  объект транзакции.
  * Принимает сумму и тип транзакции.
  */

/*

deposit(amount) {},
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   
*/
/*
withdraw(amount) {},
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.

*/
/*
getBalance() {},
  /*
   * Метод ищет текущий баланс
  

getTransactionDetails(id) {},
  /*
   * Метод ищет объект транзации по id


getTransactionTotal(type) {},
  /*
   * Метод ищет количество средств
   * определенного типа транзакции из всей истории транзакций
 


  */
// ====================================================

const Transaction = {
	DEPOSIT: "deposit",
	WITHDRAW: "withdraw",
};

const account = {
	balance: 0,
	transactions: [],

	createTransaction(amount, type) {
		const transaction = { amount, type, id: this.transactions.length };
		return transaction;
	},
	deposit(amount) {
		this.balance += amount;
		const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
		this.transactions.push(transaction);
		return console.log(`на счет положено ${amount} $`);
	},
	withdraw(amount) {
		if (amount > this.balance) {
			console.log(`снятие ${amount} не возможно, недостаточно средств.`);
			return;
		}
		this.balance -= amount;
		const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
		this.transactions.push(transaction);
		return console.log(`Со счета снято ${amount} $`);
	},
	getBalance() {
		console.log(`Balance: ${this.balance} $`);
	},
	getTransactionTotal(type) {
		console.log(`общее количество транзакций: ${this.transactions.length}`);
    console.table(this.transactions)
	},
	getTransactionDetails(id) {
		let count = 0;
		for (let a of this.transactions) {
			if (id === a.type) {
				count += 1;
			}
		}
		console.log(`количество операций ${id}: ${count}`);
	},
};

account.deposit(200);
account.deposit(100);
account.deposit(500);
account.withdraw(600);

account.getBalance();
account.getTransactionTotal();
account.getTransactionDetails("deposit");

console.log(account);

// ====================================================
// ====================================================

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

// ====================================================

// const atTheOldToad = {
// 	potions: [
// 		{ name: "Speed potion", price: 460 },
// 		{ name: "Dragon breath", price: 780 },
// 		{ name: "Stone skin", price: 520 },
// 	],
// 	// Change code below this line
// 	getPotions() {
// 		let index;
// 		for (const a of this.potions) {
// 			index = this.potions;
// 		}
// 		return index;
// 	},
// 	addPotion(newPotion) {
// 		for (const b of this.potions) {
// 			if (b.name === newPotion.name) {
// 				return `Error! Potion ${newPotion.name} is already in your inventory!`;
// 			}
// 		}
// 		this.potions[this.potions.length] = newPotion;
// 	},
// 	removePotion(potionName) {
// 		let message = "";
//     let boolean = false;

//     for(const potion of this.potions){
//       if(potion.name === potionName){
//         boolean = true;
//         break
//       } boolean = false;}

// 		for (let i = 0; i < this.potions.length; i += 1) {
//        if(boolean === false){
//       return `Potion ${potionName} is not in inventory!`;
//        break
//      }
//      if(this.potions[i].name === potionName &&  boolean === true) {
//       this.potions.splice(i,1)
//      }
// 		}
// 	},
// 	updatePotionName(oldName, newName) {
//     let message = "";
//     let boolean = false;

//     for(const potion of this.potions){
//       if(potion.name === oldName){
//         boolean = true;
//         break
//       } boolean = false;}

// 		for (let i = 0; i < this.potions.length; i += 1) {
//        if(boolean === false){
//         return `Potion ${oldName} is not in inventory!`;
//        break
//      }
//      if(this.potions[i].name === oldName &&  boolean === true) {
//       this.potions[i].name = newName
//      }
// 		}
// 	},
// };

// [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))// в массиве potions последним элементом будет этот объект
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }))// в массиве potions последним элементом будет этот объект
// console.log(atTheOldToad.addPotion( { name: "Speed potion", price: 460 }))
//Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода

//Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }))// массив potions не изменяется
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))// массив potions не изменяется
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }))// возвращает строку "Error! Potion Dragon breath is already in your inventory!"
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 })) //возвращает строку "Error! Potion Stone skin is already in your inventory!"

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Dragon 15")); // в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.removePotion("Speed potion")) //в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

//  console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))// в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
//  console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))// в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
//  console.log(atTheOldToad.updatePotionName("565", "Polymorth"))
// console.log(atTheOldToad.getPotions());
