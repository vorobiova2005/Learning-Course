//	44. Трюк з && та функцією: Якщо isConnected дорівнює true, виконай функцію sendMessage(), не використовуючи if.

const isConnected = true

function sendMessage(){
    console.log('Повідомлення відправлено')
}


isConnected && sendMessage()
