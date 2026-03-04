/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


const cars = [
    { carBrand: 'Honda', price: 22000, isAvailableForSale: true },
    { carBrand: 'Tesla', price: 60000, isAvailableForSale: true },
    { carBrand: 'Ford', price: 18000, isAvailableForSale: false }
]

const newCar = { carBrand: 'BMW', price: 45000, isAvailableForSale: false }

cars.push(newCar)

console.log(cars)