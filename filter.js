// FILTER function
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

// 1 : get characters with mass greater than 75

const MassGreaterThan100 = characters.filter(character => {
    return character.mass > 75
})
console.log(MassGreaterThan100)


// 2 : get characters with height less than 170

const heightLessThan170 = characters.filter(character => {
    return character.height < 170
})
console.log(heightLessThan170)


// 3 : get all male characters

const getAllMaleCharacters = characters.filter(character => {
    return character.gender === 'male'
})
console.log(getAllMaleCharacters)


// 4 : get characters with green ayes

const greenEye = characters.filter(character => {
    return character.eye_color === 'green'
})
console.log(greenEye)