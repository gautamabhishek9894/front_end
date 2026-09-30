class BankAccount {
    #pin;
    #amount = 150;

    constructor(name, pin) {
        this.name = name;
        this.#pin = pin;
    }

    setAccountNumber(pinInput) {
        if (pinInput === this.#pin) {
            this.accountNumber = Math.floor(Math.random() * 1000000);
            console.log("Account created:", this.accountNumber);
        } else {
            console.log("Incorrect PIN");
        }
    }

    checkBalance(pinInput) {
        if (pinInput === this.#pin) {
            return this.#amount;
        }
        return "Incorrect PIN";
    }

    deposit(money, account) {
        if (account === this.accountNumber) {
            this.#amount += money;
            return this.#amount;
        } else {
            return "Invalid account";
        }
    }
}
const acc1 = new BankAccount("Abhishek", 150);
acc1.setAccountNumber(150);
console.log(acc1.deposit(50, acc1.accountNumber));
console.log(acc1.checkBalance(150));  