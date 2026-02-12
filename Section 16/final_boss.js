//8.	🎮 Симуляція: «Обробка відповіді API»
// З сервера прийшов складний об'єкт response (з полями data, status, headers).
// Витягни з data поля userName та id в окремі змінні одним рядком.

const response = {
    data: {
        userName: 'Ivan',
        id: 7,
        role: 'admin'
    },
    status: 'Active',
    headers: {
        contentType: 'application/json'
    }
}
const {userName, id} = response.data

console.log(userName, id)

