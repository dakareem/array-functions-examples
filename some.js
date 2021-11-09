// SOME function

const characters = [
    {
        name: 'reem daka',
        height: '169',
        mass: '61',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'john sam',
        height: '182',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'liran danko',
        height: '170',
        mass: '77',
        eye_color: 'green',
        gender: 'male',
    },
    {
        name: 'ash kalon',
        height: '169',
        mass: '69',
        eye_color: 'blue',
        gender: 'female',
    },
]


// 1 : is there at least one male character ?

const oneMaleCharecter = characters.some((character) => {
    return character.gender === 'male'
});
console.log(oneMaleCharecter)


// 2 : is there at least one character with blue eyes ?
const characterWithBlueEyes = characters.some((character) => {
    return character.eye_color === 'blue'
})
console.log(characterWithBlueEyes)


// 3 : is there at least one character taller than 200 ?

const characterTallerThan200 = characters.some((character) => {
    return character.height > 200
})
console.log(characterTallerThan200)


// 4 : is there at least one character that has mass less than 50 ?

const characterMasslessThan50 = characters.some((character) => {
    return character.mass < 50
});
console.log(characterMasslessThan50)
