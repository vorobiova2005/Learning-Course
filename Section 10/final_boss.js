//🎮 Симуляція: «Злиття профілів користувачів»
// Користувач зайшов через Google, і у нас є його старий профіль на сайті.
// Потрібно створити новий об'єкт finalProfile, об'єднавши поля з localProfile та googleProfile, при цьому дані з Google мають бути пріоритетними (заміщувати старі дані).

const localProfile ={
    name: 'Олексій',
    email: 'old_mail@example.com',
    status: 'active',
    city: 'Kyiv'
}
const googleProfile ={
    name: 'Alex',
    email: 'alex.google@gmail.com',
    avatar: 'link_to_photo.jpg'
}

const finalProfile ={
    ...localProfile,
    ...googleProfile
}

console.table(finalProfile)