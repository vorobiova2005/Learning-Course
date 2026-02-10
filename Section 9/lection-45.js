//45. Ланцюжки виразів: Реалізуй логіку: Вхід дозволено = (є квиток АБО є запрошення) ТА старше 18.

const person = 20
const ticket = true
const invitation = false

function sendMessage(){
    console.log('Вхід дозволено')
}

const canEnter = (ticket || invitation) && person >= 18

canEnter && sendMessage()