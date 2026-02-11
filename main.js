// const personOne = {
//     name: 'Bob',
//     age: 32,
// }
//
// function inscreasePersonAge(person){
//     person.age += 1
//     return person
// }
//
// inscreasePersonAge(personOne)
// console.log(personOne.age)
// let a
// let b
//
// function myFn(){
//     let b
//     a = true
//     b = 10
//     console.log(b)
// }
//
// myFn()
//
// console.log(a)
// console.log(b)

// const a = 5
//
// function myFn() {
//     function innerFn(){
//         console.log(a)
//     }
//     innerFn()
// }
// myFn()

// let a, b
// a = 10
// b = a + 5
//
// let c = a + b
// console.log(c)

//10
// const button = {
//     width: 200,
//     text: 'Buy'
// }
//
// const redButton = {
//     ...button,
//     color: 'red'
// }
// console.table(redButton)

const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(button)