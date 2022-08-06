class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {
      if (amount < 0) {
        throw console.log(new Error("Amount provided can not be negative!"));
      }
      this.#amount += amount;
    } catch (error) {}
  }

  withdraw(amount) {
    try {
      if (amount < 0) {
        throw console.log(new Error("Amount provided can not be negative!"));
      }

      if (this.#amount < amount) {
        throw console.log(new Error("You can not withdraw more than your account balance!"));
      }

      this.#amount -= amount;
    } catch (error) {}
  }

  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();