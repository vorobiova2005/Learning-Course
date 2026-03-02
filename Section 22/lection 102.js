//102. Fetch: Напиши базовий запит fetch до
// 'https://google.com' і виведи результат у консоль (через .then).

fetch('https://google.com')
    .then(response => {
        console.log("Отримали відповідь від сервера:", response);
    })
    .catch(error => {
        console.log("Ой, щось пішло не так:", error);
    });