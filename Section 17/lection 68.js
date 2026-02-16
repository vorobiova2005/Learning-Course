//68. If у функціях:** Функція `checkAccess(role)`.
// Якщо роль не “admin”, відразу роби `return false`.
const user = {
    name: 'Ivan',
    age: 25,
    role: 'admin'
}
function checkAccess(user){
    if (user.role !== 'admin'){
        return false
    } else{
        console.log('Вітаємо вас')
        return true;
    }
}

checkAccess(user)