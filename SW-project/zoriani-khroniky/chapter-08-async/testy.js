// ═══════════════════════════════════════════════════════════
//  ТЕСТИ — Розділ 8: Асинхронність
//  Запуск: node chapter-08-async/testy.js
// ═══════════════════════════════════════════════════════════

const { testAsync, expect, printResults } = require('../utils/tester');

let z;
try {
  z = require('./zavdannya');
} catch (e) {
  console.log('❌ Помилка завантаження zavdannya.js:', e.message);
  process.exit(1);
}

console.log('\n📡 Перевірка Розділу 8: Крізь Гіперпростір\n');

async function runTests() {
  // ── Завдання 8.1 ────────────────────────────────────────
  console.log('📋 Завдання 8.1 — Callback (затримка сигналу):');

  await testAsync('zatrymkaSyhnalu передає повідомлення через callback', async () => {
    const result = await new Promise((resolve) => {
      z.zatrymkaSyhnalu('Привіт!', (msg) => resolve(msg));
    });
    expect(result).toBe('Привіт!');
  });

  await testAsync('zatrymkaSyhnalu — довільне повідомлення', async () => {
    const result = await new Promise((resolve) => {
      z.zatrymkaSyhnalu('SOS', (msg) => resolve(msg));
    });
    expect(result).toBe('SOS');
  });

  // ── Завдання 8.2 ────────────────────────────────────────
  console.log('\n📋 Завдання 8.2 — Promise (передача даних):');

  await testAsync('Рядок "привіт" → resolve("ПРИВІТ")', async () => {
    const result = await z.peredachaDanykh('привіт');
    expect(result).toBe('ПРИВІТ');
  });

  await testAsync('Порожній рядок → reject', async () => {
    let threw = false;
    try { await z.peredachaDanykh(''); } catch (e) { threw = true; }
    if (!threw) throw new Error('Мав відхилити порожній рядок');
  });

  await testAsync('Число замість рядка → reject', async () => {
    let threw = false;
    try { await z.peredachaDanykh(42); } catch (e) { threw = true; }
    if (!threw) throw new Error('Мав відхилити нерядкове значення');
  });

  // ── Завдання 8.3 ────────────────────────────────────────
  console.log('\n📋 Завдання 8.3 — Promise chaining (перекодування):');

  await testAsync('"привіт" → "<<🚀ПРИВІТ>>"', async () => {
    const result = await z.perekoduvanniaSyhnalu('привіт');
    expect(result).toBe('<<🚀ПРИВІТ>>');
  });

  await testAsync('Помилка → "ПОМИЛКА ПЕРЕДАЧІ"', async () => {
    const result = await z.perekoduvanniaSyhnalu('');
    expect(result).toBe('ПОМИЛКА ПЕРЕДАЧІ');
  });

  // ── Завдання 8.4 ────────────────────────────────────────
  console.log('\n📋 Завдання 8.4 — Async/Await (база даних Джедаїв):');

  await testAsync('Знайдений Джедай — правильний рядок', async () => {
    const result = await z.otrymatyDzhedaia('Луна');
    expect(typeof result).toBe('string');
    expect(result).toContain('Луна');
    expect(result).toContain('Лицар');
  });

  await testAsync('Незнайдений Джедай → "Не знайдено: ..."', async () => {
    const result = await z.otrymatyDzhedaia('Дарт Вейдер');
    expect(typeof result).toBe('string');
    if (!result.startsWith('Не знайдено:')) {
      throw new Error(`Має починатись з "Не знайдено:", отримано: "${result}"`);
    }
  });

  await testAsync('"Йода" знайдено як Майстер', async () => {
    const result = await z.otrymatyDzhedaia('Йода');
    expect(result).toContain('Майстер');
  });

  // ── Завдання 8.5 ────────────────────────────────────────
  console.log('\n📋 Завдання 8.5 — Promise.all (паралельний зв\'язок):');

  await testAsync('Масив результатів для 2 джедаїв', async () => {
    const results = await z.paralelnyiZviazok(['Луна', 'Йода']);
    expect(Array.isArray(results)).toBeTruthy();
    expect(results).toHaveLength(2);
  });

  await testAsync('Кожен результат містить відповідне ім\'я', async () => {
    const results = await z.paralelnyiZviazok(['Луна', 'Люк']);
    if (!results[0].includes('Луна')) throw new Error('Перший результат має містити "Луна"');
    if (!results[1].includes('Люк')) throw new Error('Другий результат має містити "Люк"');
  });

  printResults('Розділ 8: Крізь Гіперпростір');
}

runTests();
