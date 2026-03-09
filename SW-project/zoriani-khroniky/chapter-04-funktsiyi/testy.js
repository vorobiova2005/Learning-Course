// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 4: Функції
//  Запуск: node chapter-04-funktsiyi/testy.js
// ═══════════════════════════════════════════════════════════

const { test, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження zavdannya.js:', e.message);
  process.exit(1);
}

console.log('\n🌀 Перевірка Розділу 4: Майстерність Сили\n');

// ── Завдання 4.1 ──────────────────────────────────────────
console.log('📋 Завдання 4.1 — Привітання Падавана:');

test('pryvitanniaPadavana("Луна") містить "Луна"', () => {
  const result = z.pryvitanniaPadavana('Луна');
  expect(result).toContain('Луна');
});
test('pryvitanniaPadavana("Люк") → "Хай буде з тобою Сила, Люк!"', () => {
  expect(z.pryvitanniaPadavana('Люк')).toBe('Хай буде з тобою Сила, Люк!');
});
test('є функцією', () => {
  expect(typeof z.pryvitanniaPadavana).toBe('function');
});

// ── Завдання 4.2 ──────────────────────────────────────────
console.log('\n📋 Завдання 4.2 — Потужність лайтсейбера:');

test('potuzhnistLaitseyBera(5, 10) → 100', () => {
  // 5*10 + 10*5 = 50 + 50 = 100
  expect(z.potuzhnistLaitseyBera(5, 10)).toBe(100);
});
test('potuzhnistLaitseyBera(1, 1) → 15', () => {
  // 1*10 + 1*5 = 10 + 5 = 15
  expect(z.potuzhnistLaitseyBera(1, 1)).toBe(15);
});
test('potuzhnistLaitseyBera(0, 0) → 0', () => {
  expect(z.potuzhnistLaitseyBera(0, 0)).toBe(0);
});
test('є функцією (function expression)', () => {
  expect(typeof z.potuzhnistLaitseyBera).toBe('function');
});

// ── Завдання 4.3 ──────────────────────────────────────────
console.log('\n📋 Завдання 4.3 — Статус бійця:');

test('hp 100 → "Здоровий"', () => {
  expect(z.statusBoitsia(100)).toBe('Здоровий');
});
test('hp 71 → "Здоровий"', () => {
  expect(z.statusBoitsia(71)).toBe('Здоровий');
});
test('hp 50 → "Поранений"', () => {
  expect(z.statusBoitsia(50)).toBe('Поранений');
});
test('hp 31 → "Поранений"', () => {
  expect(z.statusBoitsia(31)).toBe('Поранений');
});
test('hp 15 → "Критичний стан"', () => {
  expect(z.statusBoitsia(15)).toBe('Критичний стан');
});
test('hp 0 → "Знешкоджений"', () => {
  expect(z.statusBoitsia(0)).toBe('Знешкоджений');
});
test('hp -5 → "Знешкоджений"', () => {
  expect(z.statusBoitsia(-5)).toBe('Знешкоджений');
});

// ── Завдання 4.4 ──────────────────────────────────────────
console.log('\n📋 Завдання 4.4 — Параметри за замовчуванням:');

test('Без аргументів — значення за замовчуванням', () => {
  const result = z.otrymatyKorabl();
  expect(result).toContain('Millennium Falcon');
  expect(result).toContain('100');
  expect(result).toContain('2');
});
test('З кастомними аргументами', () => {
  const result = z.otrymatyKorabl('X-Wing', 80, 1);
  expect(result).toContain('X-Wing');
  expect(result).toContain('80');
  expect(result).toContain('1');
});

// ── Завдання 4.5 ──────────────────────────────────────────
console.log('\n📋 Завдання 4.5 — Rest параметри:');

test('atakaFlotu(100, 200, 50) → 350', () => {
  expect(z.atakaFlotu(100, 200, 50)).toBe(350);
});
test('atakaFlotu(10) → 10', () => {
  expect(z.atakaFlotu(10)).toBe(10);
});
test('atakaFlotu() → 0', () => {
  expect(z.atakaFlotu()).toBe(0);
});
test('atakaFlotu(1, 2, 3, 4, 5) → 15', () => {
  expect(z.atakaFlotu(1, 2, 3, 4, 5)).toBe(15);
});

// ── Завдання 4.6 ──────────────────────────────────────────
console.log('\n📋 Завдання 4.6 — Замикання (лічильник перемог):');

test('Лічильник рахує від 1', () => {
  const peremohy = z.stvorytyCHchylnyk();
  expect(peremohy()).toBe(1);
});
test('Кожен виклик збільшує на 1', () => {
  const counter = z.stvorytyCHchylnyk();
  counter();
  counter();
  expect(counter()).toBe(3);
});
test('Два різних лічильники незалежні', () => {
  const c1 = z.stvorytyCHchylnyk();
  const c2 = z.stvorytyCHchylnyk();
  c1(); c1(); c1();
  c2();
  expect(c1()).toBe(4);
  expect(c2()).toBe(2);
});

// ── Завдання 4.7 (БОНУС) ──────────────────────────────────
console.log('\n⭐ Завдання 4.7 — Функція вищого порядку (БОНУС):');

test('zastosuvaty(double, 5) → 10', () => {
  const double = (x) => x * 2;
  expect(z.zastosuvaty(double, 5)).toBe(10);
});
test('zastosuvaty з рядком', () => {
  const exclaim = (x) => x + '!';
  expect(z.zastosuvaty(exclaim, 'Луна')).toBe('Луна!');
});

printResults('Розділ 4: Майстерність Сили');
