//87. Клас: Створи клас User з конструктором, що приймає ім'я.

class User {
    constructor(name) {
        this.userName = name;
    }

    sayHello(){
        console.log(`Привіт мене звати ${this.userName}`)
    }
}

const user1 = new User(`Олексій`, 25)

user1.sayHello();