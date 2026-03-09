// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 11: Вищі методи масивів
//  Запуск: node chapter-11-vyshchi-metody/testy.js
// ═══════════════════════════════════════════════════════════

const { test, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження zavdannya.js:', e.message);
  process.exit(1);
}

const { fleet } = z;

console.log('\n🔮 Перевірка Розділу 11: Аналіз Галактики\n');

// ── Завдання 11.1 ─────────────────────────────────────────
console.log('📋 Завдання 11.1 — map: список імен:');

test('Повертає масив рядків', () => {
  const result = z.imenaKorabliv(fleet);
  expect(Array.isArray(result)).toBeTruthy();
  expect(typeof result[0]).toBe('string');
});
test('Перше ім\'я — X-Wing', () => {
  expect(z.imenaKorabliv(fleet)[0]).toBe('X-Wing');
});
test('Довжина масиву = кількість кораблів', () => {
  expect(z.imenaKorabliv(fleet)).toHaveLength(fleet.length);
});

// ── Завдання 11.2 ─────────────────────────────────────────
console.log('\n📋 Завдання 11.2 — map: апгрейд флоту:');

test('X-Wing power 85 → 94 (85 * 1.1 rounded)', () => {
  const upgraded = z.aphreidFlotu(fleet);
  expect(upgraded[0].power).toBe(Math.round(85 * 1.1));
});
test('Не змінює оригінал', () => {
  z.aphreidFlotu(fleet);
  expect(fleet[0].power).toBe(85);
});
test('Зберігає всі інші властивості', () => {
  const upgraded = z.aphreidFlotu(fleet);
  expect(upgraded[0].name).toBe('X-Wing');
  expect(upgraded[0].type).toBe('fighter');
});

// ── Завдання 11.3 ─────────────────────────────────────────
console.log('\n📋 Завдання 11.3 — filter: тільки винищувачі:');

test('Повертає тільки fighters', () => {
  const fighters = z.tilkyVynyschuvachy(fleet);
  fighters.forEach(s => {
    if (s.type !== 'fighter') throw new Error(`${s.name} не є fighter`);
  });
});
test('2 винищувачі у флоті (X-Wing, A-Wing)', () => {
  expect(z.tilkyVynyschuvachy(fleet)).toHaveLength(2);
});

// ── Завдання 11.4 ─────────────────────────────────────────
console.log('\n📋 Завдання 11.4 — filter: бойові кораблі:');

test('power >= 70 і fuel >= 60', () => {
  const result = z.boiezdatniKorabli(fleet, 70, 60);
  result.forEach(s => {
    if (s.power < 70) throw new Error(`${s.name} power < 70`);
    if (s.fuel < 60) throw new Error(`${s.name} fuel < 60`);
  });
});
test('Мають бути X-Wing, Millennium Falcon, A-Wing, Ghost', () => {
  const result = z.boiezdatniKorabli(fleet, 70, 60);
  const names = result.map(s => s.name);
  if (!names.includes('X-Wing')) throw new Error('X-Wing відсутній');
  if (!names.includes('A-Wing')) throw new Error('A-Wing відсутній');
});

// ── Завдання 11.5 ─────────────────────────────────────────
console.log('\n📋 Завдання 11.5 — reduce: загальна потужність:');

test('Сума потужності флоту', () => {
  // 85+60+95+70+55+75 = 440
  expect(z.zahalnaPotuzhtnist(fleet)).toBe(440);
});
test('Порожній масив → 0', () => {
  expect(z.zahalnaPotuzhtnist([])).toBe(0);
});

// ── Завдання 11.6 ─────────────────────────────────────────
console.log('\n📋 Завдання 11.6 — find: знайти корабель:');

test('Знаходить X-Wing', () => {
  const ship = z.znaidyKorabl(fleet, 'X-Wing');
  if (!ship) throw new Error('X-Wing не знайдено');
  expect(ship.power).toBe(85);
});
test('Незнайдений корабель → null', () => {
  expect(z.znaidyKorabl(fleet, 'TIE-Fighter')).toBe(null);
});

// ── Завдання 11.7 ─────────────────────────────────────────
console.log('\n📋 Завдання 11.7 — every/some:');

test('chyVsiHotovi — false (є кораблі з fuel < 50)', () => {
  // Y-Wing fuel=40, B-Wing fuel=30
  expect(z.chyVsiHotovi(fleet)).toBe(false);
});
test('chyVsiHotovi — true коли всі заправлені', () => {
  const allFull = fleet.map(s => ({ ...s, fuel: 100 }));
  expect(z.chyVsiHotovi(allFull)).toBe(true);
});
test('chyKhtosMaie — true (Millennium Falcon power=95)', () => {
  expect(z.chyKhtosMaie(fleet)).toBe(true);
});
test('chyKhtosMaie — false якщо ніхто не має power >= 90', () => {
  const weak = fleet.map(s => ({ ...s, power: 50 }));
  expect(z.chyKhtosMaie(weak)).toBe(false);
});

// ── Завдання 11.8 ─────────────────────────────────────────
console.log('\n📋 Завдання 11.8 — sort: рейтинг флоту:');

test('Перший корабель — найсильніший (Millennium Falcon, 95)', () => {
  const sorted = z.reitynh(fleet);
  expect(sorted[0].power).toBe(95);
  expect(sorted[0].name).toBe('Millennium Falcon');
});
test('Останній корабель — найслабший (B-Wing, 55)', () => {
  const sorted = z.reitynh(fleet);
  expect(sorted[sorted.length - 1].power).toBe(55);
});
test('Не змінює оригінальний масив', () => {
  z.reitynh(fleet);
  expect(fleet[0].name).toBe('X-Wing');
});

// ── Завдання 11.9 (БОНУС) ─────────────────────────────────
console.log('\n⭐ Завдання 11.9 — Ланцюжок методів (БОНУС):');

test('Повертає масив рядків', () => {
  const result = z.topVynyschuvachy(fleet);
  expect(Array.isArray(result)).toBeTruthy();
  if (result.length > 0) expect(typeof result[0]).toBe('string');
});
test('Формат: "[name] ([power])"', () => {
  const result = z.topVynyschuvachy(fleet);
  // X-Wing (85) і A-Wing (70) — обидва fighters з power >= 70
  if (!result.includes('X-Wing (85)')) throw new Error('Очікувалось "X-Wing (85)"');
  if (!result.includes('A-Wing (70)')) throw new Error('Очікувалось "A-Wing (70)"');
});
test('Відсортовано від сильнішого', () => {
  const result = z.topVynyschuvachy(fleet);
  // X-Wing (85) має бути перший
  expect(result[0]).toBe('X-Wing (85)');
});

// ── Завдання 11.10 (СУПЕР-БОНУС) ─────────────────────────
console.log('\n⭐⭐ Завдання 11.10 — Групування (СУПЕР-БОНУС):');

test('Створює групи за типом', () => {
  const groups = z.hrubovannia(fleet);
  if (!groups.fighter) throw new Error('Немає групи "fighter"');
  if (!groups.bomber) throw new Error('Немає групи "bomber"');
  if (!groups.freighter) throw new Error('Немає групи "freighter"');
});
test('Fighters: X-Wing і A-Wing', () => {
  const groups = z.hrubovannia(fleet);
  expect(groups.fighter).toHaveLength(2);
});
test('Bombers: Y-Wing і B-Wing', () => {
  const groups = z.hrubovannia(fleet);
  expect(groups.bomber).toHaveLength(2);
});

printResults('Розділ 11: Аналіз Галактики');
