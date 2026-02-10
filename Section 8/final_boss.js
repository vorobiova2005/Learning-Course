//Фінальний бос цього блоку завдань)
//🎮 Симуляція: «Калькулятор шкоди в RPG»
// Потрібно написати скрипт, який розраховує підсумкову шкоду персонажа.
// Є базова шкода меча (число), бонус сили (число) і модифікатор критичного удару (множник).


const hero = {
    hp: 100,
    score: 50,
    weapon:{
        weaponDamage: 100,
        criticalHitModifier: 1.3
    },
    strengthBonus: 20,
    isBerserkMode: false
}

let heroTotalDamage = (hero.weapon.weaponDamage + hero.strengthBonus)* hero.weapon.criticalHitModifier

console.log(heroTotalDamage)


const incomingBonus = 15; // Спеціально наче дані з сервера прийшли в не тому форматі
const adrenalineLevel = 60;

// 1. ВАЛІДАЦІЯ ТИПУ (typeof)
// Перевір, чи є incomingBonus числом.
// Якщо так — додай його до hero.strengthBonus.
// Якщо ні — виведи в консоль "Помилка: бонус має бути числом".

if (typeof incomingBonus !== "number") {
    console.log("Помилка: бонус має бути числом")
} else{
    hero.strengthBonus += incomingBonus
}
console.log(hero.strengthBonus) //Просто перевірка чи працює умова


// 2. АКТИВАЦІЯ РЕЖИМУ (Логічні оператори)
// Герой входить у Berserk Mode,
// якщо його hp менше 50 АБО(||) рівень адреналіну більше 50.


if(hero.hp < 50 || adrenalineLevel > 50){
    hero.isBerserkMode = true
    console.log('Ваш персонаж увійшов у режим Berserk Mode')
} else{
    hero.isBerserkMode = false
}

// 3. ПЕРЕРАХУНОК ШКОДИ (Пріоритетність)
// Якщо hero.isBerserkMode дорівнює true:
//   - Збільш criticalHitModifier на 1.5
//   - Додай до hero.score +10 очок
//   - Перерахуй heroTotalDamage за твоєю формулою з попередньої задачі

if(hero.isBerserkMode){
    hero.weapon.criticalHitModifier += 1.5;
    hero.score += 10;
    heroTotalDamage = (hero.weapon.weaponDamage + hero.strengthBonus) * hero.weapon.criticalHitModifier;
    console.log(heroTotalDamage)
}else {
    console.log(heroTotalDamage)
}


// 4. ФІНАЛЬНИЙ ВИВІД
// Виведи в консоль: "Чи в люті персонаж?", "Підсумкова шкода", "Очки"


console.log(`Чи в люті персонаж? ${hero.isBerserkMode} Підсумкова шкода ${heroTotalDamage} Очки ${hero.score}`)


