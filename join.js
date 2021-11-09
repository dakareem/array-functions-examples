// JOIN function
// separated by commas or a specified separator string

const countries = ['Romania', 'United States', 'India', 'Canada']

// option 1
console.log(countries.join(','))
console.log(countries.join('-'))

// option 2
const res = countries.join('-');
console.log('this is all countries' + ' ' + res)
debugger