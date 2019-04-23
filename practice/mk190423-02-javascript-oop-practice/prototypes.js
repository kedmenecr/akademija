function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
    this.getSummary = function(){
        return `${this.title} is written by the ${this.author}, in the year ${this.year}.`
    }
}
//Get Summary

Book.prototype.getSummary = function (){
    return `${this.title} is written by the ${this.author}, in the year ${this.year}.`
}

// getAge

Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} old.`
}

//Revise / change year

Book.prototype.revise = function(newYear){
    this.year = newYear
    this.revised = true
}

//Instatiate an Object
const book1 = new Book('Book1', 'John Doe', 2013)
const book2 = new Book('Book2', 'Jane Doe', 2016)

console.log(book1)

book2.revise(2018)

console.log(book2)