//🎮 Симуляція: «Управління плейлистом»
// Є масив пісень (об'єктів). Потрібно:
// 1) Видалити останню пісню.
// 2) Додати нову на початок.
// 3) Створити новий масив, де будуть тільки назви пісень (рядки).

const playlist = [
    { title: 'Blinding Lights', artist: 'The Weekend' },
    { title: 'Starboy', artist: 'The Weekend' },
    { title: 'Shape of You', artist: 'Ed Sheeran' }
];

//1
playlist.pop()
console.log(playlist)
//2
playlist.unshift({title: 'Flowers', artist: 'Miley Cyrus'})
console.log(playlist)
//3
const songs = playlist.map(songs => (songs.title))
console.log(songs)

const artists = playlist.map(art => (art.artist))
console.log(artists)