// 1. Базовий клас
// Створи клас Drink (Напій).
//Конструктор має приймати name (назва, наприклад "Чай") та price (ціна).
//Додай метод describe(), який виводить у консоль фразу: "Це {назва}, коштує {ціна} грн."

class Drink{
    constructor(name, price) {
        this.drinkName = name
        this.drinkPrice = price
    }

    describe(){
        console.log(`Це ${ this.drinkName}, коштує ${this.drinkPrice} грн.`)
    }
}

const drink1 = new Drink(`Зелений чай`, 50)
drink1.describe();

// 2. Успадкування
// Створи клас Coffee, який успадковує (extends) клас Drink.
//Його конструктор має приймати три параметри: name, price та type (сорт зерен, наприклад "Арабіка").
//Підказка: Не забудь використати super(name, price), щоб передати дані в батьківський клас.
//Перевизнач метод describe() так, щоб він додавав інформацію про зерна: "Це кава {назва} ({сорт}), коштує {ціна} грн."

class Coffee extends Drink {
    constructor(name, price, type) {
        super(name, price);
        this.drinkType = type
    }

    static sayWelcome(){
        console.log(`Вітаємо у нашій кав'ярні!`)
    }
    describe(){
        console.log(`Це ${ this.drinkName} (${this.drinkType}), коштує ${this.drinkPrice} грн.`)
    }
}

const coffeeDrink = new Coffee(`Індія`, `60`, `Арабіка`)
Coffee.sayWelcome()
coffeeDrink.describe()

//3. Статичний метод
// Додай у клас Coffee статичний метод sayWelcome().
// Він має просто виводити в консоль: "Вітаємо у нашій кав'ярні!"
// Пам'ятай: Цей метод викликається через Coffee.sayWelcome(), а не через конкретну чашку.

