// Sort function
// compare function

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



// 1 : sort by mass

const byMass = characters.sort((character1, character2) => {
    return character1.mass - character2.mass;
})
console.log(byMass)


// 2 : sort by height

const byHeight = characters.sort((character1, character2) => {
    return character1.height - character2.height;
})
console.log(byHeight)


// 3 : sort by name

const byName = characters.sort((character1, character2) => {
    if (character1.name < character2.name) return -1;
    return 1;
});

console.log(byName)


// 4 : sort by gender

const byGender = characters.sort((character1, character2) => {
    if (character1.gender === 'female') return -1;
    return 1;
});
console.log(byGender)
debugger