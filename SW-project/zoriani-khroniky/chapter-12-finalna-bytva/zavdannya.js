/*
╔══════════════════════════════════════════════════════════════╗
║   ЗОРЯНІ ХРОНІКИ: ШЛЯХ КОДЕРКИ                              ║
║   🌌 Розділ 12: ФІНАЛЬНА БИТВА                              ║
║   Тема: Міні-проект — все разом!                             ║
╚══════════════════════════════════════════════════════════════╝

  🌌 ЕПІЛОГ — ФІНАЛЬНА БИТВА

  ╔═══════════════════════════════════════════════════════════╗
  ║                  ТЕРМІНОВЕ ПОВІДОМЛЕННЯ                   ║
  ║                                                           ║
  ║  Луно! Темний Компілятор виявлений.                       ║
  ║  Він захопив ядро Галактичного Сервера.                   ║
  ║                                                           ║
  ║  У тебе є 12 хвилин до повного краху системи.            ║
  ║  Запусти ПРОТОКОЛ ВІДНОВЛЕННЯ.                            ║
  ║                                                           ║
  ║  Використай всі свої знання.                              ║
  ║  Галактика рахує на тебе.                                 ║
  ╚═══════════════════════════════════════════════════════════╝

  Цей розділ — твій ФІНАЛЬНИЙ ПРОЕКТ.
  Тут немає підказок "???". Тільки ти і код.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

// ═══════════════════════════════════════════════════════════
// 🔴 ФАЗА 1: АНАЛІЗ ВОРОЖИХ СИЛ
// ═══════════════════════════════════════════════════════════
/*
  Темний Компілятор має армію вірусів.
  Проаналізуй їх і підготуй звіт.

  ВХІДНІ ДАНІ:
*/

const viruses = [
  { id: 1,  name: 'NullPointer',   power: 45,  type: 'crash',  active: true  },
  { id: 2,  name: 'StackOverflow', power: 80,  type: 'crash',  active: true  },
  { id: 3,  name: 'InfiniteLoop',  power: 30,  type: 'freeze', active: false },
  { id: 4,  name: 'MemoryLeak',    power: 60,  type: 'drain',  active: true  },
  { id: 5,  name: 'SyntaxDemon',   power: 25,  type: 'freeze', active: false },
  { id: 6,  name: 'TypeTerror',    power: 70,  type: 'crash',  active: true  },
  { id: 7,  name: 'AsyncAnarchy',  power: 55,  type: 'drain',  active: true  },
  { id: 8,  name: 'ScopeSpecter',  power: 40,  type: 'freeze', active: false },
];

// ЗАВДАННЯ 12.1: Знайди всі АКТИВНІ віруси (active: true)
function aktyvniViruses(viruses) {
  // TODO: використай filter
}

// ЗАВДАННЯ 12.2: Знайди НАЙНЕБЕЗПЕЧНІШИЙ активний вірус (з максимальним power)
function naynebezpechniishyi(viruses) {
  // TODO: filter активних, потім знайди з максимальним power
}

// ЗАВДАННЯ 12.3: Загальна сила АКТИВНИХ вірусів
function zahalnaSelaVorohiv(viruses) {
  // TODO: filter + reduce
}

// ЗАВДАННЯ 12.4: Згрупуй активні віруси за типом
// Результат: { "crash": [...], "drain": [...] }
function grupaVorohiv(viruses) {
  // TODO: filter активних + reduce для групування
}

// ═══════════════════════════════════════════════════════════
// 🔵 ФАЗА 2: КЛАС ТЕМНОГО КОМПІЛЯТОРА
// ═══════════════════════════════════════════════════════════
/*
  Темний Компілятор — це БОSS. Напиши його клас.
*/

// ЗАВДАННЯ 12.5: Клас DarkCompiler
class DarkCompiler {
  /*
    constructor(name, hp, viruses):
    - name     (рядок)
    - hp       (число)
    - maxHp    (дорівнює hp при створенні)
    - viruses  (масив вірусів)
    - isAlive  (true)
    - phase    (1 — фаза бою, починається з 1)

    Методи:
    - getStatus()  → "[name] | HP: [hp]/[maxHp] | Фаза: [phase] | Вірусів: [кількість]"
    - takeDamage(dmg) → зменшує hp (не нижче 0), оновлює isAlive
    - releaseVirus()  → якщо є активні віруси, повертає найсильніший і видаляє його з масиву
                        якщо вірусів немає → повертає null
    - nextPhase()     → збільшує phase на 1, лікує 20% від maxHp (не перевищуючи maxHp)
  */

  constructor(name, hp, viruses) {
    // TODO
  }

  getStatus() {
    // TODO
  }

  takeDamage(dmg) {
    // TODO
  }

  releaseVirus() {
    // TODO — підказка: sort за power (від більшого), взяти перший, видалити з масиву
  }

  nextPhase() {
    // TODO
  }
}

// ═══════════════════════════════════════════════════════════
// 🟢 ФАЗА 3: КЛАС ГЕРОЯ (ЦЕ ТИ — ЛУНА!)
// ═══════════════════════════════════════════════════════════

// ЗАВДАННЯ 12.6: Клас Hero
class Hero {
  /*
    constructor(name, hp, power):
    - name, hp, maxHp, power, isAlive (true)
    - abilities: масив доступних здібностей (починається з ["Атака"])
    - xp: 0

    Методи:
    - getStatus() → "[name] | HP: [hp]/[maxHp] | Сила: [power] | XP: [xp]"
    - attack()    → повертає число (рандомна шкода: від power до power*2)
                    підказка: Math.floor(Math.random() * (power + 1) + power)
    - takeDamage(dmg) → зменшує hp (не нижче 0), оновлює isAlive
    - gainXP(amount) → додає xp
    - learnAbility(ability) → додає здібність в abilities (якщо ще немає)
    - heal() → відновлює 30% від maxHp (не перевищуючи maxHp)
  */

