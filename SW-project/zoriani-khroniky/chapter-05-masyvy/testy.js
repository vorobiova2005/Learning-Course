// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 5: Масиви
//  Запуск: node chapter-05-masyvy/testy.js
// ═══════════════════════════════════════════════════════════

const { test, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження zavdannya.js:', e.message);
  process.exit(1);
}

console.log('\n🚀 Перевірка Розділу 5: Зоряний Флот\n');

// ── Завдання 5.1 ──────────────────────────────────────────
console.log('📋 Завдання 5.1 — Реєстрація флоту:');

test('Флот є масивом', () => {
  const fleet = z.reiestratsiiaFlotu();
  if (!Array.isArray(fleet)) throw new Error('Має бути масив');
});
test('Фінальний флот має 4 кораблі', () => {
  // початок: [X-Wing, Y-Wing, A-Wing, B-Wing] → +Falcon → +Ghost → -Ghost → -Falcon
  // Ghost, X-Wing, Y-Wing, A-Wing, B-Wing, Falcon → shift видаляє Ghost → pop видаляє Falcon
  // результат: [X-Wing, Y-Wing, A-Wing, B-Wing]
  expect(z.reiestratsiiaFlotu()).toHaveLength(4);
});
test('Містить X-Wing', () => {
  expect(z.reiestratsiiaFlotu()).toContain('X-Wing');
});
test('Не містить Ghost (видалений shift)', () => {
  const fleet = z.reiestratsiiaFlotu();
  if (fleet.includes('Ghost')) throw new Error('Ghost має бути видалений через shift()');
});
test('Не містить Millennium Falcon (видалений pop)', () => {
  const fleet = z.reiestratsiiaFlotu();
  if (fleet.includes('Millennium Falcon')) throw new Error('Millennium Falcon має бути видалений через pop()');
});

// ── Завдання 5.2 ──────────────────────────────────────────
console.log('\n📋 Завдання 5.2 — Пошук у базі даних:');

const testFleet = ['X-Wing', 'Y-Wing', 'A-Wing'];

test('chyIsniuieKorabl — знаходить наявний', () => {
  expect(z.chyIsniuieKorabl(testFleet, 'Y-Wing')).toBe(true);
});
test('chyIsniuieKorabl — не знаходить відсутній', () => {
  expect(z.chyIsniuieKorabl(testFleet, 'TIE-Fighter')).toBe(false);
});
test('znaidyPozytsiiu — правильний індекс', () => {
  expect(z.znaidyPozytsiiu(testFleet, 'A-Wing')).toBe(2);
});
test('znaidyPozytsiiu — -1 якщо немає', () => {
  expect(z.znaidyPozytsiiu(testFleet, 'B-Wing')).toBe(-1);
});

// ── Завдання 5.3 ──────────────────────────────────────────
console.log('\n📋 Завдання 5.3 — Ескадрилья (перші 3):');

const bigFleet = ['A', 'B', 'C', 'D', 'E'];

test('Повертає перші 3 елементи', () => {
  expect(z.pershaTroyakEskadrylia(bigFleet)).toEqual(['A', 'B', 'C']);
});
test('Не змінює оригінальний масив', () => {
  const original = ['A', 'B', 'C', 'D', 'E'];
  z.pershaTroyakEskadrylia(original);
  expect(original).toHaveLength(5);
});

// ── Завдання 5.4 ──────────────────────────────────────────
console.log('\n📋 Завдання 5.4 — З\'єднання флотів:');

test('Об\'єднує два масиви', () => {
  expect(z.ziednaniaFlotiv(['A', 'B'], ['C', 'D'])).toEqual(['A', 'B', 'C', 'D']);
});
test('Не змінює вихідні масиви', () => {
  const f1 = ['A'];
  const f2 = ['B'];
  z.ziednaniaFlotiv(f1, f2);
  expect(f1).toHaveLength(1);
});

// ── Завдання 5.5 ──────────────────────────────────────────
console.log('\n📋 Завдання 5.5 — Маніфест команди:');

test('manifest(["Луна", "Хан"]) → "Луна, Хан"', () => {
  expect(z.manifest(['Луна', 'Хан'])).toBe('Луна, Хан');
});
test('manifest з одним іменем', () => {
  expect(z.manifest(['Лея'])).toBe('Лея');
});
test('manifest з трьома іменами', () => {
  expect(z.manifest(['A', 'B', 'C'])).toBe('A, B, C');
});

// ── Завдання 5.6 ──────────────────────────────────────────
console.log('\n📋 Завдання 5.6 — Бойове сортування:');

test('Сортує від меншого до більшого', () => {
  expect(z.boioveSortuvannia([50, 10, 80, 30])).toEqual([10, 30, 50, 80]);
});
test('Не змінює оригінальний масив', () => {
  const original = [50, 10, 80];
  z.boioveSortuvannia(original);
  expect(original[0]).toBe(50);
});

// ── Завдання 5.7 ──────────────────────────────────────────
console.log('\n📋 Завдання 5.7 — Видалення пошкодженого:');

test('Видаляє елемент за індексом', () => {
  expect(z.vydatyPoshkodzhenyi(['A', 'B', 'C'], 1)).toEqual(['A', 'C']);
});
test('Видаляє перший елемент', () => {
  expect(z.vydatyPoshkodzhenyi(['A', 'B', 'C'], 0)).toEqual(['B', 'C']);
});
test('Не змінює оригінал', () => {
  const f = ['A', 'B', 'C'];
  z.vydatyPoshkodzhenyi(f, 1);
  expect(f).toHaveLength(3);
});

// ── Завдання 5.8 (БОНУС) ──────────────────────────────────
console.log('\n⭐ Завдання 5.8 — Найшвидший корабель (БОНУС):');

test('Знаходить найшвидший', () => {
  const ships = [
    { name: 'X-Wing', speed: 100 },
    { name: 'Millennium Falcon', speed: 200 },
    { name: 'Y-Wing', speed: 80 },
  ];
  expect(z.naishvydshyiKorabl(ships)).toBe('Millennium Falcon');
});
test('Один корабель у списку', () => {
  expect(z.naishvydshyiKorabl([{ name: 'A', speed: 50 }])).toBe('A');
});

printResults('Розділ 5: Зоряний Флот');
