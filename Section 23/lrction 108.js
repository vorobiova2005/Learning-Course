//108. Await: Є проміс sleep.
// Зупини виконання коду на ньому, використовуючи await.

const sleep = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000))

const asyncFn = async () =>{
    console.log('Timer starts')
    await sleep()
    console.log('Timer ended')
}

asyncFn()