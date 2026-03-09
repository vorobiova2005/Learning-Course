/*
╔══════════════════════════════════════════════════════════════╗
║   ЗОРЯНІ ХРОНІКИ: ШЛЯХ КОДЕРКИ                              ║
║   📡 Розділ 8: КРІЗЬ ГІПЕРПРОСТІР                           ║
║   Тема: Callback, Promise, async/await                       ║
╚══════════════════════════════════════════════════════════════╝

  🌌 СЮЖЕТ

  Луна знаходиться на борту крейсера і намагається зв'язатись
  із базою Повстанців через гіперпростір.

  Але міжзоряний зв'язок — не миттєвий! Передача сигналу
  займає час. Поки сигнал летить, програма не повинна
  "завмерти" й чекати.

  "Це асинхронність," — пояснює бортовий комп'ютер ARIA.
  "Ти запускаєш задачу й продовжуєш інші справи.
   Коли задача завершиться — отримуєш результат."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  📚 ТЕОРІЯ: АСИНХРОННІСТЬ

  1. CALLBACK — функція, яку викликають "коли буде готово":
     setTimeout(() => {
       console.log("Готово!");
     }, 1000);

  2. PROMISE — обіцянка результату в майбутньому:
     const p = new Promise((resolve, reject) => {
       if (ok) resolve("Успіх!");
       else    reject(new Error("Помилка!"));
     });
     p.then(result => ...).catch(err => ...);

  3. ASYNC / AWAIT — сучасний синтаксис для Promise:
     async function fetchData() {
       try {
         const result = await somePromise;
         return result;
       } catch (err) {
         console.log(err.message);
       }
     }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

// ═══════════════════════════════════════════════════════════
// 🎯 ЗАВДАННЯ 8.1 — CALLBACK: ЗАТРИМКА СИГНАЛУ
// ═══════════════════════════════════════════════════════════
/*
  Напиши функцію zatrymkaSyhnalu(message, callback):
  - Через 100мс (setTimeout) викликає callback(message)

  Приклад:
    zatrymkaSyhnalu("Привіт!", (msg) => console.log(msg));
    // через 100мс виведе: "Привіт!"
*/

function zatrymkaSyhnalu(message, callback) {
  ???
}

// ═══════════════════════════════════════════════════════════
// 🎯 ЗАВДАННЯ 8.2 — PROMISE: ПЕРЕДАЧА ДАНИХ
// ═══════════════════════════════════════════════════════════
/*
  Напиши функцію peredachaDanykh(data):
  - Повертає PROMISE
  - Якщо data є рядком і не порожній:
    → resolve(data.toUpperCase())   (великими літерами)
  - Якщо data порожній або не рядок:
    → reject(new Error("Некоректні дані"))
*/

function peredachaDanykh(data) {
  return new Promise((resolve, reject) => {
    ???
  });
}

// ═══════════════════════════════════════════════════════════
// 🎯 ЗАВДАННЯ 8.3 — PROMISE CHAINING: ПЕРЕКОДУВАННЯ
// ═══════════════════════════════════════════════════════════
/*
  Ланцюжок Promise:

  peredachaDanykh(data)
    → .then() → додати "🚀" на початок
    → .then() → обгорнути у "<<" і ">>"
    → .catch() → повернути "ПОМИЛКА ПЕРЕДАЧІ"

  Приклад: "привіт" → "ПРИВІТ" → "🚀ПРИВІТ" → "<<🚀ПРИВІТ>>"
*/

function perekoduvanniaSyhnalu(data) {
  return peredachaDanykh(data)
    .then(???)
    .then(???)
    .catch(???);
}

// ═══════════════════════════════════════════════════════════
// 🎯 ЗАВДАННЯ 8.4 — ASYNC/AWAIT: БАЗА ДАНИХ ДЖЕДАЇВ
// ═══════════════════════════════════════════════════════════
/*
  У нас є "база даних" (функція що повертає Promise):
*/

function findJediInDatabase(name) {
  const db = {
    'Луна':  { name: 'Луна',  rank: 'Лицар',  power: 75 },
    'Йода':  { name: 'Йода',  rank: 'Майстер', power: 100 },
    'Люк':   { name: 'Люк',   rank: 'Лицар',  power: 85 },
  };
  return new Promise((resolve, reject) => {
    if (db[name]) resolve(db[name]);
    else reject(new Error(`Джедая "${name}" не знайдено`));
  });
}

/*
  Напиши ASYNC функцію otrymatyDzhedaia(name):
  - Використай await для виклику findJediInDatabase(name)
  - Якщо знайдено → повертає рядок "Знайдено: [name], [rank]"
  - Якщо помилка → повертає рядок "Не знайдено: [повідомлення]"
  - Використай try / catch
*/

async function otrymatyDzhedaia(name) {
  ???
}

// ═══════════════════════════════════════════════════════════
// 🎯 ЗАВДАННЯ 8.5 — PROMISE.ALL: ПАРАЛЕЛЬНИЙ ЗВ'ЯЗОК
// ═══════════════════════════════════════════════════════════
/*
  Луна одночасно надсилає запити на 3 планети.
  Всі вони повертають Promise.

  Напиши async функцію paralelnyiZviazok(names):
  - names — масив імен джедаїв
  - Отримай ВСІХ паралельно через Promise.all()
  - Поверни масив результатів (рядків)

  Підказка:
    const promises = names.map(name => otrymatyDzhedaia(name));
    const results  = await Promise.all(promises);
*/

async function paralelnyiZviazok(names) {
  ???
}

/*
  "З'єднання встановлено!" — ARIA повідомляє.
  "База відповідає! Наші дані в безпеці.

  Чудово, Луно! Ти освоїла асинхронний Простір.
  Але Темний Компілятор еволюціонує —
  він тепер клонує сам себе за допомогою класів!
  Час вивчити ООП і КЛАСИ!"

  ➡️  Запусти: node chapter-08-async/testy.js
*/

// ⚠️  НЕ ВИДАЛЯЙ!
module.exports = {
  zatrymkaSyhnalu,
  peredachaDanykh,
  perekoduvanniaSyhnalu,
  findJediInDatabase,
  otrymatyDzhedaia,
  paralelnyiZviazok,
};
