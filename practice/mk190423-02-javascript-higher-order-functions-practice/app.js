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

//FOR Loop company name, then category, then start year, then end year
//company name

// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i].name)
// }

//category name

// for(let i = 0; i<companies.length; i++){
//     console.log(companies[i].category)
// }

//start year and end year

// for(let i = 0; i < companies.length; i++){
//     console.log(`Companies start year is: ${companies[i].start} and end year is: ${companies[i].end}`)
// }

//For each, now remember, for each doesn't return anything, so you will have to find the way to play with it
//Let's get all the items we had here in for each type, and return the name and start year of every company
// let newOrder = [];
// companies.forEach((companies) => {
//     newOrder.push({
//         name: companies.name,
//         year: companies.start
//     })
// })

// console.log(newOrder)

//Filtering with for loop

//Filter all the ages and sort them to be legal to drink
//Filter all the companies that started in or after 1995

// let canDrink = []
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 18){
//         canDrink.push(ages[i])
//     }
// }

// console.log(canDrink)

// let retailComp = []
// for(let i = 0; i < companies.length; i++){
//     if(companies[i].start >= 1995){
//         retailComp.push({
//             "name": companies[i].name,
//             "year": companies[i].start
//         })
//     }
// }
// console.log(retailComp)

//Now filter ages in ES6

// let drinkAge = ages.filter(function(age){
//     if(age >= 18){
//         return true
//     }
// })

// let drinkAge = ages.filter((age) => age >= 18)
// console.log(drinkAge)

// let overThirty = ages.filter((age) => age >= 30)
// console.log(overThirty)

const retail = companies.filter(function(company){
    if(company.category === 'Retail'){
        return true
    }
})
console.log(retail)

let retail2 = []
    for(let i = 0; i<companies.length; i++){
        if(companies[i].category == 'Retail'){
            retail2.push({
                name: companies[i].name,
                year: companies[i].start,
                category: companies[i].category
            })
        }
    }

console.log(retail2)

