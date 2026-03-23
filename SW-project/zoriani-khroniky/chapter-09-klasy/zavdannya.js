/*
╔══════════════════════════════════════════════════════════════╗
║   ЗОРЯНІ ХРОНІКИ: ШЛЯХ КОДЕРКИ                              ║
║   🏯 Розділ 9: ОРДЕН ДЖЕДАЇВ                                ║
║   Тема: Класи, конструктор, методи, наслідування, static     ║
╚══════════════════════════════════════════════════════════════╝

  🌌 СЮЖЕТ

  Луна досягла вершини Ордену Джедаїв-Програмістів.
  Настав час заснувати НОВИЙ ОРДЕН — але для цього
  потрібна система, яка описує КОЖНОГО воїна:
  його здоров'я, атаки, рівні, здібності.

  "Клас — це ПЛАН БУДІВЛІ," — пояснює Майстер Джейкобус.
  "Ти описуєш клас один раз, а потім створюєш
   скільки завгодно ЕК ЗЕМПЛЯРІВ (instance)."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  📚 ТЕОРІЯ: КЛАСИ

  class Warrior {
    constructor(name, hp) {    // викликається при new
      this.name = name;
      this.hp = hp;
    }

    attack() {                 // метод
      return this.name + " атакує!";
    }

    static create(name) {      // статичний метод
      return new Warrior(name, 100);
    }
  }

  Наслідування (extends):
    class Jedi extends Warrior {
      constructor(name, hp, power) {
        super(name, hp);       // виклик конструктора батька
        this.power = power;
      }

      forceAttack() {
        return this.name + " атакує Силою!";
      }
    }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

// ═══════════════════════════════════════════════════════════
// 🎯 ЗАВДАННЯ 9.1 — КЛАС WARRIOR
// ═══════════════════════════════════════════════════════════
/*
  Напиши клас Warrior:

  Властивості (через constructor):
  - name    (рядок)
  - hp      (число, початкове здоров'я)
  - maxHp   (число, завжди = hp при створенні)
  - isAlive (boolean, true якщо hp > 0)

  Методи:
  - getStatus() → "[name]: HP [hp]/[maxHp]"
  - takeDamage(dmg) → зменшує hp на dmg (але не нижче 0),
                       оновлює isAlive
  - heal(amount)    → збільшує hp на amount (але не вище maxHp)

  Статичний метод:
  - Warrior.create(name) → new Warrior(name, 100)
*/

class Warrior {
  constructor(name, hp) {
    this.name = name
    this.hp = hp
    this.maxHp = hp
    }

    get isAlive() {
      return this.hp > 0;
    }


  getStatus() {
    return `${this.name} : HP ${this.hp}/${this.maxHp}`
  }

  takeDamage(dmg) {
    this.hp -= dmg
    if (this.hp < 0) {this.hp = 0}
  }

  heal(amount) {
    this.hp += amount
    if (this.hp > this.maxHp) {this.hp = this.maxHp}
  }

  static create(name) {
    return new Warrior(name, 100);
  }
}

// ═══════════════════════════════════════════════════════════
// 🎯 ЗАВДАННЯ 9.2 — КЛАС JEDI (НАСЛІДУВАННЯ)
// ═══════════════════════════════════════════════════════════
/*
  Клас Jedi розширює Warrior (extends).

  Додаткові властивості:
  - power   (число, сила Джедая)
  - rank    (визначається автоматично за power:
             power >= 80 → "Майстер"
             power >= 50 → "Лицар"
             інакше      → "Падаван")

  Додаткові методи:
  - forceAttack() → "[name] використовує Силу! Шкода: [power]"
  - getStatus()   → перевизнач батьківський метод:
                    "[rank] [name]: HP [hp]/[maxHp], Сила: [power]"
*/

class Jedi extends Warrior {
  constructor(name, hp, power) {
    super(name, hp);
    this.power = power
  }
  get rank() {
    if (this.power >= 80){
      return "Майстер"
    } else if(this.power >= 50){
      return "Лицар"
    } else{
      return "Падаван"
    }
  }

  forceAttack() {
    return `${this.name} використовує Силу! Шкода: ${this.power}`
  }

  getStatus() {
    return `${this.rank} ${this.name}  HP ${this.hp}/${this.maxHp}, Сила: ${this.power}`
  }
}

// ═══════════════════════════════════════════════════════════
// 🎯 ЗАВДАННЯ 9.3 — КЛАС SITH (ТЕМНИЙ БІК)
// ═══════════════════════════════════════════════════════════
/*
  Клас Sith також розширює Warrior.

  Додаткові властивості:
  - darkPower  (число)
  - title      (рядок, наприклад "Дарт")

  Додаткові методи:
  - darkForceAttack() →
    "[title] [name] обертає Темну Силу! Шкода: [darkPower * 1.5]"
    (результат округлити через Math.floor)
  - getStatus() → "[title] [name]: HP [hp]/[maxHp], Темна Сила: [darkPower]"
*/

class Sith extends Warrior {
  constructor(name, hp, darkPower, title = 'Дарт') {
    super(name, hp)
    this.darkPower = darkPower
    this.title = title
  }

  darkForceAttack() {
    return `${this.title} ${this.name} обертає Темну Силу! Шкода: ${Math.floor(this.darkPower * 1.5)}`
  }

  getStatus() {
    return `${this.title} ${this.name}: HP ${this.hp}/${this.maxHp}, Темна Сила: ${this.darkPower}`
  }
}

// ═══════════════════════════════════════════════════════════
// 🎯 ЗАВДАННЯ 9.4 — АРЕНА (БОНУС ⭐)
// ═══════════════════════════════════════════════════════════
/*
  Клас Arena симулює бій між двома воїнами.

  constructor(fighter1, fighter2):
  - зберігає обох бійців
  - round = 0 (поточний раунд)

  Метод fight():
  - Збільшує round на 1
  - fighter1 атакує fighter2 (завдає 20 шкоди)
  - fighter2 атакує fighter1 (завдає 15 шкоди)
  - Повертає результат раунду:
    { round, f1Status: fighter1.getStatus(), f2Status: fighter2.getStatus() }

  Метод getWinner():
  - Якщо fighter1.isAlive і !fighter2.isAlive → повертає fighter1.name
  - Якщо fighter2.isAlive і !fighter1.isAlive → повертає fighter2.name
  - Якщо обидва живі або обидва мертві        → повертає null
*/

class Arena {
  constructor(fighter1, fighter2) {
    this.fighter1 = fighter1
    this.fighter2 = fighter2
    this.round = 0
  }

  fight() {
    this.round ++
    this.fighter1.takeDamage(15)
    this.fighter2.takeDamage(20)
    return {
      round: this.round,
      f1Status: this.fighter1.getStatus(),
      f2Status: this.fighter2.getStatus()
    }
  }

  getWinner() {
    if (this.fighter1.isAlive && !this.fighter2.isAlive) {
      return this.fighter1.name
    } else if (this.fighter2.isAlive && !this.fighter1.isAlive){
      return this.fighter2.name
    }else{
      return null
    }
  }
}

/*
  "ФЕНОМЕНАЛЬНО!" — Майстер Джейкобус підводиться.
  "Ти створила цілий Орден Джедаїв!

  Але зупинись. Подивись на свій код — він виглядає
  як у 2015 році. Час опанувати СУЧАСНИЙ JavaScript!
  Деструктуризація, spread, rest — зброя 21 століття!"

  ➡️  Запусти: node chapter-09-klasy/testy.js
*/

// ⚠️  НЕ ВИДАЛЯЙ!
module.exports = { Warrior, Jedi, Sith, Arena };
