class BankAccount {
    constructor(credit) {
      this.credit = credit;
    }
    deposit(value) {
      return (this.credit += value);
    }
    withdraw(value) {
      return (this.credit -= value);
    }
    view() {
      return console.log(this.credit);
    }
  }
  // console.log(bankAccount.credit);
  
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(800);
  bankAccount.view();