//38.	Логічні оператори: Маємо змінні isAdmin = true та isBanned = false.
// Напиши умову доступу: "користувач є адміном І НЕ забанений".


let isAdmin = true
let isBanned = false

if (isAdmin !== false && isBanned !== true) {
    console.log(`Доступ надано`)
} else {
    console.log(`Доступ заборонено`)
}