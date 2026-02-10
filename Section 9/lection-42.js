//42. Оператор && (КЗ - коротке замикання): Є змінна user.
// Напиши перевірку: якщо user існує, вивести user.name (захист від помилки/крашу).

const user = {
    name: 'Ivan',
    age: 30,
}
// if(user){
//     console.log(user.name)
// }

user && console.log(user.name)