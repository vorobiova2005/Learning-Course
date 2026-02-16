const rawOrders = [
    { id: 101, customer: "Світлана", items: ["Latte", "Muffin"], total: 120, status: "completed" },
    { id: 102, customer: "Ігор", items: ["Espresso"], total: 50, status: "pending" },
    { id: 103, customer: "Тетяна", items: ["Cappuccino", "Bagel"], total: 90, status: "completed" },
    { id: 104, customer: "Олександр", items: ["Tea"], total: 30, status: "cancelled" },
    { id: 105, customer: "Олександра", items: ["Tea", "Muffin"], total: 100, status: "completed" },
    { id: 106, customer: "Ірина", items: ["Espresso", "Bagel"], total: 250, status: "pending" },
];

// Інформація про кав’ярню
const cafeInfo = {
    name: "CoffeeHouse",
    currency: "UAH",
    location: {
        city: "Lviv",
        country: "Ukraine"
    },
    openHours: "08:00-22:00"
};


// Крок 1: Фільтрація замовлень
// Відфільтруй масив rawOrders, щоб отримати лише замовлення зі статусом "completed".
// Витягни з кожного замовлення customer та total за допомогою деструктуризації.
// Результат: масив завершених замовлень для подальшої обробки.

const completedOrders = rawOrders.filter(({status}) => status==="completed")

const completedOrders2 = completedOrders.map(({customer, total}) => ({customer, total}))
console.log(completedOrders2)

// Крок 2: Застосування знижок
// Для всіх "completed" замовлень застосуй знижку 10% через функцію applyDiscount(total, discount).
// Результат: змінені суми замовлень, які вплинуть на підсумковий звіт.

function applyDiscount({total, customer}){
    return {
        customer,
        total: total * 0.9
    }
}

const discountCompleted = completedOrders2.map(applyDiscount)

console.log(discountCompleted)

// Крок 3: Обробка очікуваних замовлень
// Для "pending" замовлень збільш total на 10% (сервісний збір).
// Перевір, чи total > 100, і познач замовлення як "велике" або "звичайне".
// Результат: оновлені pending замовлення, які вплинуть на доставку та звіт.

const pendingOrders = rawOrders.map(({total, customer, status}) => {
    if(status === 'pending') {
        total *= 1.1
    }
    return {total: parseInt(total), customer, status}
})

console.log(pendingOrders)



const pendingOrderSize = pendingOrders.map(order => {
    let size;

    if (order.total < 100){
        size = 'велике'
    } else {
        size = 'звичайне'
    }

    return {...order, size}
})

console.log(pendingOrderSize)


// Крок 4: Додавання нового замовлення
// Додай нове замовлення у rawOrders.
// Результат: новий запис потрапить у підсумковий звіт та нарахування бонусів.

rawOrders.push({id: 107, customer: "Ваньок", items: ["Espresso", "Bagel"], total: 350, status: "cancelled" })

// Крок 5: Генерація підсумкового звіту
// Створи масив рядків orderSummaries, де кожне замовлення описане як:
// "Замовлення #id від customer: total currency (Статус: status)".
// Використовуй дані з кроків 1–4, щоб звіт відображав усі зміни.
// Результат: готовий текстовий звіт по всіх замовленнях.

const orderSummaries = rawOrders.map(({id, customer, total, status}) => {
    return `Замовлення ${id} від ${customer}: ${total} ${cafeInfo.currency} (Статус: ${status})`
})
console.log(orderSummaries)

// Крок 6: Визначення доставних замовлень
// Замовлення можна доставити, якщо:
// "status" === "pending" && total > 0.
// Використовуй результат з кроку 3, бо суми вже змінені.
// Результат: масив замовлень для доставки.

const deliveryOrders = pendingOrderSize.filter(({status, total})=> status === "pending" && total > 0)
console.log(deliveryOrders)

// Крок 7: Вивід інформації про кав’ярню
// Витягни name, currency, city та country через деструктуризацію.
// Виведи текст:
// "Ласкаво просимо в CoffeeHouse, Lviv, Ukraine! Ми працюємо з 08:00 до 22:00."


const {name, currency, location: {city, country}, openHours} = cafeInfo

console.log(`Ласкаво просимо в ${name}, ${city}, ${country}! Ми працюємо з ${openHours}.`)

// Крок 8: Обробка JSON даних
// Імітуй отримання замовлення з сервера у вигляді JSON рядка.
// Спробуй його розпарсити через JSON.parse().
// Якщо рядок пошкоджений, виведи "Невірний формат замовлення".
// Результат: нове замовлення може додаватися у масив і впливати на підсумковий звіт.

const newOrderFromServer1 = '{"id":101,"customer":"Василиса","items":["Latte","Muffin"],"total":120,"status":"completed"}'
const newOrderFromServer2 = '{ id: 106, customer: "Ганджубас", items: ["Espresso", "Bagel"], total: 250, status: "pending" '



function addOrder (order) {
    try{
        console.log(JSON.stringify(rawOrders[0]))
        const obj = JSON.parse(order)
        rawOrders.push(obj)
    } catch {
        console.log('Невірний формат замовлення')
    }
}

addOrder(newOrderFromServer1)
addOrder(newOrderFromServer2)

console.log(rawOrders)