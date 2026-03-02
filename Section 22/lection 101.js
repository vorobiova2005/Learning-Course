//101. Створення: Створи проміс, який одразу резолвиться
// (виконується успішно) числом 10.



const myPromise = new Promise((resolve, reject) =>{
    resolve(10);
});

myPromise
    .then(value =>{
        console.log(value);
    })
    .catch(error =>{

    })

