// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 3: Цикли
//  Запуск: node chapter-03-tsykly/testy.js
// ═══════════════════════════════════════════════════════════

const { test, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження zavdannya.js:', e.message);
  process.exit(1);
}

console.log('\n🔄 Перевірка Розділу 3: Армія Клонів\n');

// ── Завдання 3.1 ──────────────────────────────────────────
console.log('📋 Завдання 3.1 — Лазерний залп:');

test('lazernyiZalp(5) → [1,2,3,4,5]', () => {
  expect(z.lazernyiZalp(5)).toEqual([1, 2, 3, 4, 5]);
});
test('lazernyiZalp(1) → [1]', () => {
  expect(z.lazernyiZalp(1)).toEqual([1]);
});
test('lazernyiZalp(0) → []', () => {
  expect(z.lazernyiZalp(0)).toEqual([]);
});
test('lazernyiZalp(10) має 10 елементів', () => {
  expect(z.lazernyiZalp(10)).toHaveLength(10);
});

// ── Завдання 3.2 ──────────────────────────────────────────
console.log('\n📋 Завдання 3.2 — Зворотній відлік:');

test('vidlik(5) → [5,4,3,2,1]', () => {
  expect(z.vidlik(5)).toEqual([5, 4, 3, 2, 1]);
});
test('vidlik(3) → [3,2,1]', () => {
  expect(z.vidlik(3)).toEqual([3, 2, 1]);
});
test('vidlik(1) → [1]', () => {
  expect(z.vidlik(1)).toEqual([1]);
});

// ── Завдання 3.3 ──────────────────────────────────────────
console.log('\n📋 Завдання 3.3 — Генератор щита:');

test('generatorShchyta(10, 3) → 4 кроки (3,6,9,12)', () => {
  expect(z.generatorShchyta(10, 3)).toBe(4);
});
test('generatorShchyta(100, 100) → 1 крок', () => {
  expect(z.generatorShchyta(100, 100)).toBe(1);
});
test('generatorShchyta(0, 5) → 0 кроків', () => {
  expect(z.generatorShchyta(0, 5)).toBe(0);
});
test('generatorShchyta(15, 5) → 3 кроки', () => {
  expect(z.generatorShchyta(15, 5)).toBe(3);
});

// ── Завдання 3.4 ──────────────────────────────────────────
console.log('\n📋 Завдання 3.4 — Сканер флоту:');

test('skanerFlotu([100, 200, 150]) → 450', () => {
  expect(z.skanerFlotu([100, 200, 150])).toBe(450);
});
test('skanerFlotu([]) → 0', () => {
  expect(z.skanerFlotu([])).toBe(0);
});
test('skanerFlotu([42]) → 42', () => {
  expect(z.skanerFlotu([42])).toBe(42);
});

// ── Завдання 3.5 ──────────────────────────────────────────
console.log('\n📋 Завдання 3.5 — Пошук зрадника:');

test('Знаходить зрадника з DARK_ префіксом', () => {
  const names = ['Люк', 'Лея', 'DARK_Ренегат', 'Хан'];
  expect(z.poshukZradnyka(names)).toBe('DARK_Ренегат');
});
test('Повертає першого зрадника', () => {
  const names = ['DARK_Перший', 'DARK_Другий', 'Люк'];
  expect(z.poshukZradnyka(names)).toBe('DARK_Перший');
});
test('Повертає null якщо зрадника немає', () => {
  const names = ['Люк', 'Лея', 'Хан'];
  expect(z.poshukZradnyka(names)).toBe(null);
});
test('Порожній масив → null', () => {
  expect(z.poshukZradnyka([])).toBe(null);
});

// ── Завдання 3.6 ──────────────────────────────────────────
console.log('\n📋 Завдання 3.6 — Фільтр Баг-Дроїдів:');

const units = [
  { name: 'Люк', isBug: false },
  { name: 'BUG-3', isBug: true },
  { name: 'Лея', isBug: false },
  { name: 'ERROR-7', isBug: true },
  { name: 'Хан', isBug: false },
];

test('Повертає тільки героїв (не дроїдів)', () => {
  expect(z.filtrBahDroidiv(units)).toEqual(['Люк', 'Лея', 'Хан']);
});
test('Без дроїдів — всі проходять', () => {
  const clean = [{ name: 'Арт', isBug: false }];
  expect(z.filtrBahDroidiv(clean)).toEqual(['Арт']);
});
test('Всі дроїди — порожній результат', () => {
  const bugs = [{ name: 'BUG-1', isBug: true }];
  expect(z.filtrBahDroidiv(bugs)).toEqual([]);
});

// ── Завдання 3.7 (БОНУС) ──────────────────────────────────
console.log('\n⭐ Завдання 3.7 — Таблиця множення (БОНУС):');

test('tablytsia(3) перший рядок: "3 × 1 = 3"', () => {
  expect(z.tablytsia(3)[0]).toBe('3 × 1 = 3');
});
test('tablytsia(3) останній рядок: "3 × 10 = 30"', () => {
  expect(z.tablytsia(3)[9]).toBe('3 × 10 = 30');
});
test('tablytsia(5) має 10 рядків', () => {
  expect(z.tablytsia(5)).toHaveLength(10);
});

printResults('Розділ 3: Армія Клонів');
