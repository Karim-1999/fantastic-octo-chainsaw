class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = "Negative Amount";
  }
}
class WithdrawNotPermittedError extends Error {
  constructor(message) {
    super(message);
    this.name = "Withdraw not permitted";
  }
}
class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError("Amount cannot be negative!"); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError("Amount provided cannot be negative!"); // Use custom Error class
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError( "You cannot withdraw more than your account balance!"); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}