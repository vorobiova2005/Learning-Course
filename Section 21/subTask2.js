//💳 Завдання: «Система Банківських Рахунків»
// Уяви, що ти пишеш логіку для банківського додатка. Тобі потрібно створити систему, де є звичайні рахунки та ощадні рахунки з відсотками.
// 1. Клас BankAccount (Базовий)
// Конструктор: приймає owner (ім'я власника) та balance (початкова сума).
// Приватна властивість: зроби баланс "захищеним".
// В JS це робиться за допомогою решітки перед назвою: #balance.
// Методи:
// deposit(amount): додає гроші до балансу. Виводь у консоль: "Поповнено на {amount}. Новий баланс: {баланс}".
// withdraw(amount): знімає гроші.
// Але!
// Додай перевірку: якщо грошей недостатньо, виводь "Недостатньо коштів!", а якщо вистачає — знімай і виводь залишок.
// getBalance(): оскільки баланс приватний (#), створи цей метод, щоб просто дізнатися поточну суму.

class BankAccount{
        #balance;
    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }
    deposit(amount){
        this.#balance += amount
        console.log(`Поповнено на ${amount} грн. Новий баланс: ${this.#balance} грн`)
    }
    withdraw(amount){
        if (amount > this.#balance){
            console.log(`Недостатньо коштів!`)
        } else{
            this.#balance -= amount
            console.log(`Було знято ${amount} грн. Залишок на рахунку ${this.#balance} грн`)
        }
    }
    getBalance(){
        console.log(`На вашому рахунку ${this.#balance} `)
        return this.#balance
    }

    static compare(user1, user2){
            const balance1 = user1.getBalance();
            const balance2 = user2.getBalance();
            if (balance1 > balance2) {
                console.log(`У ${user1.owner} більше грошей, ніж у ${user2.owner}`);
            } else if (balance1 < balance2) {
                console.log(`У ${user2.owner} більше грошей, ніж у ${user1.owner}`);
            } else {
                console.log("На рахунках однакова сума");
            }
        }

}

const user1 = new BankAccount(`Олена`, 2000)
user1.deposit(500)
user1.withdraw(100)
user1.getBalance()

//2. Клас SavingsAccount (Успадкування)
// Цей клас має наслідувати BankAccount.
// Конструктор: приймає owner, balance та interestRate (відсоткова ставка, наприклад, 5%).
// Метод addInterest(): цей метод має збільшувати баланс на відсоток (наприклад, якщо баланс 1000 і ставка 5%, то новий баланс буде 1050).
// Підказка: Оскільки #balance у батька приватний, дочірній клас не зможе змінити його напряму.
// Тобі доведеться використовувати метод deposit(), щоб додати відсотки.

class SavingsAccount extends BankAccount{
    constructor(owner, balance, interestRate) {
        super(owner, balance);
        this.interestRate = interestRate
    }
    addInterest(){
        const currentBalance = this.getBalance();
        const interest = currentBalance * (this.interestRate / 100);
        console.log(`Нараховано відсотки: ${interest} грн.`);
    }
}

const user2 = new SavingsAccount(`Ігор`, 6000, 5)
user2.addInterest()

// 3. Статичний метод у BankAccount
// Додай статичний метод compare(acc1, acc2).
// Він має приймати два об'єкти рахунків і виводити, у кого на рахунку більше грошей.


BankAccount.compare(user1, user2)