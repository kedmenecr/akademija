//Constructors

function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
    this.getSummary = function(){
        return `${this.title} is written by the ${this.author}, in the year ${this.year}.`
    }
}

// getSummary

Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.age}`
}

//Magazine constructor

function Magazine(title, author, year, month){
    Book.call(this, title, author, year)
    this.month = month
}
//INherit Prototype

Magazine.prototype = Object.create(Book.prototype)

//Instantiate Magazine Object

const mag1 = new Magazine ('Mag One', 'John Doe', 2019, 'April')

//Use magazine constructor

Magazine.prototype.constructor = Magazine

console.log(mag1)







