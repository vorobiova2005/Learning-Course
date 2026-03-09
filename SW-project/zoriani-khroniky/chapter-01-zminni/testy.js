// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 1: Змінні та типи даних
//  Запуск: node chapter-01-zminni/testy.js
// ═══════════════════════════════════════════════════════════

const { test, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження файлу zavdannya.js:');
  console.log('  ', e.message);
  process.exit(1);
}

console.log('\n🌌 Перевірка Розділу 1: Пробудження\n');

// ── Завдання 1.1 ──────────────────────────────────────────
console.log('📋 Завдання 1.1 — Картка Джедая:');

test('heroName є рядком (string)', () => {
  expect(z.heroName).toBeTypeOf('string');
  if (z.heroName === '???' || z.heroName.trim() === '') {
    throw new Error("Потрібно вказати своє ім'я замість \"???\"");
  }
});

test('homePlanet є рядком і не порожній', () => {
  expect(z.homePlanet).toBeTypeOf('string');
  if (z.homePlanet === '???' || z.homePlanet.trim() === '') {
    throw new Error('Потрібно вказати планету замість "???"');
  }
});

test('heroAge є числом (number)', () => {
  expect(z.heroAge).toBeTypeOf('number');
  if (isNaN(z.heroAge)) throw new Error('heroAge має бути числом, не NaN');
});

test('heroAge — розумний вік (від 1 до 150)', () => {
  expect(z.heroAge).toBeGreaterThan(0);
  expect(z.heroAge).toBeLessThan(151);
});

test('isJedi є boolean (true або false)', () => {
  expect(z.isJedi).toBeTypeOf('boolean');
});

test('forcePower — число від 1 до 100', () => {
  expect(z.forcePower).toBeTypeOf('number');
  expect(z.forcePower).toBeGreaterThan(0);
  expect(z.forcePower).toBeLessThan(101);
});

// ── Завдання 1.2 ──────────────────────────────────────────
console.log('\n📋 Завдання 1.2 — Типи даних (typeof):');

test('typeOfName === "string"', () => {
  expect(z.typeOfName).toBe('string');
});

test('typeOfAge === "number"', () => {
  expect(z.typeOfAge).toBe('number');
});

test('typeOfIsJedi === "boolean"', () => {
  expect(z.typeOfIsJedi).toBe('boolean');
});

test('typeOfNull === "object" (особливість JS!)', () => {
  if (z.typeOfNull !== 'object') {
    throw new Error(
      `typeof null → "object" (це відомий баг JavaScript!). Ти отримала: "${z.typeOfNull}"`
    );
  }
});

test('typeOfNothing === "undefined"', () => {
  expect(z.typeOfNothing).toBe('undefined');
});

// ── Завдання 1.3 ──────────────────────────────────────────
console.log('\n📋 Завдання 1.3 — Ресурси Ордену:');

test('totalResources = 100 + 50 + 12 = 162', () => {
  expect(z.totalResources).toBe(162);
});

test('crystalsPerSoldier = 100 / 50 = 2', () => {
  expect(z.crystalsPerSoldier).toBe(2);
});

test('soldiers зменшено на 8 (50 - 8 = 42)', () => {
  expect(z.soldiers).toBe(42);
});

test('ships збільшено на 5 (12 + 5 = 17)', () => {
  expect(z.ships).toBe(17);
});

test('shipsSquared = 17 ** 2 = 289', () => {
  expect(z.shipsSquared).toBe(289);
});

// ── Завдання 1.4 ──────────────────────────────────────────
console.log('\n📋 Завдання 1.4 — Галактична радіограма:');

test('heroProfile містить ім\'я героя', () => {
  expect(z.heroProfile).toBeTypeOf('string');
  expect(z.heroProfile).toContain(z.heroName);
});

test('heroProfile містить планету', () => {
  expect(z.heroProfile).toContain(z.homePlanet);
});

test('heroProfile містить вік', () => {
  expect(z.heroProfile).toContain(String(z.heroAge));
});

test('nameLength — правильна довжина імені', () => {
  expect(z.nameLength).toBe(z.heroName.length);
});

test('heroNameUpper — ім\'я у ВЕЛИКИХ літерах', () => {
  expect(z.heroNameUpper).toBe(z.heroName.toUpperCase());
});

// ── Підсумок ──────────────────────────────────────────────
printResults('Розділ 1: Пробудження');
