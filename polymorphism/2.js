// encapsulation program
class BankAccount {
  #balance = 0;

  deposit(balance) {
    this.#balance += balance;
    console.log(`Deposited: ₹${balance}`);
  }

  checkBalance() {
    console.log(`Balance: ₹${this.#balance}`);
  }
}

const acc = new BankAccount();
acc.deposit(1000);
acc.checkBalance();  // Output: Balance: ₹1000
// acc.#balance; Error: Private field