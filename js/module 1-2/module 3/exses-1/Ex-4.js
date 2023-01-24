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
    DEPOSIT: 0,
    WITHDRAW: 0,
    addDeposit(value){
      this.DEPOSIT +=  + value;
      return `Add Ballance: ${value}, Deposit : ${this.DEPOSIT}`
    },
    removeMoney(value){
      this.DEPOSIT -= value;
      this.WITHDRAW = value;
      return `Withdraw : ${this.WITHDRAW}, Deposit balance: ${this.DEPOSIT}, ` ;
    }
  
  };
  
  console.log(Transaction.addDeposit(100))
  console.log(Transaction.addDeposit(200))
  console.log(Transaction.addDeposit(200))
  console.log(Transaction.removeMoney(300))