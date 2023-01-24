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
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  addMoney(value){
    DEPOSIT += value;
    return this.DEPOSIT;
  },
  withdrawMoney(value){
    this.WITHDRAW = value;
    this.DEPOSIT -= value;
  },

};

console.log(Transaction.addMoney(100))