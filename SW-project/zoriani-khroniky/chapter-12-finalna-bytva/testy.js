// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 12: Фінальна Битва
//  Запуск: node chapter-12-finalna-bytva/testy.js
// ═══════════════════════════════════════════════════════════

const { test, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження zavdannya.js:', e.message);
  process.exit(1);
}

const { viruses, DarkCompiler, Hero } = z;

console.log('\n🌌 Перевірка Розділу 12: Фінальна Битва\n');

// ── Фаза 1: Аналіз вірусів ────────────────────────────────
console.log('📋 Фаза 1 — Аналіз ворожих сил:');

test('aktyvniViruses — фільтрує тільки активні', () => {
  const result = z.aktyvniViruses(viruses);
  if (!Array.isArray(result)) throw new Error('Має бути масив');
  result.forEach(v => {
    if (!v.active) throw new Error(`${v.name} не є активним`);
  });
});
test('aktyvniViruses — правильна кількість (5 активних)', () => {
  expect(z.aktyvniViruses(viruses)).toHaveLength(5);
});

test('naynebezpechniishyi — повертає вірус з найвищим power', () => {
  const result = z.naynebezpechniishyi(viruses);
  if (!result) throw new Error('Має повернути об\'єкт');
  // Серед активних: NullPointer(45), StackOverflow(80), MemoryLeak(60), TypeTerror(70), AsyncAnarchy(55)
  expect(result.name).toBe('StackOverflow');
  expect(result.power).toBe(80);
});

test('zahalnaSelaVorohiv — сума сили активних вірусів', () => {
  // 45 + 80 + 60 + 70 + 55 = 310
  expect(z.zahalnaSelaVorohiv(viruses)).toBe(310);
});

test('grupaVorohiv — групує активні за типом', () => {
  const groups = z.grupaVorohiv(viruses);
  // crash: StackOverflow(80), TypeTerror(70) = 2
  // drain: MemoryLeak(60), AsyncAnarchy(55) = 2
  if (!groups.crash) throw new Error('Немає групи crash');
  if (!groups.drain) throw new Error('Немає групи drain');
  expect(groups.crash.length).toBe(2);
  expect(groups.drain.length).toBe(2);
});

// ── Фаза 2: DarkCompiler ──────────────────────────────────
console.log('\n📋 Фаза 2 — Клас DarkCompiler:');

test('DarkCompiler: constructor встановлює поля', () => {
  const dc = new DarkCompiler('Бос', 300, [{ name: 'V1', power: 50, active: true }]);
  expect(dc.name).toBe('Бос');
  expect(dc.hp).toBe(300);
  expect(dc.maxHp).toBe(300);
  expect(dc.isAlive).toBe(true);
  expect(dc.phase).toBe(1);
});

test('DarkCompiler.getStatus() містить name і hp', () => {
  const dc = new DarkCompiler('Бос', 300, []);
  const status = dc.getStatus();
  expect(status).toContain('Бос');
  expect(status).toContain('300');
});

test('DarkCompiler.takeDamage() зменшує hp', () => {
  const dc = new DarkCompiler('Бос', 300, []);
  dc.takeDamage(100);
  expect(dc.hp).toBe(200);
});

test('DarkCompiler.takeDamage() не нижче 0', () => {
  const dc = new DarkCompiler('Бос', 100, []);
  dc.takeDamage(999);
  expect(dc.hp).toBe(0);
  expect(dc.isAlive).toBe(false);
});

test('DarkCompiler.releaseVirus() повертає найсильніший і видаляє', () => {
  const dc = new DarkCompiler('Бос', 300, [
    { name: 'A', power: 30, active: true },
    { name: 'B', power: 80, active: true },
    { name: 'C', power: 50, active: true },
  ]);
  const virus = dc.releaseVirus();
  if (!virus) throw new Error('releaseVirus() має повернути вірус');
  expect(virus.power).toBe(80);
  // Після видалення має залишитись 2 віруси
  const second = dc.releaseVirus();
  expect(second.power).toBe(50);
});

test('DarkCompiler.releaseVirus() повертає null якщо немає вірусів', () => {
  const dc = new DarkCompiler('Бос', 300, []);
  expect(dc.releaseVirus()).toBe(null);
});

test('DarkCompiler.nextPhase() збільшує фазу і лікує', () => {
  const dc = new DarkCompiler('Бос', 300, []);
  dc.takeDamage(100); // hp = 200
  dc.nextPhase();
  expect(dc.phase).toBe(2);
  expect(dc.hp).toBeGreaterThan(200);
  expect(dc.hp).toBeLessThan(301);
});