  constructor(name, hp, power) {
    // TODO
  }

  getStatus() {
    // TODO
  }

  attack() {
    // TODO: Math.floor(Math.random() * (this.power + 1) + this.power)
  }

  takeDamage(dmg) {
    // TODO
  }

  gainXP(amount) {
    // TODO
  }

  learnAbility(ability) {
    // TODO
  }

  heal() {
    // TODO
  }
}

// ═══════════════════════════════════════════════════════════
// 🟡 ФАЗА 4: СИМУЛЯТОР БОЮ
// ═══════════════════════════════════════════════════════════

// ЗАВДАННЯ 12.7: Функція symuliatsiia(hero, boss)
/*
  Симулює бій раунд за раундом.
  Повертає об'єкт з результатами.

  Логіка КОЖНОГО РАУНДУ:
  1. Герой атакує боса (boss.takeDamage(hero.attack()))
  2. Якщо бос живий:
     - Бос випускає вірус (releaseVirus())
     - Якщо є вірус: герой отримує вірусну шкоду (virus.power / 2, округлити)
     - Якщо вірусів немає: бос атакує сам (герой отримує 20 шкоди)
  3. Якщо після кожних 3 раундів бос ще живий → nextPhase()
  4. Бій закінчується коли хтось вмирає (isAlive === false)
  5. Кожен раунд герой отримує 10 XP

  Поверни:
  {
    winner: "hero" або "boss",
    rounds: N (кількість раундів),
    heroHp: фінальне hp героя,
    bossHp: фінальне hp боса,
    log: [рядки — по одному на раунд]
  }

  Обмеження: максимум 50 раундів (якщо жоден не переміг → winner: "draw")
*/

function symuliatsiia(hero, boss) {
  const log = [];
  let rounds = 0;

  // TODO: напиши цикл бою

  return {
    winner: 'draw',
    rounds,
    heroHp: hero.hp,
    bossHp: boss.hp,
    log,
  };
}

// ═══════════════════════════════════════════════════════════
// 🏆 ФАЗА 5: ФІНАЛЬНИЙ ЗАПУСК
// ═══════════════════════════════════════════════════════════

// ЗАВДАННЯ 12.8: Запусти симуляцію і виведи результат!
async function finalnaBytvа() {
  console.log('\n' + '═'.repeat(60));
  console.log('🌌  ЗОРЯНІ ХРОНІКИ: ФІНАЛЬНА БИТВА');
  console.log('═'.repeat(60));

  // 1. Аналіз ворожих сил
  const active = aktyvniViruses(viruses);
  console.log(`\n⚠️  Активних вірусів: ${active.length}`);
  console.log(`⚡ Загальна сила ворогів: ${zahalnaSelaVorohiv(viruses)}`);

  const boss = naynebezpechniishyi(viruses);
  if (boss) {
    console.log(`👾 Найнебезпечніший: ${boss.name} (сила: ${boss.power})`);
  }

  // 2. Створи боса і героя
  const darkCompiler = new DarkCompiler('Темний Компілятор', 300, [...active]);
  const luna = new Hero('Луна', 200, 40);
  luna.learnAbility('Сила Коду');
  luna.learnAbility('Лазерний Заряд');

  console.log('\n📊 СТАТУС ПЕРЕД БОЄМ:');
  console.log('  ' + luna.getStatus());
  console.log('  ' + darkCompiler.getStatus());

  // 3. Симуляція!
  console.log('\n⚔️  БИТВА ПОЧИНАЄТЬСЯ!\n');
  const result = symuliatsiia(luna, darkCompiler);

  // 4. Лог бою (перші 5 раундів)
  result.log.slice(0, 5).forEach(line => console.log('  ' + line));
  if (result.log.length > 5) {
    console.log(`  ... ще ${result.log.length - 5} раундів ...`);
  }

  // 5. Результат
  console.log('\n' + '═'.repeat(60));
  if (result.winner === 'hero') {
    console.log('🏆  ПЕРЕМОГА! ЛУНА ПЕРЕМОГЛА ТЕМНОГО КОМПІЛЯТОРА!');
    console.log('    Галактика врятована! JavaScript врятував всіх!');
  } else if (result.winner === 'boss') {
    console.log('💀  ПОРАЗКА. Темний Компілятор переміг...');
    console.log('    Але ти отримала безцінний досвід. Спробуй ще!');
  } else {
    console.log('⚖️   НІЧИЯ. 50 раундів не вистачило!');
  }
  console.log(`\n📊 Раундів зіграно: ${result.rounds}`);
  console.log(`   HP Луни: ${result.heroHp}`);
  console.log(`   HP Боса: ${result.bossHp}`);
  console.log(`   XP Луни: ${luna.xp}`);
  console.log('═'.repeat(60) + '\n');
}

// Запуск фінальної битви:
finalnaBytvа();

// ⚠️  НЕ ВИДАЛЯЙ!
module.exports = {
  viruses,
  aktyvniViruses,
  naynebezpechniishyi,
  zahalnaSelaVorohiv,
  grupaVorohiv,
  DarkCompiler,
  Hero,
  symuliatsiia,
};
