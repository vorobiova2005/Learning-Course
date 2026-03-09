// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 10: Сучасний JS
//  Запуск: node chapter-10-suchasne/testy.js
// ═══════════════════════════════════════════════════════════

const { test, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження zavdannya.js:', e.message);
  process.exit(1);
}

console.log('\n💫 Перевірка Розділу 10: Сила Трансформації\n');

// ── Завдання 10.1 ─────────────────────────────────────────
console.log('📋 Завдання 10.1 — Деструктуризація об\'єкту:');

const testJedi = { name: 'Луна', rank: 'Лицар', power: 75, planet: 'Кодерон' };

test('Витягує name правильно', () => {
  expect(z.rozpakovanyDzhedi(testJedi).name).toBe('Луна');
});
test('Витягує rank правильно', () => {
  expect(z.rozpakovanyDzhedi(testJedi).rank).toBe('Лицар');
});
test('Витягує power правильно', () => {
  expect(z.rozpakovanyDzhedi(testJedi).power).toBe(75);
});
test('planet перейменований на homePlanet', () => {
  const result = z.rozpakovanyDzhedi(testJedi);
  if (result.planet !== undefined) throw new Error('Має бути homePlanet, не planet');
  expect(result.homePlanet).toBe('Кодерон');
});
test('rank за замовчуванням "Невідомий"', () => {
  const data = { name: 'Незнайомець', power: 10, planet: 'Земля' };
  expect(z.rozpakovanyDzhedi(data).rank).toBe('Невідомий');
});

// ── Завдання 10.2 ─────────────────────────────────────────
console.log('\n📋 Завдання 10.2 — Деструктуризація масиву:');

test('Витягує first і second', () => {
  const result = z.analitykaBotiv([10, 20, 30, 40]);
  expect(result.first).toBe(10);
  expect(result.second).toBe(20);
});
test('rest — решта масиву', () => {
  const result = z.analitykaBotiv([10, 20, 30, 40]);
  expect(result.rest).toEqual([30, 40]);
});
test('rest порожній якщо тільки 2 елементи', () => {
  const result = z.analitykaBotiv([1, 2]);
  expect(result.rest).toEqual([]);
});

// ── Завдання 10.3 ─────────────────────────────────────────
console.log('\n📋 Завдання 10.3 — Spread (апгрейд Джедая):');

const baseJedi = { name: 'Луна', rank: 'Лицар', power: 75 };

test('Оновлює rank', () => {
  const upgraded = z.upgradeDzhedaia(baseJedi, { rank: 'Майстер' });
  expect(upgraded.rank).toBe('Майстер');
});
test('Зберігає незмінені властивості', () => {
  const upgraded = z.upgradeDzhedaia(baseJedi, { rank: 'Майстер' });
  expect(upgraded.name).toBe('Луна');
  expect(upgraded.power).toBe(75);
});
test('Не змінює оригінальний об\'єкт', () => {
  z.upgradeDzhedaia(baseJedi, { rank: 'Падаван' });
  expect(baseJedi.rank).toBe('Лицар');
});

// ── Завдання 10.4 ─────────────────────────────────────────
console.log('\n📋 Завдання 10.4 — Optional chaining (?.) :');

test('Існуючий пілот → повертає ім\'я', () => {
  const ship = { pilot: { name: 'Хан Соло' } };
  expect(z.bezpechnyiPilot(ship)).toBe('Хан Соло');
});
test('Немає пілота → "Autopilot"', () => {
  expect(z.bezpechnyiPilot({})).toBe('Autopilot');
});
test('Пілот без імені → "Autopilot"', () => {
  expect(z.bezpechnyiPilot({ pilot: {} })).toBe('Autopilot');
});
test('null корабель → "Autopilot" (не кидає помилку)', () => {
  expect(z.bezpechnyiPilot(null)).toBe('Autopilot');
});

// ── Завдання 10.5 ─────────────────────────────────────────
console.log('\n📋 Завдання 10.5 — Nullish coalescing (??) :');

test('Дефолтні значення якщо порожній конфіг', () => {
  const result = z.nalashtuvannia({});
  expect(result.volume).toBe(50);
  expect(result.brightness).toBe(100);
  expect(result.lang).toBe('uk');
});
test('0 не замінюється дефолтом (на відміну від ||)', () => {
  const result = z.nalashtuvannia({ volume: 0, brightness: 0 });
  expect(result.volume).toBe(0);
  expect(result.brightness).toBe(0);
});
test('Кастомні значення зберігаються', () => {
  const result = z.nalashtuvannia({ volume: 30, lang: 'en' });
  expect(result.volume).toBe(30);
  expect(result.lang).toBe('en');
  expect(result.brightness).toBe(100);
});

// ── Завдання 10.6 ─────────────────────────────────────────
console.log('\n📋 Завдання 10.6 — Деструктуризація в параметрах:');

test('Повертає правильний рядок', () => {
  const jedi = { name: 'Луна', rank: 'Лицар', power: 75, planet: 'Кодерон' };
  const result = z.reportDzhedaia(jedi);
  expect(result).toContain('Лицар');
  expect(result).toContain('Луна');
  expect(result).toContain('Кодерон');
  expect(result).toContain('75');
});
test('Дефолт планети "Невідома"', () => {
  const jedi = { name: 'Ікс', rank: 'Падаван', power: 30 };
  const result = z.reportDzhedaia(jedi);
  expect(result).toContain('Невідома');
});

// ── Завдання 10.7 (БОНУС) ─────────────────────────────────
console.log('\n⭐ Завдання 10.7 — Злиття конфігів (БОНУС):');

test('Об\'єднує кілька об\'єктів', () => {
  expect(z.zlyttiaKonfihiv([{ a: 1 }, { b: 2 }])).toEqual({ a: 1, b: 2 });
});
test('Пізніший перезаписує ранішній', () => {
  const result = z.zlyttiaKonfihiv([{ a: 1 }, { b: 2 }, { a: 99 }]);
  expect(result.a).toBe(99);
  expect(result.b).toBe(2);
});
test('Порожній масив → {}', () => {
  expect(z.zlyttiaKonfihiv([])).toEqual({});
});

printResults('Розділ 10: Сила Трансформації');
