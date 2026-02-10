//•	43. Оператор || (КЗ): Змінна userName може бути порожньою.
// Запиши в displayName або ім'я, або рядок "Гість" за замовчуванням.

const user = {
    name: ''
}

const displayName = user.name || 'Гість'

console.log(displayName)


