// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 7: Обробка помилок
//  Запуск: node chapter-07-pomylky/testy.js
// ═══════════════════════════════════════════════════════════

const { test, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження zavdannya.js:', e.message);
  process.exit(1);
}

console.log('\n⚡ Перевірка Розділу 7: Пастки Темряви\n');

// ── Завдання 7.1 ──────────────────────────────────────────
console.log('📋 Завдання 7.1 — Безпечний ділитель:');

test('10 / 2 → 5', () => {
  expect(z.bezpechneDialennia(10, 2)).toBe(5);
});
test('9 / 3 → 3', () => {
  expect(z.bezpechneDialennia(9, 3)).toBe(3);
});
test('Ділення на 0 кидає Error', () => {
  expect(() => z.bezpechneDialennia(5, 0)).toThrow();
});
test('Повідомлення помилки містить "нуль"', () => {
  let msg = '';
  try {
    z.bezpechneDialennia(5, 0);
  } catch (e) {
    msg = e.message;
  }
  if (!msg.toLowerCase().includes('нуль') && !msg.toLowerCase().includes('zero')) {
    throw new Error(`Повідомлення має містити "нуль", отримано: "${msg}"`);
  }
});

// ── Завдання 7.2 ──────────────────────────────────────────
console.log('\n📋 Завдання 7.2 — Безпечний виклик:');

test('Успішний виклик повертає результат', () => {
  const result = z.bezpechnyiVyklyk(() => 42);
  expect(result).toBe(42);
});
test('Функція що кидає → повертає "Помилка: ..."', () => {
  const result = z.bezpechnyiVyklyk(() => {
    throw new Error('Щось зламалось');
  });
  expect(typeof result).toBe('string');
  if (!result.includes('Щось зламалось')) {
    throw new Error(`Результат має містити текст помилки, отримано: "${result}"`);
  }
});
test('Рядок результату починається з "Помилка:"', () => {
  const result = z.bezpechnyiVyklyk(() => {
    throw new Error('TEST');
  });
  if (!result.startsWith('Помилка:')) {
    throw new Error(`Має починатись з "Помилка:", отримано: "${result}"`);
  }
});

// ── Завдання 7.3 ──────────────────────────────────────────
console.log('\n📋 Завдання 7.3 — Валідатор Джедая:');

test('Правильні дані → true', () => {
  expect(z.validateDzhedaia('Луна', 75, 'Лицар')).toBe(true);
});
test('Порожнє ім\'я → TypeError', () => {
  let err;
  try { z.validateDzhedaia('', 50, 'Падаван'); } catch(e) { err = e; }
  if (!err || !(err instanceof TypeError)) throw new Error('Має кидати TypeError для порожнього імені');
});
test('power = 0 → RangeError', () => {
  let err;
  try { z.validateDzhedaia('Луна', 0, 'Лицар'); } catch(e) { err = e; }
  if (!err || !(err instanceof RangeError)) throw new Error('Має кидати RangeError для power=0');
});
test('power = 101 → RangeError', () => {
  let err;
  try { z.validateDzhedaia('Луна', 101, 'Лицар'); } catch(e) { err = e; }
  if (!err || !(err instanceof RangeError)) throw new Error('Має кидати RangeError для power=101');
});
test('rank не рядок → TypeError', () => {
  let err;
  try { z.validateDzhedaia('Луна', 50, 123); } catch(e) { err = e; }
  if (!err || !(err instanceof TypeError)) throw new Error('Має кидати TypeError для числового rank');
});

// ── Завдання 7.4 ──────────────────────────────────────────
console.log('\n📋 Завдання 7.4 — Кастомна помилка GalacticError:');

test('GalacticError є підкласом Error', () => {
  const err = new z.GalacticError('Тест', 'ERR_TEST');
  if (!(err instanceof Error)) throw new Error('GalacticError має розширювати Error');
});
test('GalacticError.name === "GalacticError"', () => {
  const err = new z.GalacticError('Тест', 'ERR_TEST');
  expect(err.name).toBe('GalacticError');
});
test('GalacticError.message правильне', () => {
  const err = new z.GalacticError('Втрачено зв\'язок', 'CONN_LOST');
  expect(err.message).toBe('Втрачено зв\'язок');
});
test('GalacticError.code правильний', () => {
  const err = new z.GalacticError('Тест', 'MY_CODE');
  expect(err.code).toBe('MY_CODE');
});

// ── Завдання 7.5 ──────────────────────────────────────────
console.log('\n📋 Завдання 7.5 — Finally (канал):');

test('Успішна відправка → success: true', () => {
  const result = z.zviazok('Привіт галактиці!');
  expect(result.success).toBe(true);
});
test('Канал завжди закривається', () => {
  const r1 = z.zviazok('Привіт');
  expect(r1.channel).toBe('закритий');

  const r2 = z.zviazok('');
  expect(r2.channel).toBe('закритий');
});
test('Порожнє повідомлення → success: false', () => {
  const result = z.zviazok('');
  expect(result.success).toBe(false);
});
test('При помилці — error містить повідомлення', () => {
  const result = z.zviazok('');
  if (!result.error) throw new Error('При помилці result.error має бути заповнений');
});

// ── Завдання 7.6 (БОНУС) ──────────────────────────────────
console.log('\n⭐ Завдання 7.6 — Зона небезпеки (БОНУС):');

test('Успішна операція → {success: true, result}', () => {
  const ops = [() => 42, () => 'Луна'];
  const results = z.zonaNebezpeky(ops);
  expect(results[0].success).toBe(true);
  expect(results[0].result).toBe(42);
});
test('Операція з помилкою → {success: false, error}', () => {
  const ops = [
    () => { throw new Error('БУМ!'); },
  ];
  const results = z.zonaNebezpeky(ops);
  expect(results[0].success).toBe(false);
  if (!results[0].error) throw new Error('results[0].error має містити повідомлення');
});
test('Змішані операції — масив правильної довжини', () => {
  const ops = [() => 1, () => { throw new Error('x'); }, () => 3];
  const results = z.zonaNebezpeky(ops);
  expect(results).toHaveLength(3);
});

printResults('Розділ 7: Пастки Темряви');
