//Задачка 1
// const user = {
//     name: "John",
//     age: 30,
//     isPremiun: false
// }

//Варіант 1
// const newUser = Object.assign({}, user);
//
// newUser.isPremiun = true;
// newUser.email = 'ex@gmail.com'
//
// console.log(user)
// console.log(newUser)
//Варіант 2
// function cloneAndUpgrade(objToClone) {
//     const updatedUser = Object.assign({}, objToClone);
//     updatedUser.isPremiun = true;
//     updatedUser.email = 'ex@gmail.com';
//     return updatedUser;
// }
//
// const newUser = cloneAndUpgrade(user);
//
// console.log(user);
// console.log(newUser);

//Задачка 2

// function showPrice(product) {
//     console.log('Іграшка ' + product.name + ' коштує ' + product.price + ' грн');
// }
// showPrice(toy)
// const newPrice = Object.assign({}, toy)
// newPrice.price = 500

// console.log(newPrice)

//
// const toy = {
//     name: 'Lego',
//     price: 300,
//     quantity: 100
// }
//
// function calculateTotal(product, quantity) {
//     const totalPrice = product.price * quantity
//     const discountPrice = totalPrice * 0.9
//     if (product.quantity >= quantity && quantity > 10) {
//         console.log(`Ви отримали знижку! Ціна зі знижкою за ${quantity} штук буде ${discountPrice}`)
//     } else if(product.quantity >= quantity && quantity <= 10) {
//         console.log(`${quantity} іграшки ${product.name} коштуватимуть ${totalPrice}`)
//     } else{
//         console.log('Вибачте, у нас немає стільки товару')
//     }
// }
// calculateTotal(toy, 5)
//
// function buyToy(product, count) {
//     if (product.quantity >= count) {
//         toy.quantity -= count
//         console.log(`Ви купили ${count} шт. На складі залишилося: ${toy.quantity} шт.`)
//     } else {
//         console.log('Вибачте у нас на складі немає стільки товару')
//     }
// }
//
// buyToy(toy, 10)
// console.log(toy)
// buyToy(toy, 20)
// console.log(toy)



//Задачка 3 Панель керування героєм
// const hero = {
//     name: 'Hero',
//     health: 90,
//     maxHealth: 100,
//     level: 1
// }
//
// function heal(points){
//     hero.health += points;
//     if(hero.health <= hero.maxHealth){
//         console.log(`Герой ${hero.name} полікований! Поточне здоров'я: ${hero.health}`);
//     }
//         console.log(`Герой не потребує більше лікування! Здоров'я ${hero.health}`)
// }
// heal(5)
//
//
// function levelUp() {
//     hero.level += 1;
//     hero.maxHealth += 20;
//     hero.health = hero.maxHealth;
//     console.log(`Вітаємо! Новий рівень: ${hero.level}. Максимальне здоров'я тепер: ${hero.maxHealth}`);
// }
// levelUp()

//Задачка 4 Автомат з кавою

//Мій код на початку
// const coffeeMachine ={
//     water: 500,
//     beans: 100,
//     cups: 5,
//     money: 0
// }
//
// const cappuccino = {
//     waterRequired: 200,
//     beansRequired: 20,
//     price: 50
// }
//
// function makeCoffee(recipe, customerMoney){
//     if (coffeeMachine.water >= recipe.waterRequired && coffeeMachine.beans >= recipe.beansRequired && coffeeMachine.cups > 0 && customerMoney >= recipe.price){
//         coffeeMachine.water -= recipe.waterRequired;
//         coffeeMachine.beans -= recipe.beansRequired;
//         coffeeMachine.cups -= 1;
//         customerMoney -= recipe.price;
//         coffeeMachine.money += recipe.price;
//         console.log(`Ваша кава готова! Ваша решта: ${customerMoney} грн. Залишилось води: ${coffeeMachine.water}. Залишилось зерен: ${coffeeMachine.beans} Залишилось стаканчиків: ${coffeeMachine.cups}`)
//     } else if(coffeeMachine.water >= recipe.waterRequired && coffeeMachine.beans >= recipe.beansRequired && coffeeMachine.cups > 0 && customerMoney < recipe.price){
//         console.log(`Недостатньо грошей для покупки`)
//     } else{
//         console.log(`Вибачте, ресурсів недостатньо!`)
//     }
// }
//
// makeCoffee( cappuccino, 30)
// makeCoffee( cappuccino, 50)
// makeCoffee(cappuccino, 100)
//
// console.log(coffeeMachine.money)

//Мій код після покращення

// const coffeeMachine ={
//     water: 500,
//     beans: 100,
//     cups: 5,
//     money: 0
// }
//
// const cappuccino = {
//     waterRequired: 200,
//     beansRequired: 20,
//     price: 50
// }
//
// function makeCoffee(recipe, customerMoney){
//     const hasResources =
//         coffeeMachine.water >= recipe.waterRequired &&
//         coffeeMachine.beans >= recipe.beansRequired &&
//         coffeeMachine.cups >= 0;
//
//     if(!hasResources){
//         console.log(`Вибачте, ресурсів недостатьо!`);
//
//     } else if(customerMoney < recipe.price){
//         console.log(`Недостатньо грошей для покупки`);
//
//     } else{
//         coffeeMachine.water -= recipe.waterRequired;
//         coffeeMachine.beans -= recipe.beansRequired;
//         coffeeMachine.cups -= 1;
//         customerMoney -= recipe.price;
//         coffeeMachine.money += recipe.price;
//         console.log(`Ваша кава готова! Ваша решта: ${customerMoney} грн. Залишилось води: ${coffeeMachine.water}. Залишилось зерен: ${coffeeMachine.beans} Залишилось стаканчиків: ${coffeeMachine.cups}`);
//     }
// }
//
// makeCoffee( cappuccino, 100);
// makeCoffee( cappuccino, 30);
// makeCoffee( cappuccino, 130);
// makeCoffee( cappuccino, 130);


//Задачка 5 Квиткова каса кінотеатру

const cinemaHall = {
    movieTitle: "Avatar",
    totalSeats: 50,
    occupiedSeats: 30,
    pricePerTicket: 150,
    bankAccount: 0
}

const customer = {
    name: "Ciren",
    money: 300,
    wantedTickets: 2
}

function buyTickets(hall, buyer){
    const cinemaSeats = hall.totalSeats - hall.occupiedSeats
    const totalSum = hall.pricePerTicket * buyer.wantedTickets

    if (cinemaSeats < buyer.wantedTickets){
        console.log(`Вибачте, у залі недостатньо вільних місць. Доступнa к-ть місць ${cinemaSeats}`)
    } else if (totalSum > buyer.money){
        console.log(`У вас недостатньо коштів для купівлі ${buyer.wantedTickets} квитків`)
    } else {
        buyer.money -= totalSum
        hall.bankAccount += totalSum
        hall.occupiedSeats += buyer.wantedTickets

        console.log(`Успішно! ${buyer.name}, ви купили ${buyer.wantedTickets} квитків на фільм ${hall.movieTitle}. Ваша решта: ${buyer.money}`)
    }

}

buyTickets(cinemaHall, customer)
console.log(cinemaHall)
console.log(customer)