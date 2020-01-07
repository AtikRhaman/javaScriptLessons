// Functional programming 
// forEach, map, filter, reduce, some, every, find
// Pure vs Impure Function
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Swizerland']
const strings = ['David', 'John', 'Atik', 'Helmi']

countries.forEach(function (item, index) {
  if (item == 'Finland' || item == 'Sweden') {
    item = item.toUpperCase()
  } else {
    item = item.toLowerCase()
  }
  console.log(index, item)
})