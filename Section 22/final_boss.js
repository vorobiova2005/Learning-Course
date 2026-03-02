//🎮 Симуляція: «Завантаження картинки»
// Напиши проміс, який «завантажує» картинку протягом 2 секунд (setTimeout).
// Якщо успіх — виводить «Картинка завантажена».
// Якщо помилка (випадково) — «Помилка мережі».

const myPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const isSuccess = Math.random() > 0.3

        if (isSuccess){
            resolve('Картинка завантажена')
        } else {
            reject('Помилка мережі')
        }
    }, 2000)


});

myPromise
    .then(value =>{
        console.log(value);
    })
    .catch(error =>{
        console.error(error);
    })
