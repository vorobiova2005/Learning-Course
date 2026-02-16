//65-67. If/Else:** Напиши перевірку віку. < 12: «Дитина»,
// 12-18: «Підліток», > 18: «Дорослий».

let age = 5;

if(age <= 12){
    console.log('Дитина')
} else if(age > 12 && age <= 18){
    console.log('Підліток')
} else if(age > 18){
    console.log('Дорослий')
}

