const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for loop

// for(let i = 0; i < companies.length; i++)
// console.log(companies[i])

//forEach - a better way to loop through array than the for loop. Doesn't return anyhting back

// companies.forEach(function(company, index, companies){
//     console.log(company)
// })

//filter
//Get 21 and older
//for
// let canDrink = []
// for(let i = 0; i<ages.length; i++){
//   if(ages[i]>=21){
//       canDrink.push(ages[i])
//   }
// }
//
//
//filter without ES6 arrow function
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true
//     }
// })

// filter with arrow function
// const canDrink = ages.filter(age => age > 21)

// console.log(canDrink)

//Filter retail companies

// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true
//     }
// })


//Filter with arrow function

// const retailCompanies = companies.filter(company => company.category === 'Retail')

//Filter all the companies that started in 1980ies

// const retailCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
// console.log(retailCompanies)

// All the companies that lasted more than 10 years
// const lastMore = companies.filter(company => (company.end - company.start) >= 10)
// console.log(lastMore)

//map - create a new array of anything from a current array

//Create array of company names

// const companyNames = companies.map(function(company){
//   return company.name
// })

//Longer way (ES5)
// const testMap = companies.map(function(company){
//   return `${company.name} [${company.start} - ${company.end}]`
// })

//ES6 Syntax
// const testMap = companies.map(company =>
//   `${company.name} [${company.start} - ${company.end}]`
// )

// console.log(testMap)

//Using math objects

//Ages squared
// const agesSquare = ages.map(age => Math.sqrt(age))

// //Ages times 2
// const agesDouble = ages.map(age => (age * 2))

// //If we want to square it, and then double it we do

// const agesSquaredDouble = ages
//     .map(age => Math.sqrt(age))
//     .map(age => (age*2))


// console.log(agesSquaredDouble)

//sort - it works similar to rest of these functions, but it sorts companies depending on what we want to do

// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1
//   } else {
//     return -1
//   }
// })

//ES6 form with ternary operators

// const sortedCompanies = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1)


// // Sort ages from lowest to highest 

// const sortAges = ages.sort((c1, c2)=> c1 - c2)
// console.log(sortAges)

//reduce - let's add all the ages together

// let ageSum = 0
// for(let i = 0; i < ages.length; i++){
//   ageSum += ages[i]
// }

//With reduce (ES5)

// const ageSum = ages.reduce(function(total, age) {
//   return total + age
// }, 0)

// With reduce (ES6)

// const ageSum = ages.reduce((total, age)=> total + age, 0)
// console.log(ageSum)

//Get the total years for all companies (ES6)

// const totalYears = companies.reduce((total,company) => total + (company.end - company.start), 0)
// console.log(totalYears)

//Combine methods

// const combine = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0)
// console.log(combine)












