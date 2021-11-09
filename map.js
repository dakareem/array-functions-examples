// map function
const characters = [
    {
        name: 'reem daka',
        height: '169',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'john sam',
        height: '182',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'liran danko',
        height: '170',
        eye_color: 'green',
        gender: 'male',
    },
    {
        name: 'ash kalon',
        height: '169',
        eye_color: 'blue',
        gender: 'female',
    },
]

// 1 : get array of all names

const getNames = characters.map((character) => {
    return character.name
});
console.log(getNames)


// 2 : get array of all heights

const getHeights = characters.map((character) => {
    return character.height
})
console.log(getHeights)


// 3 : get array of objects with just name and height properties

const getObject = characters.map((character) => ({
    name: character.name,
    height: character.height,
}))
console.log(getObject)


// 4 : get araay of all first names

const firstNames = characters.map((character) => character.name.split(' ')[0]);
console.log(firstNames)
