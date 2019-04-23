// Example 1#
// Let’s say we have an array of numbers and we want to create a new array which contains double of each value of the first array.
// let a = [1, 2, 3, 4, 5]

// const newArray = a.map(num => (num * 2))

// console.log(newArray)

// Let’s see how we can solve the problem with and without Higher-Order Function.
// let a = [1, 2, 3, 4, 5]

// const multi = []

// for(let i=0; i<a.length; i++){
//     if(a[i] >= 1){
//         multi.push(a[i]*2)
//     }
// }

// console.log(multi)

// Example 2#
// Let’s say we have an array containing the birth year of 
// different persons and we want to create an array that contains their ages.
 
// let birthYear = [1993, 1978, 1964, 1999]

// let ages = birthYear.map(birthYear => {
//     return 2019 - birthYear
// })

// console.log(ages)


// Example 1#
// Let’s say we have an array which contains objects with name and age properties.
//  We want to create an array that contains only the persons with full age 
//  (age greater than or equal to 18).

let persons = [
    {
        name: "Rob",
        age: 23
    },
    {
        name: "Bob",
        age: 32
    },
    {
        name: "John",
        age: 16
    },
    {
        name: "Jurek",
        age: 13
    },
    {
        name: "Sevko",
        age: 78
    }
]

// let persons2 = []

// for(let i = 0; i < persons.length; i++){
//     if(persons[i].age >= 18){
//         persons2.push({
//             name: persons[i].name,
//             age: persons[i].age
//         })
//     }
// }
// console.log('persons2', persons2)


let newArrayTest = persons.filter(item => item.age >= 18)

console.log('newArrayTest', newArrayTest)