// ── Фаза 3: Hero ──────────────────────────────────────────
console.log('\n📋 Фаза 3 — Клас Hero:');

test('Hero: constructor встановлює поля', () => {
  const h = new Hero('Луна', 200, 40);
  expect(h.name).toBe('Луна');
  expect(h.hp).toBe(200);
  expect(h.maxHp).toBe(200);
  expect(h.power).toBe(40);
  expect(h.isAlive).toBe(true);
  expect(h.xp).toBe(0);
});

test('Hero.attack() повертає число >= power', () => {
  const h = new Hero('Луна', 200, 40);
  const dmg = h.attack();
  expect(typeof dmg).toBe('number');
  expect(dmg).toBeGreaterThanOrEqual(40);
});

test('Hero.attack() не перевищує power*2', () => {
  const h = new Hero('Луна', 200, 40);
  for (let i = 0; i < 20; i++) {
    const dmg = h.attack();
    if (dmg > 80) throw new Error(`Шкода ${dmg} перевищує ${40 * 2}`);
  }
});

test('Hero.takeDamage() зменшує hp', () => {
  const h = new Hero('Луна', 200, 40);
  h.takeDamage(50);
  expect(h.hp).toBe(150);
});

test('Hero.heal() відновлює 30% від maxHp', () => {
  const h = new Hero('Луна', 200, 40);
  h.takeDamage(100);     // hp = 100
  h.heal();              // +60 → hp = 160
  expect(h.hp).toBe(160);
});

test('Hero.heal() не перевищує maxHp', () => {
  const h = new Hero('Луна', 200, 40);
  h.heal();
  expect(h.hp).toBe(200);
});

test('Hero.gainXP() додає досвід', () => {
  const h = new Hero('Луна', 200, 40);
  h.gainXP(100);
  expect(h.xp).toBe(100);
});

test('Hero.learnAbility() додає здібність', () => {
  const h = new Hero('Луна', 200, 40);
  h.learnAbility('Вогняний Удар');
  if (!h.abilities.includes('Вогняний Удар')) throw new Error('Здібність не додана');
});

test('Hero.learnAbility() не дублює здібності', () => {
  const h = new Hero('Луна', 200, 40);
  h.learnAbility('Вогняний Удар');
  h.learnAbility('Вогняний Удар');
  const count = h.abilities.filter(a => a === 'Вогняний Удар').length;
  if (count > 1) throw new Error('Дублікат здібності!');
});

// ── Фаза 4: Симуляція ─────────────────────────────────────
console.log('\n📋 Фаза 4 — Симулятор бою:');

test('symuliatsiia() повертає об\'єкт з обов\'язковими полями', () => {
  const hero = new Hero('Тест', 500, 60);
  const boss = new DarkCompiler('TestBoss', 10, []); // слабкий бос
  const result = z.symuliatsiia(hero, boss);

  if (!result || typeof result !== 'object') throw new Error('Має повернути об\'єкт');
  if (!['hero', 'boss', 'draw'].includes(result.winner)) {
    throw new Error(`winner має бути "hero", "boss" або "draw", отримано: "${result.winner}"`);
  }
  if (typeof result.rounds !== 'number') throw new Error('rounds має бути числом');
  if (!Array.isArray(result.log)) throw new Error('log має бути масивом');
});

test('Герой з 9999 hp перемагає слабкого боса', () => {
  const hero = new Hero('УльтраЛуна', 9999, 200);
  const boss = new DarkCompiler('МікроБос', 1, []);
  const result = z.symuliatsiia(hero, boss);
  expect(result.winner).toBe('hero');
});

test('Герой з 1 hp програє сильному босу', () => {
  const hero = new Hero('СлабкаЛуна', 1, 1);
  const boss = new DarkCompiler('МегаБос', 9999, [
    { name: 'SupeVirus', power: 999, active: true }
  ]);
  const result = z.symuliatsiia(hero, boss);
  expect(result.winner).toBe('boss');
});

test('Лог не порожній', () => {
  const hero = new Hero('Луна', 500, 50);
  const boss = new DarkCompiler('Бос', 500, []);
  const result = z.symuliatsiia(hero, boss);
  if (result.log.length === 0) throw new Error('Лог бою не може бути порожнім');
});

// ── Підсумок ──────────────────────────────────────────────
printResults('Розділ 12: Фінальна Битва');
