// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 2: Умови
//  Запуск: node chapter-02-umovy/testy.js
// ═══════════════════════════════════════════════════════════

const { test, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження zavdannya.js:', e.message);
  process.exit(1);
}

console.log('\n⚔️  Перевірка Розділу 2: Перший Вибір\n');

// ── Завдання 2.1 ──────────────────────────────────────────
console.log('📋 Завдання 2.1 — Сканер сторони Сили:');

test('"light" → "Джедай"', () => {
  expect(z.vyznachStoronuSyly('light')).toBe('Джедай');
});
test('"dark" → "Ситх"', () => {
  expect(z.vyznachStoronuSyly('dark')).toBe('Ситх');
});
test('"neutral" → "Нейтральний"', () => {
  expect(z.vyznachStoronuSyly('neutral')).toBe('Нейтральний');
});
test('"" → "Нейтральний"', () => {
  expect(z.vyznachStoronuSyly('')).toBe('Нейтральний');
});

// ── Завдання 2.2 ──────────────────────────────────────────
console.log('\n📋 Завдання 2.2 — Класифікатор планет:');

test('"Татуїн" → "Пустельна планета"', () => {
  expect(z.klasyfikatorPlanet('Татуїн')).toBe('Пустельна планета');
});
test('"Хот" → "Крижана планета"', () => {
  expect(z.klasyfikatorPlanet('Хот')).toBe('Крижана планета');
});
test('"Ендор" → "Лісова планета"', () => {
  expect(z.klasyfikatorPlanet('Ендор')).toBe('Лісова планета');
});
test('"Корусант" → "Планета-місто"', () => {
  expect(z.klasyfikatorPlanet('Корусант')).toBe('Планета-місто');
});
test('"Набу" → "Невідома планета"', () => {
  expect(z.klasyfikatorPlanet('Набу')).toBe('Невідома планета');
});

// ── Завдання 2.3 ──────────────────────────────────────────
console.log('\n📋 Завдання 2.3 — Статус пілота:');

test('Вік 20, ліцензія є, здоров\'я 80 → true', () => {
  expect(z.chyMozhePilotuvatyXWing(20, true, 80)).toBe(true);
});
test('Вік 16, ліцензія є, здоров\'я 90 → false (замалий вік)', () => {
  expect(z.chyMozhePilotuvatyXWing(16, true, 90)).toBe(false);
});
test('Вік 25, ліцензії немає, здоров\'я 95 → false (немає ліцензії)', () => {
  expect(z.chyMozhePilotuvatyXWing(25, false, 95)).toBe(false);
});
test('Вік 30, ліцензія є, здоров\'я 50 → false (здоров\'я нижче 70)', () => {
  expect(z.chyMozhePilotuvatyXWing(30, true, 50)).toBe(false);
});
test('Вік 18, ліцензія є, здоров\'я 70 → true (мінімум)', () => {
  expect(z.chyMozhePilotuvatyXWing(18, true, 70)).toBe(true);
});

// ── Завдання 2.4 ──────────────────────────────────────────
console.log('\n📋 Завдання 2.4 — Рівень загрози:');

test('Power 95 → "КРИТИЧНА ЗАГРОЗА — тікай!"', () => {
  expect(z.rivenyZahrozy(95)).toBe('КРИТИЧНА ЗАГРОЗА — тікай!');
});
test('Power 90 → "КРИТИЧНА ЗАГРОЗА — тікай!"', () => {
  expect(z.rivenyZahrozy(90)).toBe('КРИТИЧНА ЗАГРОЗА — тікай!');
});
test('Power 75 → "Висока загроза — обережно"', () => {
  expect(z.rivenyZahrozy(75)).toBe('Висока загроза — обережно');
});
test('Power 50 → "Середня загроза — будь готова"', () => {
  expect(z.rivenyZahrozy(50)).toBe('Середня загроза — будь готова');
});
test('Power 20 → "Мала загроза — можна атакувати"', () => {
  expect(z.rivenyZahrozy(20)).toBe('Мала загроза — можна атакувати');
});

// ── Завдання 2.5 ──────────────────────────────────────────
console.log('\n📋 Завдання 2.5 — Тернарний щит:');

test('statusDroida(true) → "Активний"', () => {
  expect(z.statusDroida(true)).toBe('Активний');
});
test('statusDroida(false) → "Офлайн"', () => {
  expect(z.statusDroida(false)).toBe('Офлайн');
});
test('maxZDvokh(5, 10) → 10', () => {
  expect(z.maxZDvokh(5, 10)).toBe(10);
});
test('maxZDvokh(99, 1) → 99', () => {
  expect(z.maxZDvokh(99, 1)).toBe(99);
});
test('parneChyNi(4) → "Парне"', () => {
  expect(z.parneChyNi(4)).toBe('Парне');
});
test('parneChyNi(7) → "Непарне"', () => {
  expect(z.parneChyNi(7)).toBe('Непарне');
});

// ── Завдання 2.6 ──────────────────────────────────────────
console.log('\n📋 Завдання 2.6 — Сканер правдивості:');

test('chyTruthy("Луна") → true', () => {
  expect(z.chyTruthy('Луна')).toBe(true);
});
test('chyTruthy(42) → true', () => {
  expect(z.chyTruthy(42)).toBe(true);
});
test('chyTruthy("") → false', () => {
  expect(z.chyTruthy('')).toBe(false);
});
test('chyTruthy(0) → false', () => {
  expect(z.chyTruthy(0)).toBe(false);
});
test('chyTruthy(null) → false', () => {
  expect(z.chyTruthy(null)).toBe(false);
});
test('chyTruthy(undefined) → false', () => {
  expect(z.chyTruthy(undefined)).toBe(false);
});

printResults('Розділ 2: Перший Вибір');
