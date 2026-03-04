//106. Async: Зроби звичайну функцію асинхронною, додавши лише одне слово.

// async function asyncFn(){
// //повертає проміс
// }

const asyncFn = async () => {
    return 'Success!'
}

asyncFn()
    .then(value => console.log(value))