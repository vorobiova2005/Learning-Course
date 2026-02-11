//50. Параметри за замовчуванням: Напиши функцію createButton(text, color), де колір за замовчуванням — 'blue'.

function createButton (text, color = 'blue'){
    console.log(`Наша кнопка має текст ${text} і колір ${color}`)
}

createButton('Fuck')