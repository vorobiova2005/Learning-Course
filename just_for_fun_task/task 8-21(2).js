//🎮 Міні-графічна консольна гра «RPG Battle Simulator»
// Крок 0: Опис гри
// Ти керуєш героєм (ім’я вводиш сама).
// Є монстри, які атакують героя.
// Герой може атакувати, отримувати предмети, лікуватися.
// Ведеться журнал бою в консолі.
// Є рівні героя, які підвищуються за перемоги.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Крок 1: Клас Героя
// Властивості:
// name — ім’я героя
// hp — здоров’я
// level — рівень героя
// inventory — масив предметів
// baseDamage — базова шкода від атаки
// Методи:
// takeDamage(damage) — герой отримує шкоду
// heal(amount) — герой відновлює hp
// addItem(item) — додає предмет у inventory
// attack(monster) — обчислює шкоду і наносить монстру
// showStatus() — виводить статус героя
// Дані без коду:
// hp = 100
// level = 1
// inventory = []
// baseDamage = 10

    class Hero {
    constructor(name = `Hero`, hp = 100, level = 1, baseDamage = 10, inventory = []) {
        this.name = name;
        this.hp = hp;
        this.level = level;
        this.baseDamage = baseDamage;
        this.inventory = inventory;
    }

    takeDamage(damage) {
        this.hp -= damage;
        this.hp = Math.max(this.hp, 0);
        console.log(`${this.name} отримав ${damage} шкоди! HP: ${this.hp}`);
    }

    heal(amount) {
        this.hp += amount;
        console.log(`${this.name} відновив ${amount} HP. Тепер HP: ${this.hp}`);
    }

    addItem(item) {
        this.inventory.push(item);
        console.log(`${this.name} підібрав: ${item}`);
    }
    attack(monster) {
        let strengthBonus = Math.floor(Math.random() * 6);
        let critMultiplier = Math.random() < 0.3 ? 2 : 1;
        let finalDamage = calculateDamage(this.baseDamage, strengthBonus, critMultiplier);

        monster.takeDamage(finalDamage);
        console.log(`${this.name} завдав ${finalDamage} шкоди ${monster.name}`);
    }
    showStatus() {
        console.log(`Герой: ${this.name} | HP: ${this.hp} | Рівень: ${this.level} | Зброя: ${this.baseDamage} | Інвентар: [${this.inventory.join(", ")}]`);
    }
}


// Крок 2: Клас Монстра
// Властивості:
// name — ім’я монстра
// hp — здоров’я
// damage — шкода, яку наносить
// Методи:
// attack(hero) — монстр атакує героя
// Дані без коду:
// Ім’я монстра = "Goblin"
// hp = 50
// damage = 15

class Monster {
    constructor(name = "Goblin", hp = 50, baseDamage = 15) {
        this.name = name;
        this.hp = hp;
        this.baseDamage = baseDamage;
    }

    attack(hero) {
        hero.takeDamage(this.baseDamage);
        console.log(`${this.name} завдав ${this.baseDamage} шкоди ${hero.name}!`);
    }

    takeDamage(damage) {
        this.hp -= damage;
        this.hp = Math.max(this.hp, 0);
        if (this.hp === 0) console.log(`${this.name} повалений!`);
    }

    showStatus() {
        console.log(`Монстр: ${this.name} | HP: ${this.hp} | Шкода: ${this.baseDamage}`);
    }
}

// Крок 3: Функції гри

// calculateDamage(base, strengthBonus, critMultiplier)
// Обчислює шкоду героя
function calculateDamage(base, strengthBonus, critMultiplier){
    const finalDamage = (base + strengthBonus) * critMultiplier
    return finalDamage;
}
// console.log(calculateDamage(20, 5, 2))

//3.2
// isAlive(character)
// Повертає true, якщо hp > 0

function isAlive(character) {
    return character.hp > 0;
}


//3.3
// getRandomLoot()
// Повертає випадковий предмет зі списку loot

// Крок 4: Масиви та інвентар
// loot = ["Меч", "Щит", "Зілля", "Броня", "Книга заклять"]
// Коли герой виграє бій:
// Додається один випадковий предмет у inventory

const loot = ["Меч", "Щит", "Зілля", "Броня", "Книга заклять"]

function getRandomLoot(){
    let randomNumber = Math.floor(Math.random() * loot.length);
    return loot[randomNumber]
}
// const myHero = new Hero("Лицар");
// const foundItem = getRandomLoot();
// myHero.addItem(foundItem);
// console.log(myHero.inventory);

//3.4
// levelUp(hero)
// Збільшує level героя на 1, виводить повідомлення


// Крок 6: Система рівнів
// Кожна перемога героя підвищує level на 1
// При кожному рівні hp героя збільшується на +20
// Виводимо повідомлення: "Герой підняв рівень до X"


function levelUp(hero){
    hero.level += 1
    hero.hp += 2
    hero.baseDamage += 5
    console.log(`${hero.name} підняв рівень до ${hero.level}! HP збільшено до ${hero.hp}`);
   return hero
}

function showMenu() {
    console.log('\n--- Меню ---');
    console.log('1. Атакувати');
    console.log('2. Використати зілля');
    console.log('3. Перевірити статус');
    console.log('4. Вийти');
}

function askAction() {
    return new Promise((resolve) => {
        rl.question('\nВибери дію: ', (answer) => {
            resolve(answer);
        });
    });
}

// const myHero = new Hero("Aragon", 100, 1, 10)
// console.log(levelUp(myHero))


// Крок 5: Цикл бою
// Цикл while працює, поки герой живий і монстр живий:
// Виводимо статус героя та монстра
// Герой атакує монстра (шкода = baseDamage + бонус + шанс критичного удару)
// Якщо монстр живий, він атакує героя
// Якщо герой або монстр помер — цикл зупиняється
// Виводимо результат бою


const hero = new Hero();
const monster = new Monster();

async function gameLoop() {

    while (isAlive(hero) && isAlive(monster)) {
        console.log("\n--- Новий хід ---");

        showMenu();
        const choice = await askAction();

        switch (choice) {

            case '1': // АТАКА
                hero.attack(monster);

                if (isAlive(monster)) {
                    monster.attack(hero);
                } else {
                    let lootItem = getRandomLoot();
                    hero.addItem(lootItem);
                    levelUp(hero);
                    console.log(`${hero.name} переміг ${monster.name}!`);
                    break;
                }
                break;

            case '2': // ЛІКУВАННЯ
                hero.heal(20);
                break;

            case '3': // СТАТУС
                hero.showStatus();
                monster.showStatus();
                break;

            case '4': // ВИХІД
                console.log("Вихід з гри...");
                rl.close();
                return;

            default:
                console.log("Невірний вибір!");
        }

        if (!isAlive(hero)) {
            console.log(`${hero.name} помер...`);
            break;
        }
    }

    console.log("\n--- Гра завершена ---");
    hero.showStatus();
    rl.close();
}


// Крок : Взаємодія з користувачем
// Можна додати просте меню:
// Атакувати
// Використати зілля (лікування)
// Подивитись статус героя
// Кожен вибір користувача впливає на хід бою

gameLoop();

