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
  return viruses.filter(virus => virus.active === true)
}

// ЗАВДАННЯ 12.2: Знайди НАЙНЕБЕЗПЕЧНІШИЙ активний вірус (з максимальним power)
function naynebezpechniishyi(viruses) {
  // TODO: filter активних, потім знайди з максимальним power
  const active = viruses.filter(virus => virus.active);
  return active.reduce((acc, virus) => {
    if (virus.power > acc.power) {
      return virus;
    } else {
      return acc;
    }
  })
}

// ЗАВДАННЯ 12.3: Загальна сила АКТИВНИХ вірусів
function zahalnaSelaVorohiv(viruses) {
  // TODO: filter + reduce
  const active = viruses.filter(virus => virus.active);
  return active.reduce((acc, virus) => acc + virus.power, 0)
}

// ЗАВДАННЯ 12.4: Згрупуй активні віруси за типом
// Результат: { "crash": [...], "drain": [...] }
function grupaVorohiv(viruses) {
  // TODO: filter активних + reduce для групування// TODO: filter активних + reduce для групування
  return viruses.reduce((groups, virus) => {
    if (virus.active) {
      if (!groups[virus.type]) {
        groups[virus.type] = [];
      }
      groups[virus.type].push(virus);
    }
    return groups;
  }, {});
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
    this.name = name
    this.hp = hp
    this.maxHp = hp
    this.viruses = viruses
    this.isAlive = true
    this.phase = 1
  }

  getStatus() {
    // TODO
    return `${this.name} | HP: ${this.hp}/${this.maxHp} | Фаза: ${this.phase} | Вірусів: ${this.viruses.length}`
  }

  takeDamage(dmg) {
    // TODO
    this.hp -= dmg
    if (this.hp < 0) {this.hp = 0}
    this.isAlive = this.hp > 0
  }

  releaseVirus() {
    // TODO — підказка: sort за power (від більшого), взяти перший, видалити з масиву
    const activeViruses = this.viruses.filter(virus => virus.active)
    if (activeViruses.length === 0) return null
    const strongest = activeViruses.reduce((max, virus) => virus.power > max.power ? virus : max)
    const index = this.viruses.indexOf(strongest)
    if (index !== -1) this.viruses.splice(index, 1)

    return strongest;
  }

  nextPhase() {
    // TODO
    this.phase += 1
    this.hp += Math.round(this.maxHp * 0.2)
    if (this.hp > this.maxHp) this.hp = this.maxHp
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
    this.name = name
    this.hp = hp
    this.maxHp = hp
    this.power = power
    this.isAlive = true
    this.abilities = ["Атака"]
    this.xp = 0
  }

  getStatus() {
    // TODO
    return `${this.name} | HP: ${this.hp}/${this.maxHp} | Сила: ${this.power} | XP: ${this.xp}`
  }

  attack() {
    // TODO: Math.floor(Math.random() * (this.power + 1) + this.power)
    return Math.floor(Math.random() * (this.power + 1) + this.power)
  }

  takeDamage(dmg) {
    // TODO
    this.hp -= dmg;
    if (this.hp < 0) this.hp = 0;
    this.isAlive = this.hp > 0;
  }

  gainXP(amount) {
    // TODO
    this.xp += amount
  }

  learnAbility(ability) {
    // TODO
    if (!this.abilities.includes(ability)) {
      this.abilities.push(ability)
    }
  }

  heal() {
    // TODO
    this.hp += Math.round(this.maxHp * 0.3)
    if (this.hp > this.maxHp) this.hp = this.maxHp
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

  while (hero.isAlive && boss.isAlive && rounds < 50) {
    rounds++;

    const heroDmg = hero.attack();
    boss.takeDamage(heroDmg);

    let roundMsg = `Раунд ${rounds}: Герой атакує ${heroDmg} шкоди. `;

    if (boss.isAlive) {
      const virus = boss.releaseVirus();
      if (virus) {
        const virusDmg = Math.round(virus.power / 2);
        hero.takeDamage(virusDmg);
        roundMsg += `Бос випускає вірус "${virus.name}" (${virusDmg} шкоди).`;
      } else {
        hero.takeDamage(20);
        roundMsg += `Бос атакує сам (20 шкоди).`;
      }
    }
    if (rounds % 3 === 0 && boss.isAlive) {
      boss.nextPhase();
      roundMsg += ` Бос переходить у фазу ${boss.phase} та відновлює HP.`;
    }

    hero.gainXP(10);

    log.push(roundMsg);
  }
  let winner;
  if (hero.isAlive && !boss.isAlive) winner = 'hero';
  else if (!hero.isAlive && boss.isAlive) winner = 'boss';
  else winner = 'draw';

  return {
    winner,
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
