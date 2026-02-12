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

// const buttonInfo = {
//     text: 'Buy'
// }
//
// const buttonStyle = {
//     color: 'yellow',
//     width: 200,
//     height: 300
// }
//
// const button = {
//     ...buttonInfo,
//     ...buttonStyle
// }
//
// console.table(button)

//12
//
// setTimeout(function (){
//     console.log('KJFnjfnfdnf')
// }, 1000)
//
// setTimeout(() =>{
//     console.log('KJFnjfnfdnf')
// }, 1000)

// function multByFactor(value, multiplier = 1) {
//     return value * multiplier
// }
//
// console.log(multByFactor(10, 2));
// console.log(multByFactor(10));

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt
// })
//
// const firstPost = {
//     id: 1,
//     author: 'Bogdan'
// }
// console.log(newPost(firstPost))

//13
// console.log("continue...")
// const fnWithError = () => {
//     throw new Error('Some error')
// }
// try {
//     fnWithError()
// } catch (error){
//     console.error(error)
//     console.log(error.message)
// }
// console.log("continue...")

//14
// let a;
// const b = 5;
// if (a > b) {
//     console.log('a is larger');
// }
//
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

//15
//Варіанти створення масивів
// const myArray = [1, 2, 3]
// console.log(myArray)
//
// const myArray2 = new Array(1, 2, 3)
// console.log(myArray2)

const meArray = [1, true, 'a']

console.log(meArray)
console.log(meArray[0])
console.log(meArray[1])

console.log(meArray.length)

meArray[2] = 'abc'
console.log(meArray)
meArray[3] = false
console.log(meArray)

meArray.push('hbhb')
console.log(meArray)

meArray.pop()
console.log(meArray)

meArray.unshift('jhbhjbhj')
console.log(meArray)

meArray.shift()
console.log(meArray)


meArray.forEach(el => console.log(el * 2))

console.log(meArray)

const newArray = meArray.map(el => el * 3)
console.log(newArray)
console.log(meArray)