// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 9: Класи та ООП
//  Запуск: node chapter-09-klasy/testy.js
// ═══════════════════════════════════════════════════════════

const { test, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження zavdannya.js:', e.message);
  process.exit(1);
}

const { Warrior, Jedi, Sith, Arena } = z;

console.log('\n🏯 Перевірка Розділу 9: Орден Джедаїв\n');

// ── Завдання 9.1 ──────────────────────────────────────────
console.log('📋 Завдання 9.1 — Клас Warrior:');

test('new Warrior() створює екземпляр', () => {
  const w = new Warrior('Хан', 100);
  expect(w.name).toBe('Хан');
  expect(w.hp).toBe(100);
  expect(w.maxHp).toBe(100);
  expect(w.isAlive).toBe(true);
});

test('getStatus() повертає правильний рядок', () => {
  const w = new Warrior('Хан', 80);
  expect(w.getStatus()).toContain('Хан');
  expect(w.getStatus()).toContain('80');
});

test('takeDamage(30) зменшує hp', () => {
  const w = new Warrior('Хан', 100);
  w.takeDamage(30);
  expect(w.hp).toBe(70);
});

test('takeDamage() не дає hp впасти нижче 0', () => {
  const w = new Warrior('Хан', 100);
  w.takeDamage(999);
  expect(w.hp).toBe(0);
});

test('takeDamage() оновлює isAlive', () => {
  const w = new Warrior('Хан', 100);
  w.takeDamage(100);
  expect(w.isAlive).toBe(false);
});

test('heal() збільшує hp', () => {
  const w = new Warrior('Хан', 100);
  w.takeDamage(40);
  w.heal(20);
  expect(w.hp).toBe(80);
});

test('heal() не дає hp перевищити maxHp', () => {
  const w = new Warrior('Хан', 100);
  w.heal(999);
  expect(w.hp).toBe(100);
});

test('Warrior.create(name) → Warrior з hp 100', () => {
  const w = Warrior.create('Луна');
  expect(w).toBeInstanceOf(Warrior);
  expect(w.hp).toBe(100);
  expect(w.name).toBe('Луна');
});

// ── Завдання 9.2 ──────────────────────────────────────────
console.log('\n📋 Завдання 9.2 — Клас Jedi:');

test('Jedi є підкласом Warrior', () => {
  const j = new Jedi('Луна', 120, 75);
  expect(j).toBeInstanceOf(Warrior);
  expect(j).toBeInstanceOf(Jedi);
});

test('Jedi зберігає power', () => {
  const j = new Jedi('Луна', 120, 75);
  expect(j.power).toBe(75);
});

test('Rank "Майстер" (power >= 80)', () => {
  const j = new Jedi('Йода', 200, 100);
  expect(j.rank).toBe('Майстер');
});

test('Rank "Лицар" (power >= 50)', () => {
  const j = new Jedi('Луна', 120, 65);
  expect(j.rank).toBe('Лицар');
});

test('Rank "Падаван" (power < 50)', () => {
  const j = new Jedi('Анакін', 80, 30);
  expect(j.rank).toBe('Падаван');
});

test('forceAttack() містить name і power', () => {
  const j = new Jedi('Луна', 100, 75);
  const result = j.forceAttack();
  expect(result).toContain('Луна');
  expect(result).toContain('75');
});

test('getStatus() перевизначений — містить rank', () => {
  const j = new Jedi('Луна', 100, 75);
  expect(j.getStatus()).toContain('Лицар');
  expect(j.getStatus()).toContain('75');
});

test('takeDamage() успадкований від Warrior', () => {
  const j = new Jedi('Луна', 100, 75);
  j.takeDamage(50);
  expect(j.hp).toBe(50);
});

// ── Завдання 9.3 ──────────────────────────────────────────
console.log('\n📋 Завдання 9.3 — Клас Sith:');

test('Sith є підкласом Warrior', () => {
  const s = new Sith('Вейдер', 150, 90);
  expect(s).toBeInstanceOf(Warrior);
  expect(s).toBeInstanceOf(Sith);
});

test('Sith має title за замовчуванням "Дарт"', () => {
  const s = new Sith('Вейдер', 150, 90);
  expect(s.title).toBe('Дарт');
});

test('darkForceAttack() → шкода 1.5× від darkPower', () => {
  const s = new Sith('Вейдер', 150, 100);
  const result = s.darkForceAttack();
  expect(result).toContain('150'); // Math.floor(100 * 1.5) = 150
});

test('getStatus() містить title, name і darkPower', () => {
  const s = new Sith('Вейдер', 150, 90);
  const status = s.getStatus();
  expect(status).toContain('Дарт');
  expect(status).toContain('Вейдер');
  expect(status).toContain('90');
});

// ── Завдання 9.4 (БОНУС) ──────────────────────────────────
console.log('\n⭐ Завдання 9.4 — Арена (БОНУС):');

test('Arena.fight() повертає об\'єкт з round, f1Status, f2Status', () => {
  const f1 = new Warrior('Луна', 100);
  const f2 = new Sith('Вейдер', 100, 50);
  const arena = new Arena(f1, f2);
  const result = arena.fight();
  if (!result || result.round === undefined) throw new Error('fight() має повертати {round, f1Status, f2Status}');
  expect(result.round).toBe(1);
});

test('Arena.fight() завдає шкоди обом', () => {
  const f1 = new Warrior('Луна', 100);
  const f2 = new Warrior('Ворог', 100);
  const arena = new Arena(f1, f2);
  arena.fight();
  // f1 отримав 15 шкоди від f2, f2 отримав 20 шкоди від f1
  if (f1.hp >= 100) throw new Error('f1 має отримати шкоду');
  if (f2.hp >= 100) throw new Error('f2 має отримати шкоду');
});

test('Arena.getWinner() null якщо обидва живі', () => {
  const f1 = new Warrior('Луна', 1000);
  const f2 = new Warrior('Ворог', 1000);
  const arena = new Arena(f1, f2);
  expect(arena.getWinner()).toBe(null);
});

test('Arena.getWinner() повертає переможця', () => {
  const f1 = new Warrior('Луна', 1000);
  const f2 = new Warrior('Ворог', 1);
  f2.takeDamage(999); // знешкоджуємо f2
  const arena = new Arena(f1, f2);
  expect(arena.getWinner()).toBe('Луна');
});

printResults('Розділ 9: Орден Джедаїв');
