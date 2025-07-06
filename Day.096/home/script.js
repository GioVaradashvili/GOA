// 1. შექმენით წიგნის ობიექტი
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel",
    price: 10.99
};
console.log(book);
// Dot Notation
console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.genre);
console.log(book.price);

// Bracket Notation
console.log(book['title']);
console.log(book['author']);
console.log(book['year']);
console.log(book['genre']);
console.log(book['price']);

console.log(`The book "${book.title}" was written by ${book.author} in the year ${book.year}. It is a ${book.genre} and costs $${book.price}.`);


// 2. შექმენით სტუდენტის ობიექტი
const student = {
    name: "John Doe",
    age: 21,
    faculty: "Computer Science",
    year: 3,
    gpa: 3.8
};
console.log(student);

// Dot Notation
console.log(student.name);
console.log(student.age);
console.log(student.faculty);
console.log(student.year);
console.log(student.gpa);

// Bracket Notation
console.log(student['name']);
console.log(student['age']);
console.log(student['faculty']);
console.log(student['year']);
console.log(student['gpa']);

console.log(`The student ${student.name} is ${student.age} years old, studies ${student.faculty}, is in year ${student.year}, and has a GPA of ${student.gpa}.`);