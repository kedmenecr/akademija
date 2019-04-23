// Creating object constructor
// Create an object constructor for persons 

// function Person (firstName, lastName, age){
//     this.firstName = firstName, 
//     this.lastName = lastName, 
//     this.age = age
// }

// const person1 = new Person('Mateo', 'Komljenovic', 25)

// console.log(person1)

// const person2 = new Person('Robi', 'Kedmenec', 23)

// console.log(person2)

//Create an object with constructor and add one prototype function

// function Person (firstName, lastName, age, job){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age
//     this.job = job
//     this.occupation = function(){
//         return `The occupation of ${firstName} ${lastName}, age: ${age} is ${job}.`
//     }
// } 

// const programmer = new Person('Robi', 'Bobi', 23, 'programmer')

// console.log(programmer.occupation())

// Create an object with constructor and add one prototype function

// function Company(name, city, address, employees){
//     this.name = name, 
//     this.city = city, 
//     this.address = address, 
//     this.employees = employees
//     this.mission = function(){
//         return `The ${name} is a fucking awesome company from ${address} in ${city} with ${employees} employees`
//     }
// }

// let acme = new Company('ACME', 'New York', '5th Avenue', 654)

// Company.prototype.revise = function(newEmployees){
//     this.employees = newEmployees, 
//     this.revised = true
// }

// console.log(typeof Company.prototype.revise)

// acme.revise(690)
// console.log(acme.mission())
// console.log(acme)

//Create a new object constructor 

function Person (firstName, lastName, age, job){
    this.firstName = firstName,
    this.lastName = lastName, 
    this.age = age,
    this.job = job
    this.comment = function(){
        return `${firstName} ${lastName}, ${age} who works as ${job} is awesome`
    }
}

const person3 = new Person ('John', 'Doe', 35, 'designer')

console.log(person3.comment())
console.log(person3)

Person.prototype.newAge = function(ageNew){
    this.age = ageNew, 
    this.ageNew = true 
}

person3.newAge(37)
console.log(person3)