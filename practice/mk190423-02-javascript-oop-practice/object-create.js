// Object of protos

const bookProtos = {
    getSummary: function() {
        return `${this.title} is written by the ${this.author}, in the year ${this.year}.`
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} old`
    }
}

//Creating an object with protos 

// const book1 = Object.create(bookProtos)
// book1.title = 'Book One'
// book1.author = 'John Doe'
// book1.year = 2013 


//Rarely used 
// const book1 = Object.create(bookProtos, {
//     title: { value: 'Book One'},
//     author: { value: 'John Doe'},
//     year: { value: 2013}
// })

// console.log(book1)