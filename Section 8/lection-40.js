//40.	Практика з typeof: З сервера надійшли дані. Перевір, чи дійсно змінна age є числом.

const user = {
    name: 'Ivan',
    age: 30,
}

//console.log(typeof user.name)
if(typeof user.age === 'number'){
    console.log(`Дякую за вашу відповідь`)
} else {
    console.log(`Що ти блін написав, там же ж написано вік, там цифри пиши!`)
}
