"use strict";
var Category;
(function (Category) {
    Category["Fiction"] = "fiction";
    Category["NonFiction"] = "Non-fiction";
    Category["Science"] = "Science";
    Category["History"] = "History";
    Category["Children"] = "Children";
})(Category || (Category = {}));
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        if (this.books.some((b) => b.id === book.id)) {
            console.log(`Book with ID ${book.id} already exists`);
            return;
        }
        this.books.push(book);
        console.log(`Book ${book.title} added successfully`);
    }
    listBooks() {
        return this.books;
    }
    //   searchBookByTitle(title:string):void{
    //     const result=this.books.filter(book=>book.title.toLowerCase().includes(title.toLocaleLowerCase()));
    //     if(result.length){
    //         console.log('Search results');
    //     }
    //   }
    searchBookByTitle(title) {
        let arr = [];
        const result = this.books.some((book) => book.title.toLowerCase() === title.toLowerCase());
        if (!result) {
            console.log("No book found by this title");
        }
        this.books.forEach((book) => {
            if (book.title === title) {
                arr.push(book);
            }
        });
        return arr;
    }
    searchByCategory(category) {
        let arr = [];
        const result = this.books.filter((book) => book.category === category);
        if (!result) {
            console.log("No book found by this category");
        }
        this.books.forEach((book) => {
            if (book.category === category) {
                arr.push(book);
            }
        });
        return arr;
    }
    searchByAvailable(isAvailable) {
        let arr = [];
        const result = this.books.filter((book) => book.isAvailable === isAvailable);
        if (!result) {
            console.log("No book find by this");
        }
        this.books.forEach((book) => {
            if (book.isAvailable === isAvailable) {
                arr.push(book);
            }
        });
        return arr;
    }
}
const library = new Library();
const newBook = {
    id: 1,
    title: "abcd",
    author: "pqrs",
    category: Category.NonFiction,
    isAvailable: false,
};
const abc = {
    id: 2,
    title: "abcde",
    author: "pqrs",
    category: Category.Fiction,
    isAvailable: true,
};
const abc1 = {
    id: 4,
    title: "abcdf",
    author: "pqrs",
    category: Category.History,
    isAvailable: true,
};
const abc2 = {
    id: 3,
    title: "abcd",
    author: "pqrs",
    category: Category.Fiction,
    isAvailable: true,
};
library.addBook(newBook);
library.addBook(abc);
library.addBook(abc1);
library.addBook(abc2);
const searchResult = library.searchBookByTitle("pqrs");
const searchCategory = library.searchByCategory(Category.Fiction);
const searchAvailability = library.searchByAvailable(false);
// console.log(searchResult);
// console.log(searchCategory);
console.log(searchAvailability);
