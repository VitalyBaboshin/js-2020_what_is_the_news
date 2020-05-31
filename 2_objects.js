const person = {
    name: 'M',
    age: 30
}

// console.log(Object.getOwnPropertyDescriptor(person, 'age'));
// console.log(Object.getOwnPropertyDescriptors(person));

// console.log(Object.entries(person));
// console.log(Object.fromEntries([ [ 'name', 'M' ], [ 'age', 30 ] ]));
// console.log(Object.fromEntries(Object.entries(person)));

// console.log(Object.entries(['M', 'A', 'X']))

// for (const [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }
// for (const [key, value] of Object.entries(person)) {
//     console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`);
// }

console.log('Значения: ' ,  Object.values(person))
console.log('Ключи: ', Object.keys(person))
