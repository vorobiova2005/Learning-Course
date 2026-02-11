//46. Spread: Є налаштування за замовчуванням defaultSettings і налаштування користувача userSettings.
// Створи currentSettings, об'єднавши їх в один об'єкт.


const defaultSettings = {
    theme: 'lights',
    language: 'Ukrainian',
    volumeLevel: 50
}

const userSettings = {
    theme: 'dark',
    volumeLevel: 80
}

const currentSettings = {
    ...defaultSettings,
    ...userSettings
}

console.table(currentSettings)
