//69. Switch:** Перепиши умови світлофора (Red/Yellow/Green) на `switch`.

const trafficLight = 'Yellow'

switch (trafficLight){
    case 'Red':
        console.log('Стій')
        break
    case 'Yellow':
        console.log('Готуйся')
        break
    case 'Green':
        console.log('Рушай')
        break
    default:
        console.log('Світлофор не працює')
}