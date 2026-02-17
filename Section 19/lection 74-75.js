//- **74-75. While:** Напиши цикл, який генерує випадкові числа, поки не випаде 10.

// let i = 0;

// while (i < 5 ){
//     console.log(i)
//     i++
// }

let random;

do {
    random = Math.floor(Math.random() * 51);
    console.log(random);
} while (random !== 10);
