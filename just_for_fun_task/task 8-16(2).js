//🚀 Вхідні дані (Data)
// 🛰 Завдання: Контроль систем станції
// Тепер твоя мета — перевірити станцію на придатність до життя та підготувати звіт для Землі.

const stationModules = [
    {name: "Life Support", status: "active", oxygenLevel: 95, integrity: 0.9},
    {name: "Navigation", status: "active", oxygenLevel: 80, integrity: 1.0},
    {name: "Communication", status: "warning", oxygenLevel: 40, integrity: 0.7},
    {name: "Research Lab", status: "standby", oxygenLevel: 85, integrity: 0.85}
];

const stationSpecs = {
    stationId: "ISS-Next-2026",
    crew: {
        commander: "Commander Shepherd",
        engineers: ["Liara", "Garrus"],
        scientists: ["Mordin"]
    },
    coordinates: [145.8, -23.4, 500.1]
};

// Крок 1: Глибока деструктуризація (Секція 16)
// Витягни наступні дані зі stationSpecs:
// stationId в окрему змінну.
// commander (ім'я командира).
// Першого інженера зі списку engineers (використовуй деструктуризацію масиву всередині об'єкта).
// Виведи в консоль: "Станція: [ID]. Командир: [commander]. Головний інженер: [engineer]".

const {stationId, crew: {commander, engineers: [firstEngineers]}} = stationSpecs

console.log(`Станція: ${stationId}. Командир: ${commander}. Головний інженер: ${firstEngineers}`)

//Крок 2: Пошук та Spread (Секція 15 + 10)
// На станцію прибув новий вчений — "Tali".
// Створи новий масив updatedScientists, який включає всіх старих вчених + нову "Tali" (використовуй spread оператор ...).
// Знайди в масиві stationModules модуль, у якого статус — "warning" (використовуй метод .find()). Виведи його назву.

const newScientists = ['Tali', 'Genre']

const updatedStationSpecs = {
    ...stationSpecs,
    crew: {
        ...stationSpecs.crew,
        scientists: [...stationSpecs.crew.scientists, ...newScientists]
    }
}
console.log(updatedStationSpecs)

const stationModulesBrok = stationModules.find(modstat => modstat.status === 'warning')

console.log(stationModulesBrok.name)


//Крок 3: Складна трансформація через map (Секція 15 + 16)
// Земля просить перевести integrity (цілісність) у відсотки.
// Створи масив integrityReports. Використовуй map на stationModules.
// Деструктуризуй name та integrity у параметрах.
// Поверни новий об'єкт: { moduleName: name, health: integrity * 100 + "%" }.

const integrityReports = stationModules.map(({name, integrity}) => {
    return {
        moduleName: name,
        health: integrity * 100 + '%'
    }
})

console.log(integrityReports)

//Крок 4: Фільтрація та Логіка (Секція 15 + 9)
// Система безпеки повинна виділити модулі, де рівень кисню (oxygenLevel) нижче 85 ТА статус не є "active".
// Використовуй .filter() та логічні оператори && і !==.
// Результат запиши в criticalModules.

const criticalModules = stationModules.filter(({oxygenLevel, status}) => {
    return oxygenLevel < 85 && status !== "active";
})

console.log(criticalModules)

//Крок 5: Аварійна функція (Секції 12, 13, 11)
// Напиши стрілочну функцію checkSecurity(module).
// Вона приймає об'єкт модуля.
// Якщо integrity модуля менше 0.8, вона має викинути помилку (throw new Error("Critical integrity loss!")).
// Огорни виклик цієї функції для модуля "Communication" у try...catch.
// У блоці catch виведи: "УВАГА! Модуль [назва] потребує ремонту!".

const checkSecurity = ({integrity}) => {
    if (integrity < 0.8) {
        throw new Error("Critical integrity loss!")
    }
}
const commModule = stationModules.find(module => module.name === 'Communication')

try {
    checkSecurity(commModule)
} catch (error) {
    console.log(`УВАГА! Модуль ${commModule.name} потребує ремонту!`)
}

const editionPartForCommander = " Sheron"
const newEngineers = ["Jack", "Tom"]
const newCoordinates = [15.38]

const updatedStationSpecs2 = {
    ...stationSpecs,
    crew:{
        ...stationSpecs.crew,
        commander: stationSpecs.crew.commander + editionPartForCommander,
        engineers: [...stationSpecs.crew.engineers, ...newEngineers]
    },
    coordinates: [...stationSpecs.coordinates, ...newCoordinates]
}

console.log(updatedStationSpecs2)

const [, {name}, {oxygenLevel}, {status}] = stationModules

console.log(name, oxygenLevel, status)