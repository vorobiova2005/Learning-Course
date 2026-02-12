// 7.	Дестр. параметрів: Напиши функцію showProfile, яка приймає об'єкт користувача, але в аргументах одразу витягує name та age.

const userProfile = {
    name: 'Bogdan',
    age: 22,
    hasSignedAgreement: false
}

const userInfo = ({name, age}) => {
    if(!name) {
        return `User ${name} has no doc`
    }
    return `User ${name} has doc`
}

console.log(userInfo(userProfile))