//Question->Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(balance, owner) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(depositAmount) {
    return (this.balance += depositAmount);
  }
  withdraw(withdrawAmount) {
    return (this.balance -= withdrawAmount);
  }
  displayBalance() {
    return this.balance;
  }
}

const bankAc = new BankAccount(30000, "Varun");
console.log(bankAc.owner);
console.log(bankAc.balance);
let newBalance1 = bankAc.deposit(10000);
console.log(newBalance1);
let newBalance2 = bankAc.withdraw(20000);
console.log(newBalance2);
let finalBalance = bankAc.displayBalance();
console.log(finalBalance);
