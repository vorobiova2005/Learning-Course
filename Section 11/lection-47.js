//47. Конкатенація: З'єднай три змінні: protocol («https»), domain («https://www.google.com/search?q=google.com») і path («/search») в повний URL.

const protocol = 'https'
const domain = '://www.google.com/search?q=google.com'
const path = '/search'

const url = `${protocol}${domain}${path}`

console.log(url)

