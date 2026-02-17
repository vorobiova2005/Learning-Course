//76. For in (об'єкти):** Пробіжи по об'єкту `user` і виведи всі ключі.

const user = {
    name: 'Ivan',
    age: 25,
    country: 'Ukraine'
}

for (const key in user){
    console.log(key, user[key])
}