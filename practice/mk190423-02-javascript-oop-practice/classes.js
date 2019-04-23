//classes 

class Book {
    constructor(title, author, year) {
        this.title = title, 
        this.author = author, 
        this.year = year 
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    getYear(){
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} years old`
    }
    revise(newYear){
        this.year = newYear,
        this.revised = true
    }

    static topBookStore(){
        return 'Barns&Noble'
    }
}

// Instantiate Object

const book1 = new Book('Book One', 'John Doe', 2013)

Book.topBookStore(); 
console.log(Book.topBookStore())

