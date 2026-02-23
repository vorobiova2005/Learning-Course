// Симуляція: «Зоопарк»
// Створи клас Animal (з методом speak).
// Створи клас Dog, який успадковує Animal і перевизначає метод speak (гавкає).
// Створи екземпляр собаки і виклич метод.

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} видає якийсь звук.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(`${this.name} гавкає: Гав-гав!`);
    }
}

// Створюємо екземпляр
const myDog = new Dog("Сірко");
myDog.speak();