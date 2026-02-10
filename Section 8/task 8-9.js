//🏆 ФІНАЛЬНИЙ КВЕСТ: «Злам Сховища Стародавніх» Називається стало нудно
const hero= {
    hp: 70,
    mana: 15,
    name: 'Рейнджер',
    hasKeyCard: false
}

const gate = {
    correctCode: 5555,
    isAlarmPowerOn: false,
    minManaRequired: 30
}

const inputData = {
    inputCode: 5555,
    isFingerPrintOk: true
}

function startMission () {
    if (typeof inputData.inputCode !== 'number') {
        console.log(`Система: Код має бути цифровим!`);
        return;
    }

    console.log(`Зачекайте, йде перевірка... 🔄`);

    const gateOpen = ((inputData.inputCode === gate.correctCode) || inputData.isFingerPrintOk) && !gate.isAlarmPowerOn

    const gateOpenCard = hero.hasKeyCard

    const canEnter = gateOpen || gateOpenCard

    canEnter && console.log(`Доступ дозволено! Вітаємо, ${hero.name}!`)

    if (canEnter && hero.mana < gate.minManaRequired) {
        hero.hp -= 40
        console.log(`Спрацював захист! HP знижено до: ${hero.hp}`)
    }

    const isMissionSuccess = canEnter && hero.hp > 0

    //isMissionSuccess && console.log(`Місія виконана! Вітаю тебе ${hero.name}`)
    if (isMissionSuccess) {
        console.log(`Місія виконана! Вітаю тебе ${hero.name}`)
    } else {
        console.log(`Місія провалена`)
    }
}

startMission()


//Додаткові якісь частинки коду буи написані під час розробки основної логіки, а потім викинуті.
// if(typeof inputData.inputCode !== 'number') {
//        console.log(`Система: Код має бути цифровим!`);
// }

// function gateOpen(data, gate, hero){
//     if (((data.inputCode === gate.correctCode)  || data.isFingerPrintOk) && !gate.isAlarmPowerOn) {
//         console.log(`Доступ дозволено! Вітаємо, ${hero.name}!`)
//     } else if (hero.hasKeyCard) {
//         console.log(`Доступ дозволено! Вітаємо, ${hero.name}!`)
//     } else {
//         console.log(`Відмовлено в доступі`)
//     }
// }
// gateOpen(inputData, gate, hero)


