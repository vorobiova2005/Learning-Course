//🎮 Симуляція: «Отримання даних користувача»
// Напиши функцію getUserData().
// Вона має через await дочекатися запиту до API,
// потім через await дочекатися перетворення у JSON і повернути об'єкт.
// Огорни все в блок try/catch.


const getUserData = async (url) =>{
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

try {
    const data = await getUserData(url)
    console.log(data)
} catch (error){
    console.log(error.message)
}