// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 6: Об'єкти
//  Запуск: node chapter-06-obiekty/testy.js
// ═══════════════════════════════════════════════════════════

const { test, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження zavdannya.js:', e.message);
  process.exit(1);
}

console.log('\n📜 Перевірка Розділу 6: Кодекс Джедаїв\n');

// ── Завдання 6.1 ──────────────────────────────────────────
console.log('📋 Завдання 6.1 — Досьє Джедая:');

test('jedi є об\'єктом', () => {
  if (typeof z.jedi !== 'object' || z.jedi === null) throw new Error('jedi має бути об\'єктом');
});
test('jedi.name є рядком', () => {
  expect(typeof z.jedi.name).toBe('string');
  if (!z.jedi.name) throw new Error('name не може бути порожнім');
});
test('jedi.rank є одним з: "Падаван", "Лицар", "Майстер"', () => {
  const validRanks = ['Падаван', 'Лицар', 'Майстер'];
  if (!validRanks.includes(z.jedi.rank)) {
    throw new Error(`rank має бути одним з: ${validRanks.join(', ')}`);
  }
});
test('jedi.forcePower — число від 1 до 100', () => {
  expect(z.jedi.forcePower).toBeTypeOf('number');
  expect(z.jedi.forcePower).toBeGreaterThan(0);
  expect(z.jedi.forcePower).toBeLessThan(101);
});
test('jedi.weapons є масивом з елементами', () => {
  if (!Array.isArray(z.jedi.weapons) || z.jedi.weapons.length === 0) {
    throw new Error('weapons має бути масивом з хоча б 1 елементом');
  }
});
test('jedi.isAlive є boolean', () => {
  expect(typeof z.jedi.isAlive).toBe('boolean');
});

// ── Завдання 6.2 ──────────────────────────────────────────
console.log('\n📋 Завдання 6.2 — Методи об\'єкту:');

test('warrior.present() містить ім\'я', () => {
  const result = z.warrior.present();
  expect(result).toContain(z.warrior.name);
});
test('warrior.present() містить ранг', () => {
  expect(z.warrior.present()).toContain(z.warrior.rank);
});
test('warrior.present() містить планету', () => {
  expect(z.warrior.present()).toContain(z.warrior.planet);
});
test('warrior.attack() містить forcePower', () => {
  expect(z.warrior.attack()).toContain(String(z.warrior.forcePower));
});
test('warrior.isStrong() → true (forcePower=75 >= 50)', () => {
  expect(z.warrior.isStrong()).toBe(true);
});
test('isStrong() для слабкого воїна → false', () => {
  const weak = { name: 'Новачок', rank: 'Падаван', planet: 'Земля', forcePower: 30 };
  weak.isStrong = z.warrior.isStrong.bind(weak);
  expect(weak.isStrong()).toBe(false);
});

// ── Завдання 6.3 ──────────────────────────────────────────
console.log('\n📋 Завдання 6.3 — Вкладені об\'єкти:');

test('starship.name є рядком', () => {
  expect(typeof z.starship.name).toBe('string');
});
test('starship.pilot є об\'єктом з name і rank', () => {
  const { pilot } = z.starship;
  if (!pilot || typeof pilot !== 'object') throw new Error('pilot має бути об\'єктом');
  if (!pilot.name) throw new Error('pilot.name відсутній');
  if (!pilot.rank) throw new Error('pilot.rank відсутній');
});
test('starship.status є об\'єктом з hull і shields', () => {
  const { status } = z.starship;
  if (!status || typeof status !== 'object') throw new Error('status має бути об\'єктом');
  if (typeof status.hull !== 'number') throw new Error('status.hull має бути числом');
  if (typeof status.shields !== 'number') throw new Error('status.shields має бути числом');
});
test('starship.weapons є масивом', () => {
  if (!Array.isArray(z.starship.weapons)) throw new Error('weapons має бути масивом');
});

// ── Завдання 6.4 ──────────────────────────────────────────
console.log('\n📋 Завдання 6.4 — Перебір об\'єкту:');

const sampleObj = { a: 1, b: 2, c: 3 };

test('kluchi() повертає масив ключів', () => {
  expect(z.kluchi(sampleObj)).toEqual(['a', 'b', 'c']);
});
test('znachennia() повертає масив значень', () => {
  expect(z.znachennia(sampleObj)).toEqual([1, 2, 3]);
});
test('pary() повертає масив пар', () => {
  expect(z.pary(sampleObj)).toEqual([['a', 1], ['b', 2], ['c', 3]]);
});

// ── Завдання 6.5 ──────────────────────────────────────────
console.log('\n📋 Завдання 6.5 — Злиття об\'єктів:');

test('Об\'єднує два об\'єкти', () => {
  const result = z.zlytyObyekty({ a: 1 }, { b: 2 });
  expect(result).toEqual({ a: 1, b: 2 });
});
test('Другий об\'єкт перемагає при однакових ключах', () => {
  const result = z.zlytyObyekty({ a: 1 }, { a: 99 });
  expect(result.a).toBe(99);
});

// ── Завдання 6.6 ──────────────────────────────────────────
console.log('\n📋 Завдання 6.6 — Фабрика Джедаїв:');

test('Майстер (power >= 80)', () => {
  const master = z.stvorytyCDzhedaia('Йода', 'Дагоба', 95);
  expect(master.rank).toBe('Майстер');
  expect(master.name).toBe('Йода');
});
test('Лицар (power >= 50)', () => {
  const knight = z.stvorytyCDzhedaia('Луна', 'Кодерон', 65);
  expect(knight.rank).toBe('Лицар');
});
test('Падаван (power < 50)', () => {
  const padawan = z.stvorytyCDzhedaia('Анакін', 'Татуїн', 30);
  expect(padawan.rank).toBe('Падаван');
});
test('greet() містить name і planet', () => {
  const j = z.stvorytyCDzhedaia('Луна', 'Кодерон', 70);
  const greeting = j.greet();
  expect(greeting).toContain('Луна');
  expect(greeting).toContain('Кодерон');
});

// ── Завдання 6.7 (БОНУС) ──────────────────────────────────
console.log('\n⭐ Завдання 6.7 — Галактичний реєстр (БОНУС):');

test('Перетворює масив на реєстр', () => {
  const arr = [
    { name: 'Луна', power: 75 },
    { name: 'Люк', power: 90 },
  ];
  const registry = z.stvorytyReiestr(arr);
  if (!registry['Луна']) throw new Error('Немає ключа "Луна"');
  if (!registry['Люк']) throw new Error('Немає ключа "Люк"');
  expect(registry['Луна'].power).toBe(75);
});

printResults('Розділ 6: Кодекс Джедаїв');
