//📝 ТЗ: Ядро системи "RPG Merchant 2.0"
// 1. Структура даних (Масиви та Об'єкти)
// Створи масив об'єктів inventory. Кожен об'єкт — це товар: id, name, price, stock (кількість на складі) та category.
// Створи об'єкт player з полями: nickname, balance, isVip (boolean), та вкладеним об'єктом stats (де є hp та lvl).

const inventory = [
    {id: 1, name: 'Sword', price: 150, stock: 10, category: 'weapon'},
    {id: 2, name: 'Shield', price: 100, stock: 5, category: 'armor'},
    {id: 3, name: 'Health Potion', price: 25, stock: 30, category: 'consumable'},
    {id: 4, name: 'Bow', price: 120, stock: 7, category: 'weapon'},
    {id: 5, name: 'Helmet', price: 80, stock: 12, category: 'magic'}
]

const player = {
    nickname: 'ShadowHunter',
    balance: 500,
    isVip: true,
    stats:{
        hp: 100,
        lvl: 5
    }
}

//2. Логіка розрахунків (Оператори та Функції)
// Напиши функцію calculatePrice(basePrice, quantity).
// Всередині функції реалізуй:
// Параметр за замовчуванням: якщо quantity не передано, воно дорівнює 1.
// Логічну умову: якщо гравець VIP І сума покупки більша за 100, повертай ціну зі знижкою 15%.
// Шаблонний рядок: функція має повертати не просто число, а фразу: "Ціна за покупку: [сума] золота".

function calculatePrice(basePrice, quantity = 1) {

    let finalSum = basePrice * quantity

    if (player.isVip && finalSum > 100){
        finalSum *= 0.85

    }
    return `Ціна за покупку: ${finalSum} золота`
}

calculatePrice(200, 2)


//3. Система безпеки (Логічні оператори та Error Handling)
// Створи функцію buyItem(itemId).
// Використовуй try...catch, щоб обробити помилки:
// Якщо товару з таким id немає в масиві — викидай помилку "Товар не знайдено".
// Використовуй Оператор && (КЗ): перевір, чи товар є в наявності (stock > 0) перед тим, як перевіряти баланс.
// Якщо грошей у player.balance менше, ніж ціна товару — викидай помилку "Недостатньо золота".

function buyItem(itemId) {
    try {
        const idCheck = inventory.find(item => item.id === itemId)
        if (!idCheck) throw new Error(`Товар не знайдено`)
        if (idCheck.stock <= 0 ) throw new Error(`Товара немає в наявності`)
        if (player.balance < idCheck.price) throw new Error(`Недостатньо золота`)
    } catch(error){
        console.log(error.message)
    }

    return buyItem
}
buyItem(1)

//4. Робота з базою (Методи масивів)
// Фільтрація: Створи функцію, яка повертає новий масив лише з магічними предметами (категорія "magic").
// Трансформація (Map): Створи масив priceTags, який містить лише назви та ціни товарів у форматі "Меч: 100$".
// Цикл: Використовуй forEach, щоб вивести в консоль повідомлення про кожен товар: "На складі залишилось [stock] одиниць товару [name]".

const magicItems = inventory.filter(item => item.category === 'magic')
const priceTags = inventory.map(({name, price}) => `${name}: ${price}$`)

inventory.forEach(({name, stock}) => console.log(`На складі залишилось ${stock} одиниць товару ${name}`))

//5. Оновлення профілю (Spread & Деструктуризація)
// Напиши функцію updateNickname(newName).
// Використовуй Spread оператор (...), щоб створити копію об'єкта гравця з новим ім'ям, не змінюючи оригінальний об'єкт.
// Використовуй Деструктуризацію, щоб витягнути hp та lvl з об'єкта гравця і вивести їх окремими змінними.

function updateNickname(newName){
    const newPlayer = {
        ...player,
        nickname: newName
    }
    const {stats: {hp, lvl}} = newPlayer
    console.log(`Hp:${hp}, Level:${lvl}`)
    return newPlayer
}
updateNickname(`Ivan`)

//. Просунута логіка (Switch та Регулювання)
// Створи систему "Зміни статусу" через switch(action). Якщо action "heal" — додавай HP, якщо "levelUp" — збільшуй рівень.

function changeStatus(action, value) {
    switch(action) {
        case "heal":
            player.stats.hp += value;
            console.log(`Гравець вилікуваний на ${value} HP. Тепер HP: ${player.stats.hp}`);
            break;
        case "levelUp":
            player.stats.lvl += value;
            console.log(`Гравець піднявся на ${value} рівнів. Тепер рівень: ${player.stats.lvl}`);
            break;
        default:
            console.log("Невідома дія");
    }
}
changeStatus("heal", 20);

