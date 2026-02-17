//Міні-проект: «Міні RPG-Менеджер героя»
// Контекст:
// У тебе є герой, його статистики та інвентар.
// Завдання — послідовно створити скрипт, який:
// обробляє базові дані героя,
// виконує атаки,
// підраховує бонуси,
// працює з інвентарем та витратами,
// виводить результати у зручному вигляді.


//Завдання 1: Ініціалізація героя (оператори + логіка)
// Створи об’єкт hero з полями:
// name: "Artemis", hp: 100, level: 1, coins: 50, ammo: 10
// Монстр завдав 15 урону. Зменши hp героя.
// Герой підібрав бонус x2 coins. Подвой coins.
// Перевір: якщо hp > 0, виведи "Герой живий", інакше "Герой повален" (логічні оператори).


const hero = {
    name: "Artemis",
    hp: 100,
    level: 1,
    coins: 50,
    ammo: 10
}

hero.hp -= 15;
hero.coins *= 2;

if(hero.hp > 0){
    console.log('Герой живий')
} else {
    console.log('Герой помер')
}

// console.log(hero.hp > 0 ? 'Герой живий' : 'Герой повален'); // Тернарний оператор
//Завдання 2: Атака монстра (функції + параметри)
// Створи функцію calculateDamage(base, strengthBonus, critMultiplier = 1.5), яка повертає загальний урон.
// Використай її для атаки на героя (base = 10, strengthBonus = 5).
// Виведи результат у консоль у форматі: "Герой отримав X урону".


function calculateDamage(base, strengthBonus, critMultiplier = 1.5){
    const totalDamage = (base + strengthBonus) * critMultiplier
    hero.hp -= totalDamage
    return console.log(`Герой отримав ${totalDamage} урону`)
}
calculateDamage(10, 5)


//Завдання 3: Управління інвентарем (масиви)
// Створи масив inventory = ["Меч", "Щит", "Зілля"].
// Герой отримав новий предмет "Броня" — додай його в кінець.
// Використай pop, щоб видалити останній предмет, якщо він "Броня".
// Створи новий масив itemNames, де будуть тільки назви предметів (строки).

const inventory = ["Меч", "Щит", "Зілля"]

const newItem = 'Броня'
inventory.push(newItem)

if(inventory[inventory.length - 1] === 'Броня'){
    inventory.pop()
}

const itemNames = [...inventory]


//Завдання 4: Профіль користувача (spread + деструктуризація)
// Створи об’єкти:
// localProfile = {id: 1, name: "Artemis", coins: 50}
// googleProfile = {name: "ArtemisG", email: "artemis@gmail.com"}
// Об’єднай їх у finalProfile, де дані Google перезаписують локальні.
// Деструктуризуй finalProfile, щоб отримати name і coins в окремі змінні.

const localProfile = {id: 1, name: "Artemis", coins: 50}
const googleProfile = {name: "ArtemisG", email: "artemis@gmail.com"}

const finalProfile = {
    ...localProfile,
    ...googleProfile

}

const {name, coins} = finalProfile


//Завдання 5: Привітання героя (конкатенація + функції)
// Створи функцію greet(heroName, coins) → повертає рядок:
// "Привіт, [heroName]! У тебе [coins] монет."
// Використай finalProfile з попереднього завдання для виведення повідомлення.

function greet(heroName, coins){
    return console.log(`Привіт, ${heroName}! У тебе ${coins} монет`)
}
greet(name, coins)

//Завдання 6: Витрати героя (цикли, Section 19)
// Створи об’єкт expenses = {food: 10, potions: 5, armorRepair: 15}.
// За допомогою for...in порахуй загальну суму витрат.
// Використай for...of, щоб пройтись по масиву назв предметів itemNames і вивести їх у консоль.

const expenses = {food: 10, potions: 5, armorRepair: 15}

let totalSum = 0;

for (const sum in expenses) {
    totalSum += expenses[sum]
}
console.log(totalSum)

for (const item of itemNames){
    console.log(item)
}

//Завдання 7: Система випадкових подій (while + try/catch)
// Пиши цикл, який генерує випадкове число від 1 до 10, поки не випаде 10.
// Для кожного числа, яке не 10, виводь "Монстр атакує!".
// Імітуй можливу помилку при генерації числа (наприклад, випадковий undefined) і обробляй через try/catch, виводячи "Помилка генерації події".

let random;

try {
    do {
        random = Math.floor(Math.random() * 11);
        if (random !== 10) {
            console.log(`Монстр атакує! Випавше число ${random}`)
        }
    } while (random !== 10);
} catch (error) {
    console.log("Помилка генерації події");
}

