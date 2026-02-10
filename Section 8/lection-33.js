//33. Оператори: Здоров'я героя hp = 100.
// Монстр завдав удару на 15 одиниць.
// Напиши вираз, який оновлює значення hp.

const hero = {
    hp: 100
}
const monster = {
    damage: 15
}
hero.hp -= monster.damage


console.log(hero)