//37.	Пріоритетність: Ти пишеш формулу знижки. Ціна — 100, податок — 20, знижка — 10%.
// Виправ помилку в коді: total = 100 + 20 * 0.9 (знижка має застосовуватися до всієї суми).


const price = 100
const tax = 20
const discount = 0.9

let total = (price + tax) * discount

console.log(total)