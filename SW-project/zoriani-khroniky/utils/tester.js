// ═══════════════════════════════════════════════════════════
//   ЗОРЯНІ ХРОНІКИ — Система Перевірки Завдань
//   Цей файл не потрібно змінювати!
// ═══════════════════════════════════════════════════════════

let results = { passed: 0, failed: 0, total: 0 };

function resetResults() {
  results = { passed: 0, failed: 0, total: 0 };
}

function test(name, fn) {
  results.total++;
  try {
    fn();
    console.log(`  ✅ ${name}`);
    results.passed++;
  } catch (e) {
    console.log(`  ❌ ${name}`);
    console.log(`     💬 ${e.message}`);
    results.failed++;
  }
}

async function testAsync(name, fn) {
  results.total++;
  try {
    await fn();
    console.log(`  ✅ ${name}`);
    results.passed++;
  } catch (e) {
    console.log(`  ❌ ${name}`);
    console.log(`     💬 ${e.message}`);
    results.failed++;
  }
}

function expect(value) {
  return {
    toBe(expected) {
      if (value !== expected) {
        throw new Error(
          `Очікувалось: ${JSON.stringify(expected)}, отримано: ${JSON.stringify(value)}`
        );
      }
    },
    toEqual(expected) {
      if (JSON.stringify(value) !== JSON.stringify(expected)) {
        throw new Error(
          `Очікувалось: ${JSON.stringify(expected)}, отримано: ${JSON.stringify(value)}`
        );
      }
    },
    toContain(item) {
      if (Array.isArray(value)) {
        if (!value.includes(item)) {
          throw new Error(`Масив не містить: ${JSON.stringify(item)}`);
        }
      } else if (typeof value === 'string') {
        if (!value.includes(item)) {
          throw new Error(`Рядок не містить: "${item}"`);
        }
      }
    },
    toBeGreaterThan(expected) {
      if (value <= expected) {
        throw new Error(`${value} не більше за ${expected}`);
      }
    },
    toBeLessThan(expected) {
      if (value >= expected) {
        throw new Error(`${value} не менше за ${expected}`);
      }
    },
    toBeGreaterThanOrEqual(expected) {
      if (value < expected) {
        throw new Error(`${value} менше за ${expected}`);
      }
    },
    toBeInstanceOf(expected) {
      if (!(value instanceof expected)) {
        throw new Error(`Об'єкт не є екземпляром ${expected.name}`);
      }
    },
    toBeTruthy() {
      if (!value) {
        throw new Error(`Очікувалось truthy, отримано: ${value}`);
      }
    },
    toBeFalsy() {
      if (value) {
        throw new Error(`Очікувалось falsy, отримано: ${value}`);
      }
    },
    toBeTypeOf(expected) {
      if (typeof value !== expected) {
        throw new Error(`Очікувався тип "${expected}", отримано "${typeof value}"`);
      }
    },
    toHaveLength(expected) {
      const len = value?.length;
      if (len !== expected) {
        throw new Error(`Очікувалась довжина ${expected}, отримано ${len}`);
      }
    },
    toThrow() {
      if (typeof value !== 'function') {
        throw new Error('expect(fn).toThrow() — потрібна функція');
      }
      let threw = false;
      try {
        value();
      } catch (e) {
        threw = true;
      }
      if (!threw) throw new Error('Функція не викинула помилку');
    },
    toBeNull() {
      if (value !== null) {
        throw new Error(`Очікувалось null, отримано: ${value}`);
      }
    },
    toBeUndefined() {
      if (value !== undefined) {
        throw new Error(`Очікувалось undefined, отримано: ${value}`);
      }
    },
    toResolveTo(expected) {
      if (!(value instanceof Promise)) {
        throw new Error('Очікувалась Promise');
      }
      return value.then(result => {
        if (JSON.stringify(result) !== JSON.stringify(expected)) {
          throw new Error(
            `Promise resolved to ${JSON.stringify(result)}, expected ${JSON.stringify(expected)}`
          );
        }
      });
    },
  };
}

function printResults(chapterName) {
  const line = '═'.repeat(52);
  console.log('\n' + line);
  if (results.failed === 0 && results.total > 0) {
    console.log(`🏆  ${chapterName}`);
    console.log(`    ВСІ ${results.passed} ЗАВДАНЬ ВИКОНАНО ПРАВИЛЬНО!`);
    console.log(`    Темний Компілятор відступає... поки що.`);
  } else {
    console.log(`📊  ${chapterName}`);
    console.log(`    Пройдено: ${results.passed} / ${results.total}`);
    if (results.failed > 0) {
      console.log(`    Залишилось виправити: ${results.failed} завдань`);
      console.log(`    Не здавайся! Джедай не здається.`);
    }
  }
  console.log(line + '\n');
}

module.exports = { test, testAsync, expect, printResults, resetResults };
